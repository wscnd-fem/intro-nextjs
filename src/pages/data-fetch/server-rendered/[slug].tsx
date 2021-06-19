/** @jsxImportSource theme-ui */
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import type { ParsedUrlQuery } from 'querystring';

import {
  getNoteBySlug,
  Note,
} from '../../../data/data';

interface PageProps {
  noteData: Note;
}

const Page = ({ noteData }: PageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>loading...</p>;
  }
  // console.log("note data is", noteData);
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: "containers.page",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "25%",
        }}
      >
        <h1 sx={{ fontSize: 8, my: 0 }}>This is {noteData.name}</h1>
        <h2>from server-rendered</h2>
      </div>

      <article
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "25%",
        }}
      >
        <p sx={{ fontSize: 8, my: 0 }}>id is {noteData.id}</p>
        <p sx={{ fontSize: 8, my: 0 }}>Slug is {noteData.slug}</p>
      </article>
    </div>
  );
};

interface ServerSideProps extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<
  PageProps,
  ServerSideProps
> = async (context) => {
  const slug = context.params.slug;
  const { id: noteId } = getNoteBySlug(slug as string);
  const results = await fetch(`${process.env.API}/notes/${noteId}`);
  const { data: noteData }: { data: Note } = await results.json();

  if (!noteData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { noteData },
  };
};

export default Page;
