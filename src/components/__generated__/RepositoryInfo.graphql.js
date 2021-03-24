/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type UserInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RepositoryInfo$ref: FragmentReference;
declare export opaque type RepositoryInfo$fragmentType: RepositoryInfo$ref;
export type RepositoryInfo = {|
  +name: string,
  +stargazers: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +createdAt: any,
        +$fragmentRefs: UserInfo$ref,
      |}
    |}>
  |},
  +id: string,
  +$refType: RepositoryInfo$ref,
|};
export type RepositoryInfo$data = RepositoryInfo;
export type RepositoryInfo$key = {
  +$data?: RepositoryInfo$data,
  +$fragmentRefs: RepositoryInfo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  "stargazers"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count"
    },
    {
      "kind": "RootArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./RepositoryInfoPaginationQuery.graphql.js'),
      "identifierField": "id"
    }
  },
  "name": "RepositoryInfo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": "stargazers",
      "args": null,
      "concreteType": "StargazerConnection",
      "kind": "LinkedField",
      "name": "__RepositoryInfo_stargazers_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "StargazerEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "User",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "createdAt",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "UserInfo"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "Topic",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '7747c51979329472c565657e3d40302b';

module.exports = node;
