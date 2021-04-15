import { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay';
import { Button, Row, Col } from 'antd';
import '../App.css';

const style = { background: "#E8F0FE", padding: '5px 0' };
const TopicInfo = ({ topic }) => {
  const { data, loadNext } = usePaginationFragment(
    graphql`
      fragment TopicInfo on Repository
        @refetchable(queryName: "TopicInfoPaginationQuery") {
        updatedAt
        repositoryTopics(first: $count, after: $cursor)
          @connection(key: "TopicInfo_repositoryTopics") {
          edges {
            node {
              topic {
                id
                name
              }
            }
          }
        }
      }
    `,
    topic
  )
  return (
    <div>
      <Suspense fallback={'Loading...'}>
        <div>
          <Row>
            <Col span={12} style={style}>Related topics</Col>
            <Col span={12} style={style}>Last Update Time</Col>
          </Row>
          {(data?.repositoryTopics?.edges ?? []).map(({ node }) => {
            return (
              <div key={node?.topic?.id}>
                  <Row >
                    <Col span={12} style={style}>{node?.topic?.name}</Col>
                    <Col span={12} style={style}>{data?.updatedAt}</Col>
                  </Row>
              </div>
            )
          })}
        </div>
      </Suspense>

      <Button
        type='primary'
        onClick={() => {
          loadNext(2)
        }}
      >
        Load more
      </Button>
    </div>
  )
}

export default TopicInfo
