import React from "react";
import { useRouter } from "next/router";

const GroupPage = () => {
  const router = useRouter();
  const { groupId } = router.query;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Group page</h1>
      <p>Group ID: {groupId}</p>
    </div>
  );
};

export default GroupPage;