/** @jsxImportSource theme-ui */
import {
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import type { ParsedUrlQuery } from 'querystring';

import {
  getNoteBySlug,
  Note,
} from '../../data/data';

interface PageProps {
  noteData: Note;
}
const Page = ({ noteData }: PageProps) => {
  // console.log("note data is", noteData);
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
        <h1 sx={{ fontSize: 8, my: 0 }}>This is {noteData.name}</h1>
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

interface StaticPathParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<StaticPathParams> = async () => {
  const results = await fetch(`${process.env.API}/notes`);
  const { data: notes }: { data: Note[] } = await results.json();
  const paths = notes.map((note) => ({
    params: {
      slug: note.name.toLowerCase().replace(/\s/gi, "-"),
    },
  }));

  console.log("paths", paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps, StaticPathParams> =
  async (context) => {
    // console.dir(context, { depth: Infinity });
    const slug = context.params.slug;
    const noteData = getNoteBySlug(slug as string);
    return {
      props: { noteData },
    };
  };

export default Page;
