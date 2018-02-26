import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import DashboardPage from '../components/DashboardPage';

const usersQuery = gql`
  query {
    users {
      id
      firstName
      lastName
      birthDate
      email
    }
  }
`;
const deleteUser = gql`
mutation deleteUser($id: ID!) {
  deleteUser(
    id: $id
  ) {
    id
  }
}
`;



const DashboardPageWithData = graphql(usersQuery, deleteUser)(DashboardPage);
// const DashboardPageWithData = compose(usersQuery, deleteUser)(DashboardPage);

export default DashboardPageWithData;
