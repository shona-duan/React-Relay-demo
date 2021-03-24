/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserInfo$ref: FragmentReference;
declare export opaque type UserInfo$fragmentType: UserInfo$ref;
export type UserInfo = {|
  +id: string,
  +email: string,
  +name: ?string,
  +$refType: UserInfo$ref,
|};
export type UserInfo$data = UserInfo;
export type UserInfo$key = {
  +$data?: UserInfo$data,
  +$fragmentRefs: UserInfo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserInfo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'f9b3c87dd81c9f6dd997b4b225d2a3ec';

module.exports = node;
