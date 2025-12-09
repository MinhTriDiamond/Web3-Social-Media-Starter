import React from "react";
import { useRouter } from "next/router";

const ProfileAddressPage = () => {
  const router = useRouter();
  const { address } = router.query;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Profile page</h1>
      <p>Address: {address}</p>
    </div>
  );
};

export default ProfileAddressPage;
