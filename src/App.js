import { Suspense } from 'react'
import './App.css'
import graphql from 'babel-plugin-relay/macro'
import {
  RelayEnvironmentProvider,
  usePaginationFragment,
  usePreloadedQuery,
  useFragment
} from 'react-relay'
import RelayEnvironment from './RelayEnvironment'
import InputForm from './components/Inputform'

const { useQueryLoader } = require('react-relay')

// Define a query
const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery($name: String!, $count: Int, $cursor: String) {
    topic(name: $name) {
      ...App_repository
    }
  }
`

function App (props) {
  // useQueryLoader Hook
  const [repositoryNameQueryRef, loadRepositoryNameQuery] = useQueryLoader(
    RepositoryNameQuery
  )

  function changeValue (formValues) {
    loadRepositoryNameQuery({ name: formValues, count: 1 })
  }

  return (
    <div className='App'>
      <div>
        <InputForm
          onChange={formValues => {
            changeValue(formValues)
            props?.onSubmit(formValues)
          }}
        />
      </div>
      <Suspense fallback={'Loading...'}>
        <header className='App-header'>
          {repositoryNameQueryRef === null ? (
            <p>请输入查询内容</p>
          ) : (
            <Display queryref={repositoryNameQueryRef}></Display>
          )}
        </header>
      </Suspense>
    </div>
  )
}

function AppRoot (props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <App
        onSubmit={args => {
          console.log(args)
        }}
      />
    </RelayEnvironmentProvider>
  )
}

const UserInfo = ({ user }) => {
  const data = useFragment(
    graphql`
      fragment App_user on User {
        id
        email
        name
      }
    `,
    user
  )

  return <div>{data?.name} | {data?.email}</div>
}

const RepositoryInfo = ({ topic }) => {
  const { data, loadNext } = usePaginationFragment(
    graphql`
      fragment App_repository on Topic
        @refetchable(queryName: "RepositoryInfoPaginationQuery") {
        name
        stargazers(first: $count, after: $cursor)
          @connection(key: "App_repository_stargazers") {
          edges {
            node {
              id
              createdAt
              ...App_user
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
          {(data?.stargazers?.edges ?? []).map(({ node }) => {
            return (
              <div key={node?.id}>
                <UserInfo user={node} />
                <span>{node?.createdAt}</span>
              </div>
            )
          })}
        </div>
      </Suspense>

      <button
        onClick={() => {
          loadNext(1)
        }}
      >
        Load more
      </button>
    </div>
  )
}

function Display ({ queryref }) {
  const data = usePreloadedQuery(RepositoryNameQuery, queryref)
  return <RepositoryInfo topic={data?.topic} />
}

export default AppRoot
