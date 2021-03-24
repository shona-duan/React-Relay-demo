import { Suspense } from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro'
import {
  RelayEnvironmentProvider,
  usePreloadedQuery,
  useQueryLoader
} from 'react-relay'
import RelayEnvironment from './RelayEnvironment'
import InputForm from './components/Inputform'
import RepositoryInfo from './components/RepositoryInfo'

// Define a query
const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery($name: String!, $count: Int, $cursor: String) {
    topic(name: $name) {
      ...RepositoryInfo
    }
  }
`

function App (props) {
  // useQueryLoader Hook
  const [repositoryNameQueryRef, loadRepositoryNameQuery] = useQueryLoader(
    RepositoryNameQuery
  )

  function changeValue (formValues) {
    loadRepositoryNameQuery({ name: formValues, count: 2 })
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
        <section className='App-section'>
          {repositoryNameQueryRef === null ? (
            <p>请输入查询内容</p>
          ) : (
            <Display queryref={repositoryNameQueryRef}></Display>
          )}
        </section>
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

function Display ({ queryref }) {
  const data = usePreloadedQuery(RepositoryNameQuery, queryref)
  return <RepositoryInfo topic={data?.topic} />
}

export default AppRoot
