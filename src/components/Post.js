import React from "react";
import { useLocation, useParams } from "react-router";
import { Header } from "semantic-ui-react";
// match method
// const Post = ({ match }) => {
//   return (
//     <div>
//       <Header as="h1">ID is = {match.params.id}</Header>
//     </div>
//   );
// };

const Post = () => {
  //console.log(useParams());
  const { id } = useParams();

  console.log(useLocation());

  return (
    <div>
      <Header as="h1">ID is = {id}</Header>
    </div>
  );
};

export default Post;
