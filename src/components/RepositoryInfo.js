import { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay';
import { Button, Row, Col } from 'antd';
import '../App.css';
import UserInfo from './UserInfo';

const style = { background: "#E8F0FE", padding: '5px 0' };
const RepositoryInfo = ({ topic }) => {
  const { data, loadNext } = usePaginationFragment(
    graphql`
      fragment RepositoryInfo on Topic
        @refetchable(queryName: "RepositoryInfoPaginationQuery") {
        name
        stargazers(first: $count, after: $cursor)
          @connection(key: "RepositoryInfo_stargazers") {
          edges {
            node {
              id
              createdAt
              ...UserInfo
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
              <Col span={12} style={style}>ID | Email</Col>
              <Col span={12} style={style}>createdAt</Col>
            </Row>
          
          {(data?.stargazers?.edges ?? []).map(({ node }) => {
            return (
              <div key={node?.id}>
                {/* <UserInfo user={node} />
                <span>{node?.createdAt}</span> */}
                
                  <Row >
                    <Col span={12} style={style}>
                      <UserInfo user={node} />
                    </Col>
                    <Col span={12} style={style}>{node?.createdAt}</Col>
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
        }}
      >
        Load more
      </Button>
    </div>
  )
}

export default RepositoryInfo
