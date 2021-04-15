import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createPaginationContainer, QueryRenderer } from 'react-relay';
import { Button, Row, Col } from 'antd';
import RelayEnvironment from '../RelayEnvironment';

const style = { background: '#E8F0FE', padding: '5px 0' }
const StargazersSearchQuery = graphql`
  query StargazersSearchQuery($query: String!, $count: Int, $cursor: String) {
    search(query: $query, type: REPOSITORY, first: 1) {
      nodes {
        __typename
        ... on Repository {
          ...StargazersSearch @arguments(count: $count, cursor: $cursor)
        }
      }
    }
  }
`

const StargazersInfo = createPaginationContainer(
  ({ data, relay }) => {
    const stargazersEdges = data?.stargazers?.edges ?? []
    console.log(stargazersEdges)
    return (
      <div>
        <Row>
          <Col span={24} style={style}>
            Stargazers Name
          </Col>
        </Row>
        {stargazersEdges.map(({ node }) => {
          return (
            <Row key={node?.id}>
              <Col span={24} style={style}>
                {node?.name}
              </Col>
            </Row>
          )
        })}
        {relay.hasMore() && (
            <Button
            type='primary'
            onClick={() => {
              relay.loadMore(2)
            }}
          >
            Load more
          </Button>
        )}
      </div>
    )
  },
  {
    data: graphql`
      fragment StargazersSearch on Repository
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 2 }
          cursor: { type: "String" }
        ) {
        stargazers(first: 2, after: $cursor)
          @connection(key: "StargazersSearch_stargazers") {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `
  },
  {
    direction: 'forward',
    // 告诉编译器要分页的是哪个connection
    getConnectionFromProps (props) {
      return props?.data?.stargazers
    },
    //   在最新一次的分页查询获取到数据之后，当我们从本地store读取数据时要用到哪些变量
    getFragmentVariables (prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      }
    },
    //   当从服务器获取的时候返回通过分页查询获取的变量
    getVariables (props, { count, cursor }, fragmentVariables) {
      console.log('getVariables', props)
      return {
        ...fragmentVariables,
        count,
        cursor
      }
    },
    query: StargazersSearchQuery
  }
)

function StargazersSearch (val) {
  console.log('val', val.val)
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={StargazersSearchQuery}
      variables={{ query: val.val, count: 2 }}
      render={({ error, props }) => {
        console.log('props', props)
        if (props) {
          return (
            <StargazersInfo data={props?.search?.nodes[0]}></StargazersInfo>
          )
        } else if (error) {
          return <div>{error.message}</div>
        }
      }}
    />
  )
}

export default StargazersSearch
