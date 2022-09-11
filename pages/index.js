import Head from "next/head";
import { Fragment } from "react";
import OfficeOfGO from "components/pages/dashboard/office-of-go";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>RCCG Office Info</title>
        <meta
          name="description"
          content="A portal for checking the RCCG hierarchy, vision and mission statement"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <OfficeOfGO />
    </Fragment>
  );
}
