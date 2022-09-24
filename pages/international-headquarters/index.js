import Head from "next/head";
import { Fragment } from "react";
import InternationalHeadComponent from "components/pages/dashboard/international-headquarters";

export default function InternationalHeadquarters() {
  return (
    <Fragment>
      <Head>
        <title>RCCG Office Info</title>
        <meta
          name="description"
          content="A portal for checking the RCCG hierarchy and personnels, vision and mission statement"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <InternationalHeadComponent />
    </Fragment>
  );
}
