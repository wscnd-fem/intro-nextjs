import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const Page = () => {
  const notes = new Array(15)
    .fill(1)
    .map((_, i) => ({ id: i, title: `Note ${i}` }));

  const router = useRouter();

  return (
    <div>
      <h1>Note index path</h1>
      {notes.map((note) => (
        <>
          {/* <Link href={`/notes/${note.id}`} key={note.id}>
            <a>Go to {note.title}</a>
          </Link> */}
          <button
            type="button"
            onClick={() => router.push(`/notes/${note.id}`)}
            key={note.id}
          >
            <p>Go to {note.title}</p>
          </button>
          <br />
        </>
      ))}
      <a href="https://www.google.com"></a>
    </div>
  );
};

export default Page;