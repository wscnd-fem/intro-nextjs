import cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>();

/**
 * can define in each handler custom properties to req and res
 * https://github.com/hoangvvo/next-connect#typescript
 */

handler
  .use(cors())
  .get((req, res) => {
    res.send({ message: "hello from api" });
  })
  .post((req, res) => {
    res.json({ message: "posted message" });
  })
  .put(async (req, res) => {
    res.end("put message");
  });

export default handler;
