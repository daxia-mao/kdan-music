import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

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

const authorizationScopes = [
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "user-library-modify",
  "user-follow-read",
  "user-follow-modify",
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await runMiddleware(req, res, cors);
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, REDIRECT_URL } =
    process.env;

  const scope = authorizationScopes.join(" ");
  const url = new URL(`https://accounts.spotify.com/authorize?`);
  const params = new URLSearchParams({
    response_type: "code",
    client_id: `${SPOTIFY_CLIENT_ID}`,
    scope: scope,
    redirect_uri: REDIRECT_URL as string,
    show_dialog: "true",
  });
  url.search = params.toString();

  res.redirect(url.href);
}
