/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type App_user$ref: FragmentReference;
declare export opaque type App_user$fragmentType: App_user$ref;
export type App_user = {|
  +id: string,
  +email: string,
  +name: ?string,
  +$refType: App_user$ref,
|};
export type App_user$data = App_user;
export type App_user$key = {
  +$data?: App_user$data,
  +$fragmentRefs: App_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_user",
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
(node/*: any*/).hash = '3e4069dcfbdb52f274a70370b18fc7fa';

module.exports = node;
