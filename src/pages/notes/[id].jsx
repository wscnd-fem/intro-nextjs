import React from "react";

import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Note {id}</h1>
      <button type="button" onClick={() => router.back()}>
        <p>Go back</p>
      </button>
    </div>
  );
};

export default Page;
