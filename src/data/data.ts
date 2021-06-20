export type Note = {
  name: string;
  id: number;
  slug: string;
};

// const notes: Note[] = new Array(15).fill(0).map((_, i) => ({
//   id: Date.now() + i,
//   name: `Note ${i}`,
//   slug: `Note ${i}`.toLowerCase().replace(/\s/gi, "-"),
// }));

const notes: Note[] = JSON.parse(
  `[{"id":1624121118170,"name":"Note 0","slug":"note-0"},{"id":1624121118171,"name":"Note 1","slug":"note-1"},{"id":1624121118172,"name":"Note 2","slug":"note-2"},{"id":1624121118173,"name":"Note 3","slug":"note-3"},{"id":1624121118174,"name":"Note 4","slug":"note-4"},{"id":1624121118175,"name":"Note 5","slug":"note-5"},{"id":1624121118177,"name":"Note 6","slug":"note-6"},{"id":1624121118178,"name":"Note 7","slug":"note-7"},{"id":1624121118179,"name":"Note 8","slug":"note-8"},{"id":1624121118180,"name":"Note 9","slug":"note-9"},{"id":1624121118181,"name":"Note 10","slug":"note-10"},{"id":1624121118182,"name":"Note 11","slug":"note-11"},{"id":1624121118183,"name":"Note 12","slug":"note-12"},{"id":1624121118184,"name":"Note 13","slug":"note-13"},{"id":1624121118185,"name":"Note 14","slug":"note-14"}]`,
);

export const getNoteBySlug = (slug: string) =>
  notes.find((note) => note.slug === slug);

export default notes;
