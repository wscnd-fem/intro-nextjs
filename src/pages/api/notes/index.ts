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

handler
  //   .use(cors())
  .use(cors())
  .use(morgan("dev"))
  .use(urlencoded({ extended: true }))
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now(),
    };

    notes.push(note);
    res.send({ data: note });
  })
  .get((req, res) => {
    res.send({ data: notes });
  });

export default handler;
