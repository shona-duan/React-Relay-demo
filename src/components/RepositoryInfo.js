import { Suspense } from 'react'
import graphql from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay'
import { Button } from 'antd'
import { Container, Row, Col } from 'react-grid-system'
import '../App.css'

import UserInfo from './UserInfo'

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
          <Container fluid>
            <Row debug style={{ width: '700px' }} justify="center">
              <Col debug>ID | Email</Col>
              <Col debug>createdAt</Col>
            </Row>
          </Container>
          {(data?.stargazers?.edges ?? []).map(({ node }) => {
            return (
              <div key={node?.id}>
                {/* <UserInfo user={node} />
                <span>{node?.createdAt}</span> */}
                <Container fluid>
                  <Row debug style={{ width: '700px' }} justify="center">
                    <Col debug>
                      <UserInfo user={node} />
                    </Col>
                    <Col debug>{node?.createdAt}</Col>
                  </Row>
                </Container>
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
