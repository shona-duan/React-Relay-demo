import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'

const DateInfo = ({ search }) => {
    const data = useFragment(
      graphql`
        fragment DateInfo on Repository {
          updatedAt
        }
      `,
      search
    )
  
    return <div>{data?.updatedAt}</div>
  }

  export default DateInfo