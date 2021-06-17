/** @jsxImportSource theme-ui */

import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "theme-ui";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note {id}</h1>
      {/* <Button variant="simple" type="button" onClick={() => router.back()}>
        <p>Go back</p>
      </Button>
      <Link href={"/"}>
        <a>Go to Home</a>
      </Link> */}
    </div>
  );
};

export default Page;
