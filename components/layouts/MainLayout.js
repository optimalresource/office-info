import React from "react";
import Header from "components/layouts/header";
import { OneColumnLayout } from "components/layouts/OneColumnLayout";

const MainLayout = ({ children }) => {
  return (
    <OneColumnLayout>
      <Header />
      {children}
    </OneColumnLayout>
  );
};

export default MainLayout;
