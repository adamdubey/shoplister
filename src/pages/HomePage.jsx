import React from "react";
import { UserContext } from "..";
import CreateList from "../components/CreateList";
import Lists from "../components/Lists";
import Layout from "../components/shared/Layout";

function HomePage() {
  const user = React.useContext(UserContext);

  return (
    <Layout>
      <CreateList user={user} />
      <Lists />
    </Layout>
  );
}

export default HomePage;
