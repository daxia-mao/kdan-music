import Spotify from 'spotify-web-api-node';
import dotenv from 'dotenv';
dotenv.config({path: '../.env.local'});

let envAccessToken: string;
const createSpotifyApi = (token: string ) => {
  const spotify = new Spotify({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });
  spotify.setAccessToken(token);

  return spotify;
};

const getAccessToken = async () => {
  type DataType = {
    access_token: string,
    token_type: string,
    expires_in: number
  }
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET }= process.env;
  const authString = `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`;
  const base64AuthString = Buffer.from(authString).toString('base64');
  const authOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + base64AuthString,
    },
    body: 'grant_type=client_credentials',
  }

  const testEnvTokenVaild = await isTokenVaild(getEnvAccessToken());
  if(testEnvTokenVaild) {
    return getEnvAccessToken();
  }

  const res = await fetch('https://accounts.spotify.com/api/token', authOptions);
  const data: DataType = await res.json();
  setEnvAccessToken(data.access_token);
  return getEnvAccessToken();
}

const isTokenVaild = async (token: string) => {
  const spotify = createSpotifyApi(token);
  try{
    await spotify.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
    return true;
  } catch(err) {
    return false;
  }
}

const getEnvAccessToken = () => envAccessToken;
const setEnvAccessToken = (token: string) => envAccessToken = token;  

const tokenUtil = { getAccessToken, getEnvAccessToken, setEnvAccessToken, isTokenVaild };

export { tokenUtil };
export default createSpotifyApi;