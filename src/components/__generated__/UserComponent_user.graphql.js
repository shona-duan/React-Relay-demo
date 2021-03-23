/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserComponent_user$ref: FragmentReference;
declare export opaque type UserComponent_user$fragmentType: UserComponent_user$ref;
export type UserComponent_user = {|
  +name: string,
  +$refType: UserComponent_user$ref,
|};
export type UserComponent_user$data = UserComponent_user;
export type UserComponent_user$key = {
  +$data?: UserComponent_user$data,
  +$fragmentRefs: UserComponent_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserComponent_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Topic",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'c7e4b55a49b34ff7385e2f8c1da2c176';

module.exports = node;
