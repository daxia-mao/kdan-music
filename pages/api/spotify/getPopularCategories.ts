// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import createSpotifyApi, { tokenUtil } from '@/stories/Kdan Music Book/utils/spotify';
import Cors from 'cors';
import type { CategoryType } from '@/stories/Kdan Music Book/types';

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

const getPopularCategories = async() => {
  const token = await tokenUtil.getAccessToken();
  const spotify = createSpotifyApi(token);
  const popularCategories = await spotify.getCategories({limit: 12, country: 'JP'});
  const popularCategoriesByVaild = popularCategories.body.categories.items.filter(item => item.name);
  const resultCategories = popularCategoriesByVaild.map<CategoryType>(item => {
    return {
      id: item.id,
      name: item.name,
      icons: item.icons,
    }
  });

  return resultCategories;
}



export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  await runMiddleware(req, res, cors);

  const categories = await getPopularCategories();
  res.status(200).json(categories);
}
