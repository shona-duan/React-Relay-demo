import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'

const UserInfo = ({ user }) => {
    const data = useFragment(
      graphql`
        fragment UserInfo on User {
          id
          email
          name
        }
      `,
      user
    )
  
    return <div>{data?.name} | {data?.email}</div>
  }

  export default UserInfo