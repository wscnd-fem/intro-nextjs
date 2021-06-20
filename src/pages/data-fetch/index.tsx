/** @jsxImportSource theme-ui */

import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Note } from '../../data/data';

const Page = ({ notes }: { notes: Note[] }) => {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: "containers.page",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "25%",
        }}
      >
        <h1 sx={{ fontSize: 8, my: 0 }}>Note data fetch</h1>
      </div>

      <h2
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        getStaticProps, getStaticPaths
      </h2>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note, i) => (
          <section sx={{ width: "33%", p: 2 }} key={note.id}>
            <Link href="/data-fetch/[slug]" as={`/data-fetch/${note.slug}`}>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.name}</strong>
                </div>
              </a>
            </Link>
          </section>
        ))}
      </div>

      <h2
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        getServerSideProps
      </h2>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note, i) => (
          <section sx={{ width: "33%", p: 2 }} key={note.id}>
            <Link
              href="/data-fetch/server-rendered/[slug]"
              as={`/data-fetch/server-rendered/${note.slug}`}
            >
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.name}</strong>
                </div>
              </a>
            </Link>
          </section>
        ))}
      </div>

      <div>
        <pre>{JSON.stringify(notes, null, 2)}</pre>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.dir(context, { depth: Infinity });
  const results = await fetch(`${process.env.API}/notes`);
  const { data: notes }: { data: Note[] } = await results.json();
  // console.log("notes are:", notes);

  return {
    props: {
      notes,
    },
  };
};

export default Page;
