/**
 * Copyright (c) 2020 TypeFox GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

import { injectable } from 'inversify';
import { Terms } from '@gitpod/gitpod-protocol';

@injectable()
export class TermsProvider {
    getCurrent(): Terms {
        return currentTerms;
    }
}

const currentTerms: Terms = {
    activeSince: "2020-11",
    adminOnlyTerms: true,
    revision: "2020-11",
    updateMessage:
`### A high-level summary of the changes:
  * Tada 🎉
  * Tada 🎉
  * Tada 🎉

Read the [terms](https://www.gitpod.io/self-hosted-terms/) online.
`,
    content: `Read the [terms](https://www.gitpod.io/self-hosted-terms/) online.`
}
