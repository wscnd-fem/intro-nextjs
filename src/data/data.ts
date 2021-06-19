export type Note = {
  name: string;
  id: number;
  slug: string;
};

const notes: Note[] = new Array(15).fill(0).map((_, i) => ({
  id: Date.now() + i,
  name: `Note ${i}`,
  slug: `Note ${i}`.toLowerCase().replace(/\s/gi, "-"),
}));

export const getNoteBySlug = (slug: string) =>
  notes.find((note) => note.slug === slug);

export default notes;
