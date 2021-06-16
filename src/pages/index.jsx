import React from "react";

import Link from "next/link";

const Page = () => (
  <div>
    <h1>Notes index path</h1>
    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div>
);

export default Page;
