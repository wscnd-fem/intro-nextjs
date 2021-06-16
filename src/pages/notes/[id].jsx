import React from "react";

import Link from "next/link";
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
      <Link href={"/"}>
        <a>Go to Home</a>
      </Link>
    </div>
  );
};

export default Page;
