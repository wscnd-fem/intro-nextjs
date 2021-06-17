/** @jsxImportSource theme-ui */

import Link from "next/link";

const Page = () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>
        This is a really dope note taking app.
      </h1>
    </div>
    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div>
);

export default Page;
