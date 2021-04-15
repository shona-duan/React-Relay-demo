/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TopicInfo$ref: FragmentReference;
declare export opaque type TopicInfo$fragmentType: TopicInfo$ref;
export type TopicInfo = {|
  +updatedAt: any,
  +repositoryTopics: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +topic: {|
          +id: string,
          +name: string,
        |}
      |}
    |}>
  |},
  +id: string,
  +$refType: TopicInfo$ref,
|};
export type TopicInfo$data = TopicInfo;
export type TopicInfo$key = {
  +$data?: TopicInfo$data,
  +$fragmentRefs: TopicInfo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  "repositoryTopics"
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
      "operation": require('./TopicInfoPaginationQuery.graphql.js'),
      "identifierField": "id"
    }
  },
  "name": "TopicInfo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": "repositoryTopics",
      "args": null,
      "concreteType": "RepositoryTopicConnection",
      "kind": "LinkedField",
      "name": "__TopicInfo_repositoryTopics_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "RepositoryTopicEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "RepositoryTopic",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Topic",
                  "kind": "LinkedField",
                  "name": "topic",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "name",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
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
  "type": "Repository",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a0da01adf9b9f4a4cb9aeb2f814331a9';

module.exports = node;
