/** @jsxImportSource theme-ui */
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

import { Note } from '../../../data/data';

const Page = ({ notes }: PageProps) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Server side rendered notes</h1>

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
            <Link
              href="/data-fetch/server-rendered/[id]"
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
    </div>
  );
};

interface PageProps {
  notes: Note[];
}

interface ServerSideProps extends ParsedUrlQuery {}

export const getServerSideProps: GetServerSideProps<
  PageProps,
  ServerSideProps
> = async () => {
  const results = await fetch(`${process.env.API}/notes/`);
  const { data } = await results.json();
  return { props: { notes: data } };
};

export default Page;
