import Head from "next/head";
import { Fragment } from "react";
import Dashboard from "components/pages/dashboard";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>RCCG Office Info</title>
        <meta
          name="description"
          content="A portal for checking the RCCG hierarchy, vision and mission statement, as well as specific information relating to RCCG The Oasis"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Dashboard />
    </Fragment>
  );
}
