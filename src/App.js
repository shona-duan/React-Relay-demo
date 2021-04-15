import { Suspense, useState } from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  usePreloadedQuery,
  useQueryLoader
} from 'react-relay';
import RelayEnvironment from './RelayEnvironment';
import QueryInput from './components/QueryInput';
import TopicInfo from './components/TopicInfo';
import StargazersSearch from './components/StargazersSearch';

// Define a query
const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery($query: String!, $count: Int, $cursor: String) {
    search(query: $query, type: REPOSITORY, first: 1) {
      nodes {
        __typename
        ... on Repository {
          ...TopicInfo
          ...StargazersSearch @arguments(count: $count, cursor: $cursor)
        }
      }
    }
  }
`

function App (props) {
  const [queries, setQueryies] = useState('')
  // useQueryLoader Hook
  const [repositoryNameQueryRef, loadRepositoryNameQuery] = useQueryLoader(
    RepositoryNameQuery
  )

  const handleSearchFormSubmit = (queries) => {
    console.log('queries', queries); 
    loadRepositoryNameQuery({ query: queries, count: 2 })
    setQueryies(queries)
  }

  return (
    <div className='App'>
      <div className='App-query'>
        <QueryInput
          onFinish={handleSearchFormSubmit}
        />
      </div>

      <section className='App-section'>
        <Suspense fallback={'Loading...'}>
          <div>
            {repositoryNameQueryRef === null ? (
              <p>请输入查询内容</p>
            ) : (
              <TopicAndTime queryref={repositoryNameQueryRef}></TopicAndTime>
            )}
          </div>
        </Suspense>
        <div>
          {repositoryNameQueryRef === null ? (
            <i> </i>
          ) : (
            <StargazersSearch val={queries}></StargazersSearch>
          )}
        </div>
      </section>
    </div>
  )
}

function AppRoot (props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <App/>
    </RelayEnvironmentProvider>
  )
}

function TopicAndTime ({ queryref }) {
  const data = usePreloadedQuery(RepositoryNameQuery, queryref)
  return <TopicInfo topic={data?.search?.nodes[0]} />
}

export default AppRoot
