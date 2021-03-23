/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type App_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type App_repository$ref: FragmentReference;
declare export opaque type App_repository$fragmentType: App_repository$ref;
export type App_repository = {|
  +name: string,
  +stargazers: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +createdAt: any,
        +$fragmentRefs: App_user$ref,
      |}
    |}>
  |},
  +id: string,
  +$refType: App_repository$ref,
|};
export type App_repository$data = App_repository;
export type App_repository$key = {
  +$data?: App_repository$data,
  +$fragmentRefs: App_repository$ref,
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
  "name": "App_repository",
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
      "name": "__App_repository_stargazers_connection",
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
                  "name": "App_user"
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
(node/*: any*/).hash = '0ed74ed70663779d590eeecff0528634';

module.exports = node;
