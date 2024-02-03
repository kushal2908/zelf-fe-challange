import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import DataTable from "react-data-table-component";
import { UserColumns } from "./UserListColumns";
import ShowPost from "./ShowPost";

/*
  This is user list table
  the table columns code is on UserListColumns.jsx 
*/

export default function UserList({ data }) {
  const [showPost, setShowPost] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const extended_columns = [
    {
      name: "Action",
      selector: (row) => row?.content?.id,
      cell: (row) => (
        <>
          <a
            href="#"
            onClick={() => {
              setShowPost(true);
              setSelectedData(row);
            }}
          >
            View Post
          </a>
        </>
      ),
      right: true,
    },
  ];

  return (
    <div className={classes.tableWrap}>
      <DataTable columns={UserColumns.concat(extended_columns)} data={data} />
      <ShowPost
        show={showPost}
        onClose={() => {
          setShowPost(false);
          setSelectedData("");
        }}
        data={selectedData}
      />
    </div>
  );
}
