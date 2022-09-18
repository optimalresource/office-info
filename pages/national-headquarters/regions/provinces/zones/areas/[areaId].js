import Head from "next/head";
import { Fragment } from "react";
import OfficeOfGO from "components/pages/dashboard/office-of-go";

export default function Area() {
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
      <OfficeOfGO />
    </Fragment>
  );
}
