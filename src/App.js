import { Suspense, useState } from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  usePreloadedQuery,
  useQueryLoader,
  QueryRenderer
} from 'react-relay';
// import {fetchQuery_DEPRECATED as fetchQuery} from 'relay-runtime';
import RelayEnvironment from './RelayEnvironment';
import QueryInput from './components/QueryInput';
import TopicInfo from './components/TopicInfo';
import Stargazers from './components/StargazersSearch';

// Define a query
const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery($query: String!, $count: Int, $cursor: String) {
    search(query: $query, type: REPOSITORY, first: 1) {
      nodes {
        __typename
        ... on Repository {
          ...TopicInfo
          ...StargazersSearch
        }
      }
    }
  }
`

function App (props) {
  const [val, setVal] = useState('')
  // useQueryLoader Hook
  const [repositoryNameQueryRef, loadRepositoryNameQuery] = useQueryLoader(
    RepositoryNameQuery
  )

  function changeValue (formValues) {
    console.log('formValues', formValues)
    loadRepositoryNameQuery({ query: formValues, count: 2 })
    setVal(formValues)
  }

  return (
    <div className='App'>
      <div className="App-query">
        <QueryInput
          onChange={formValues => {
            changeValue(formValues)
            props?.onSubmit(formValues)
          }}
        />
      </div>
      <Suspense fallback={'Loading...'}>
        <section className='App-section'>
          <div>
          {repositoryNameQueryRef === null ? (
            <p>请输入查询内容</p>
          ) : (
            <Display queryref={repositoryNameQueryRef}></Display>
          )}
          </div>
        </section>
      </Suspense>
      <div> <StargazersName val={val}></StargazersName> </div>
    </div>
  )
}

function AppRoot (props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <App
        onSubmit={args => {
          console.log("222: " + args)
        }}
      />
    </RelayEnvironmentProvider>
  )
}

function Display ({ queryref }) {
  const data = usePreloadedQuery(RepositoryNameQuery, queryref)
  // console.log(data?.search?.nodes[0]);
  return <TopicInfo topic={data?.search?.nodes[0]} />
}

function StargazersName(_props) {
  console.log("_props", _props)
  if (_props.val === null) {
    return;
  } else {
    // fetchQuery(RelayEnvironment, RepositoryNameQuery, props)
    // .then(data => {
    //   // access the graphql response
    //   console.log(data)
    //   return <Stargazers props={data?.search?.nodes[0]}></Stargazers>
    // });
    // console.log('props', props)
    return <QueryRenderer
      environment={RelayEnvironment}
      query={RepositoryNameQuery}
      variables={{query: _props.val, count: 1}}
      render={({error, props}) => {
        console.log("props", props)
        if (props) {
          return <Stargazers props={props?.search?.nodes[0]}></Stargazers>;
        } else if (error) {
          return <div>{error.message}</div>;
        }
        return <div>Loading</div>;
      }}
    />
  }
}

export default AppRoot
