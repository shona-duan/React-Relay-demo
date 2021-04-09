import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createPaginationContainer } from 'react-relay';
import { Button, Row, Col } from 'antd';

const style = { background: "#E8F0FE", padding: '5px 0' };
class Stargazers extends React.Component {
    
    render() {
      return (
        <div>
          {/* {this.props.search.stargazers.nodes.map(
            node => {node.name}
          )} */}
          <Row>
            <Col span={8} style={style}>Stargazers Name</Col>
          </Row>
          {(this.props?.stargazers?.edges ?? []).map(({ node }) => {
              <div key={node?.id}>
                  <Row >
                    <Col span={8} style={style}>{node?.name}</Col>
                  </Row>
              </div>
          })}
          <Button
            onClick={() => this._loadMore()}
            title="Load More"
          />  
        </div>
      );
    }
  
    _loadMore() {
      if (!this.props.stargazers.hasMore() || this.props.stargazers.isLoading()) {
        return;
      }
      console.log(this.props.stargazers)
      this.props.stargazers.loadMore(
        1,  // Fetch the next 1 feed items
        error => {
          console.log(error);
        },
      );
    }
  }

  const Container = createPaginationContainer(
    Stargazers,
    {
      search: graphql`
        fragment StargazersSearch on Repository
        @argumentDefinitions(
          count: {type: "Int", defaultValue: 2}
          cursor: {type: "String"}
        ) {
            stargazers(
            first: 1
            after: $cursor
          ) @connection(key: "StargazersSearch_stargazers") {
              edges {
                node {
                  id
                  name
                }
              }
          }
        }
      `,
    },
    {
      direction: 'forward',
    //   说明哪一个connection要分页获取数据
      getConnectionFromProps(props) {
        console.log(props?.stargazers?.edges)
        return props?.stargazers?.edges;
      },
    //   在最新一次的分页查询获取到数据之后，当我们从本地store读取数据时要用到哪些变量
      getFragmentVariables(prevVars, totalCount) {
        return {
          ...prevVars,
          count: totalCount,
        };
      },
    //   当从服务器获取的时候返回通过分页查询获取的变量
      getVariables(props, {count, cursor}, fragmentVariables) {
        return {
          count,
          cursor,
          query: fragmentVariables.name,
        };
      },
    }
  );

  export default Container