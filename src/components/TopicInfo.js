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
            {/* <Col span={12} style={style}>ID | Email</Col> */}
            {/* <Col span={8} style={style}>Last Update Time</Col> */}
            <Col span={8} style={style}>Related topics</Col>
            {/* <Col span={8} style={style}>createdAt</Col> */}
          </Row>
          {(data?.repositoryTopics?.edges ?? []).map(({ node }) => {
            return (
              <div key={node?.topic?.id}>
                {/* <UserInfo user={node} />
                <span>{node?.createdAt}</span> */}
                  <Row >
                    {/* <Col span={8} style={style}>
                      {topic?.}
                    </Col> */}
                    <Col span={8} style={style}>{node?.topic?.name}</Col>
                    {/* <Col span={8} style={style}>{topic?.createdAt}</Col> */}
                  </Row>
              </div>
            )
          })}
        </div>
      </Suspense>

      <Button
        type='primary'
        onClick={() => {
          loadNext(1)
          // console.log(data?.repositoryTopics?.edges)
        }}
      >
        Load more
      </Button>
    </div>
  )
}

export default TopicInfo
