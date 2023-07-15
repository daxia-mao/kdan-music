import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import { AccessTokenType } from "@/stories/Kdan Music Book/types";
dotenv.config({ path: "../.env.local" });

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

const fetchPersonalToken = async (code: string): Promise<AccessTokenType> => {
  try {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
    const redirect_uri = `http://localhost:3000/callback`;

    const authString = `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`;
    const base64AuthString = Buffer.from(authString).toString("base64");
    const res = await axios.post<AccessTokenType>(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirect_uri,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + base64AuthString,
        },
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await runMiddleware(req, res, cors);
  try {
    const code = req.query.code;
    const result = await fetchPersonalToken(code as string);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("fetch personal token error!");
  }
}
