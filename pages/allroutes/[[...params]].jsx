import React from "react";

import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  // debugger;

  console.log(router.query);

  return <h1>All routes</h1>;
};

export default Page;
