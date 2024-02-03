import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import AllPosts from "./AllPosts";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState("");

  const fetchData = () => {
    fetch("https://hackapi.hellozelf.com/frontend/api/v1/contents?page=1")
      .then((response) => response.json())
      .then((json) => {
        setData(json?.data);
        setTotal(json?.total_contents);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <UserList data={data} />
      <AllPosts data={data} total={total} />
    </div>
  );
}
