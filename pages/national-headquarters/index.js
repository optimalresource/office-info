import Head from "next/head";
import { Fragment } from "react";
import NationalHeadComponent from "components/pages/dashboard/national-headquarters";

export default function NationalHeadquarters() {
  return (
    <Fragment>
      <Head>
        <title>RCCG National Headquarters</title>
        <meta
          name="description"
          content="A portal for checking the RCCG hierarchy and personnels, vision and mission statement"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <NationalHeadComponent />
    </Fragment>
  );
}
