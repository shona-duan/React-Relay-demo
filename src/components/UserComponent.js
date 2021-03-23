import React from 'react';
// import QueryForm from './QueryForm'
// const React = require('React');
const {graphql, useFragment} = require('react-relay');

function UserComponent(props) {
  const data = useFragment(
    graphql`
    fragment UserComponent_user on Topic {
      name
    }
    `,
    props.user,
  );

  return (
    <>
      <h1>{data.name}</h1>
      <div>
        {/* <img src={data.profile_picture.uri} />
        {data.age} */}
      </div>
    </>
  );
}

export default UserComponent;