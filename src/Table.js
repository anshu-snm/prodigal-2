import React, { useEffect, useMemo } from "react";
import { MDBDataTable } from "mdbreact";

function Table({ final_data }) {
  const data_one = useMemo(() => final_data, [final_data]);

  const tableData = data_one;

  const data = {
    columns: [
      {
        label: "Call ID",
        field: "call_id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Labels",
        field: "label",
        width: 270,
      },
    ],
    rows: tableData?.map((ele) => {
      return {
        call_id: ele.call_id,
        label: ele.label_id.toString(),
      };
    }),
  };

  return <MDBDataTable striped bordered hover data={data} />;
}

export default Table;
