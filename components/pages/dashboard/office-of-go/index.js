import React from "react";
import { offices } from "data/offices";
import Office from "components/layouts/Office";
function OfficeOfGO({}) {
  const info = offices.filter((data, index) => {
    return data.parentId === 1;
  });
  return <Office offices={info} addMore={false} showOffices={false} />;
}

export default OfficeOfGO;
