/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StargazersSearch$ref = any;
type TopicInfo$ref = any;
export type AppRepositoryNameQueryVariables = {|
  query: string,
  count?: ?number,
  cursor?: ?string,
|};
export type AppRepositoryNameQueryResponse = {|
  +search: {|
    +nodes: ?$ReadOnlyArray<?({|
      +__typename: "Repository",
      +$fragmentRefs: TopicInfo$ref & StargazersSearch$ref,
    |} | {|
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      +__typename: "%other"
    |})>
  |}
|};
export type AppRepositoryNameQuery = {|
  variables: AppRepositoryNameQueryVariables,
  response: AppRepositoryNameQueryResponse,
|};
*/


/*
query AppRepositoryNameQuery(
  $query: String!
  $count: Int
  $cursor: String
) {
  search(query: $query, type: REPOSITORY, first: 1) {
    nodes {
      __typename
      ... on Repository {
        ...TopicInfo
        ...StargazersSearch_1G22uz
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}

fragment StargazersSearch_1G22uz on Repository {
  stargazers(first: 2, after: $cursor) {
    edges {
      node {
        id
        name
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment TopicInfo on Repository {
  updatedAt
  repositoryTopics(first: $count, after: $cursor) {
    edges {
      node {
        topic {
          id
          name
        }
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  },
  {
    "kind": "Literal",
    "name": "type",
    "value": "REPOSITORY"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "cursor"
},
v6 = [
  (v5/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v10 = {
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
},
v11 = [
  (v5/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 2
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "TopicInfo"
                  },
                  {
                    "args": [
                      {
                        "kind": "Variable",
                        "name": "count",
                        "variableName": "count"
                      },
                      {
                        "kind": "Variable",
                        "name": "cursor",
                        "variableName": "cursor"
                      }
                    ],
                    "kind": "FragmentSpread",
                    "name": "StargazersSearch"
                  }
                ],
                "type": "Repository",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "updatedAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v6/*: any*/),
                    "concreteType": "RepositoryTopicConnection",
                    "kind": "LinkedField",
                    "name": "repositoryTopics",
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
                                  (v7/*: any*/),
                                  (v8/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v7/*: any*/),
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v6/*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "TopicInfo_repositoryTopics",
                    "kind": "LinkedHandle",
                    "name": "repositoryTopics"
                  },
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": (v11/*: any*/),
                    "concreteType": "StargazerConnection",
                    "kind": "LinkedField",
                    "name": "stargazers",
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
                              (v7/*: any*/),
                              (v8/*: any*/),
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v11/*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "StargazersSearch_stargazers",
                    "kind": "LinkedHandle",
                    "name": "stargazers"
                  }
                ],
                "type": "Repository",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v7/*: any*/)
                ],
                "type": "Node",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b0222485c398de5a90602d7caa693281",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryNameQuery(\n  $query: String!\n  $count: Int\n  $cursor: String\n) {\n  search(query: $query, type: REPOSITORY, first: 1) {\n    nodes {\n      __typename\n      ... on Repository {\n        ...TopicInfo\n        ...StargazersSearch_1G22uz\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment StargazersSearch_1G22uz on Repository {\n  stargazers(first: 2, after: $cursor) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment TopicInfo on Repository {\n  updatedAt\n  repositoryTopics(first: $count, after: $cursor) {\n    edges {\n      node {\n        topic {\n          id\n          name\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6afba9d6df6ec3b38be19e35ce90f1fd';

module.exports = node;
