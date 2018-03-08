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
const deleteUserQuery = gql`
mutation deleteUser($id: ID!) {
  deleteUser(
    id: $id
  ) {
    id
  }
}
`;


const getUsers = graphql(usersQuery, {
  // props: ({ ownProps, mutate }) => ({
  //   getUsers () {
  //     return mutate()
  //     .then((result) => {
  //       console.log(result);
  //     });
  //   },
  // }),
});
const deleteUser = graphql(deleteUserQuery, {
    name: 'deleteUser',
})

// const deleteUser = graphql(deleteUserQuery, {
//   props: ({ data }) => ({
//     user: data,
//   }),
// });


const DashboardPageWithData = compose(getUsers, deleteUser)(DashboardPage);
// const DashboardPageWithData = graphql(usersQuery, deleteUserQuery)(DashboardPage);

export default DashboardPageWithData;
