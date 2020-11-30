/**
 * Copyright (c) 2020 TypeFox GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

import "reflect-metadata";
import * as React from 'react';
import { getSvgPath } from '../../withRoot';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { GitpodHostUrl } from '@gitpod/gitpod-protocol/lib/util/gitpod-host-url';
import { Terms } from "@gitpod/gitpod-protocol";
import { ButtonWithProgress } from "../button-with-progress";
import * as Cookies from 'js-cookie';
import { mdRenderer } from './terms-renderer';

export interface TermsOfServiceProps {
    terms: Promise<Terms>;
}
interface TermsOfServiceState {
    isUpdate: boolean;
    terms?: Terms;
    acceptsTos: boolean;
}
export class TermsOfService extends React.Component<TermsOfServiceProps, TermsOfServiceState> {
    protected gitpodHost = new GitpodHostUrl(window.location.href);

    protected formRef: React.RefObject<HTMLFormElement>;

    constructor(props: TermsOfServiceProps) {
        super(props);
        this.state = {
            isUpdate: false,
            acceptsTos: false
        };
        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDecline = this.onDecline.bind(this);
    }

    componentWillMount() {
        this.onLoad();
    }

    protected async onLoad(): Promise<void> {
        const tosHints = Cookies.getJSON('tosHints');
        this.setState({ isUpdate: tosHints?.isUpdate === true });
        this.props.terms.then(terms => this.setState({ terms }));
    }

    protected renderMd(md: string | undefined): string {
        return mdRenderer.render(md || "");
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.doSubmit();
    }
    onDecline() {
        this.setState({ acceptsTos: false }, () => this.doSubmit());
    }
    protected doSubmit() {
        this.formRef.current!.submit();
    }

    protected actionUrl = this.gitpodHost.withApi({ pathname: '/tos/proceed' }).toString();
    render() {
        const content = this.renderMd(this.state.terms?.content);
        const acceptsTos = this.state.acceptsTos;
        const updateMessage = this.renderMd(this.state.terms?.updateMessage);
        const update = this.state.isUpdate;

        return (
            <div>
                <AppBar position='static'>
                    <Toolbar className="content toolbar">
                        <div className="gitpod-logo">
                            <a href={this.gitpodHost.toString()}>
                                <img src={getSvgPath('/images/gitpod-ddd.svg')} alt="Gitpod Logo" className="logo" />
                            </a>
                        </div>
                        <div style={{ flexGrow: 1 }} />
                    </Toolbar>
                </AppBar>
                <div className='content content-area'>
                    <h1>{update ? "Terms and Conditions Update" : "Before we proceed"}</h1>

                    <form ref={this.formRef} action={this.actionUrl} method="post" id="accept-tos-form">
                        <div className="tos-checks">
                            { update ? (
                                <Typography dangerouslySetInnerHTML={{ __html: updateMessage }} />
                            ) : (
                                <Typography dangerouslySetInnerHTML={{ __html: content }} />
                            ) }
                            <p>
                                <label style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox
                                        value="true"
                                        name="agreeTOS"
                                        checked={acceptsTos}
                                        onChange={() => this.setState({ acceptsTos: !acceptsTos })} />
                                    <span>
                                        I accept the {update ? "new" : ""} terms and conditions.
                                </span>
                                </label>
                            </p>
                        </div>
                        <div className="tos-buttons" data-testid="tos">
                            <ButtonWithProgress
                                className='button'
                                type='submit'
                                variant='outlined'
                                color={'primary'}
                                disabled={!acceptsTos}
                                data-testid="submit">
                                {acceptsTos ? 'Continue' : 'Accept to Continue'}
                            </ButtonWithProgress>
                            {update && (
                                <ButtonWithProgress
                                    className='button'
                                    variant='text'
                                    color={'secondary'}
                                    onClick={this.onDecline}
                                    data-testid="decline">
                                    {'Decline'}
                                </ButtonWithProgress>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}