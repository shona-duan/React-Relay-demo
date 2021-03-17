import React from 'react';
import './App.css';
// import fetchGraphQL from './fetchGraphQL';
import graphql from 'babel-plugin-relay/macro';
// import type { PreloadedQuery }
import {
  RelayEnvironmentProvider, usePreloadedQuery,
  // loadQuery,
  // usePreloadedQuery,
} from 'react-relay/hooks';
// eslint-disable-next-line
// import type { PreloadedQuery } from 'react-relay';
// import preloadQuery from 'react-relay/lib/relay-hooks/preloadQuery_DEPRECATED'
import RelayEnvironment from './RelayEnvironment';
import InputForm from './components/Inputform';


const { Suspense } = React;
const {useQueryLoader} = require('react-relay');

// Define a query
const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery($name: String!) {
    repository(owner: "facebook", name: $name) {
      name
      createdAt
    }
  }
`;


let onSlect;
function App(props) {
  const [
    repositoryNameQueryRef,
    loadRepositoryNameQuery,
  ] = useQueryLoader(
    RepositoryNameQuery,
  );

  const onSelectRepositoryNameQuery = (data) => {
    console.log(data);
    loadRepositoryNameQuery(
      {name: data}
    );
    
  }

  onSlect = onSelectRepositoryNameQuery;
  if (repositoryNameQueryRef == null) {
    console.log('111');
    return (
      <p>请输入查询内容</p>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <Display queryref={repositoryNameQueryRef}></Display>
        {/* <p>{props.repository.createdAt}</p> */}
      </header>
    </div>
  );
}


function AppRoot(props) {
    
  function changeValue(props) {
    
    onSlect(props);
    // console.log('111');
  };
  
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
      <div>
        <InputForm onChange={changeValue}></InputForm>
        
      </div>
    </RelayEnvironmentProvider>
  );
}
function Display({queryref}) {
  const data = usePreloadedQuery(RepositoryNameQuery,queryref);
  return (
    <div>
      <p>{data.repository.name}</p>
      <p>{data.repository.createdAt}</p>
    </div>
    
    
  )
}

export default AppRoot;