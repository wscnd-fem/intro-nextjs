/** @jsxImportSource theme-ui */

import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "theme-ui";

const Page = () => {
  const notes = new Array(15)
    .fill(1)
    .map((_, i) => ({ id: i, title: `Note ${i}` }));

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note index path</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <section sx={{ width: "33%", p: 2 }} key={note.id}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Page;
