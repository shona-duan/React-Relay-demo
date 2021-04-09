/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DateInfo$ref: FragmentReference;
declare export opaque type DateInfo$fragmentType: DateInfo$ref;
export type DateInfo = {|
  +updatedAt: any,
  +$refType: DateInfo$ref,
|};
export type DateInfo$data = DateInfo;
export type DateInfo$key = {
  +$data?: DateInfo$data,
  +$fragmentRefs: DateInfo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DateInfo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '1d27448fdc357ed8c36c1555b26662a2';

module.exports = node;
