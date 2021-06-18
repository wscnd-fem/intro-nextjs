import { urlencoded } from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import notes from "../../../data/data";

const handler = nc<NextApiRequest, NextApiResponse>();

/**
 * can define in each handler custom properties to req and res
 * https://github.com/hoangvvo/next-connect#typescript
 */
const getNote = (id) => notes.find((note) => note.id === Number(id));

handler
  .use(cors())
  .use(morgan("dev"))
  .use(urlencoded({ extended: true }))
  .get((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ data: note });
  })
  .patch((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    const i = notes.findIndex((note) => note.id === Number(req.query.id));

    const updated = { ...note, ...req.body };

    notes[i] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    const i = notes.findIndex((note) => note.id === Number(req.query.id));

    notes.splice(i, 1);

    res.json({ data: req.query.id });
  });

export default handler;
