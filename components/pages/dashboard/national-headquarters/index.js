import React from "react";
import { offices } from "data/offices";
import Office from "components/layouts/Office";
function NationalHeadComponent({}) {
  const info = offices.filter((data, index) => {
    return data.parentId === 8;
  });
  return (
    <>
      <Office offices={info} />
    </>
  );
}

export default NationalHeadComponent;
