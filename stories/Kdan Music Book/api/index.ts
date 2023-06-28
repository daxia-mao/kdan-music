import axios from "axios";
import useSWR from "swr";
import {
  CategoriesObject,
  CategoriesRequest,
  CategoryObject,
  FeaturedPlaylistsRequest,
  PlaylistsByCategoryRequest,
  PlaylistItemsObject,
  PlaylistItemsRequest,
  PlaylistObject,
  PlaylistRequest,
  PlaylistsObject,
  SimplifiedPlaylistObject,
  ArtistRequest,
  SimplifiedArtistObject,
  AccessTokenType,
  TrackRequest,
  TrackObject,
  RecommendationsRequest,
  RecommendationsObject,
} from "../types";

////////// ENDPOINTES /////////
const endpoints = {
  getTrack: (trackId: string) => `https://api.spotify.com/v1/tracks/${trackId}`,

  getArtist: (artistId: string) =>
    `https://api.spotify.com/v1/artists/${artistId}`,

  getSeveralArtists: () => `https://api.spotify.com/v1/artists`,

  getRelatedArtists: (artistId: string) =>
    `https://api.spotify.com/v1/artists/${artistId}/related-artists`,

  getCategories: () => "/browse/categories",

  getPlaylist: (playlistId: string) =>
    `https://api.spotify.com/v1/playlists/${playlistId}`,

  getPlaylistItems: (playlistId: string) =>
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,

  getPlaylistsByCategory: (categoryId: string) =>
    `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`,

  getFeaturedPlaylists: () => "/browse/featured-playlists",

  getRecommendations: () => `https://api.spotify.com/v1/recommendations`,
};

const fetchers = {
  fetchTrackById,
  fetchArtistById,
  fetchRelatedArtistsById,
  fetchCategories,
  fetchPlaylistById,
  fetchPlaylistItemsById,
  fetchPlaylistsByCategoryId,
  fetchFeaturedPlaylists,
  fetchRecommendations,
};

const fetchHooks = {
  useGetTrackById,
  useGetRecommendations,
  useGetArtistById,
  useGetPopularCategories,
  useGetMusicPreviewPlaylists,
  useGetRelatedArtistsById,
};

////////// AXIOS 初始化 //////////

const spotify = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

////////// AXIOS 攔截器 //////////

/* 在發送 Spotfiy API Request 前從 localStorage 獲得 AccessToken */
spotify.interceptors.request.use(async (config) => {
  const accessToken = getAccessTokenFromLocalStorage();
  config.headers.Authorization = "Bearer " + accessToken;
  return config;
});

/* 假如 Error 是 401 (Token 失效)，則重新從 Server 獲取 AccessToken，並設定 localStorage */
spotify.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const newAccessToken = await fetchAccessToken();
      setAccessTokenToLocalStorage(newAccessToken);

      /* 手動重新發送一次請求 */
      return spotify(error.config);
    }
  }
);

////////// UTILS /////////
const productionUrl = `https://kdan-music.vercel.app/api`;
const devUrl = `http://localhost:3000/api`;

const getbaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return productionUrl;
  }
  return devUrl;
};

const fetchAccessToken = async (): Promise<string> => {
  const res = await axios.get<AccessTokenType>(
    `${getbaseUrl()}/spotify/getAccessToken`
  );
  return res.data.access_token;
};

const setAccessTokenToLocalStorage = (toekn: string) => {
  localStorage.setItem("accessToken", toekn);
};

const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem("accessToken");
};

////////// FETCH FUNCTION //////////

// 獲取熱門類別
async function fetchCategories(
  arg?: CategoriesRequest
): Promise<CategoryObject[]> {
  const endpoint = endpoints.getCategories();
  const res = await spotify.get<CategoriesObject>(endpoint, {
    params: {
      ...arg,
    },
  });
  return res.data.categories.items;
}

// 獲取精選播放清單的集合
async function fetchFeaturedPlaylists(
  arg?: FeaturedPlaylistsRequest
): Promise<SimplifiedPlaylistObject[]> {
  const endpoint = endpoints.getFeaturedPlaylists();
  const featuredPlaylistsRes = await spotify.get<PlaylistsObject>(endpoint, {
    params: {
      ...arg,
    },
  });
  return featuredPlaylistsRes.data.playlists.items;
}

// 根據傳入的 PlaylistId 獲取播放清單
// 注意： 這個端點不能設定 Limit，要獲取 Items 建議用 fetchPlaylistItemsById 。
async function fetchPlaylistById(
  arg: PlaylistRequest
): Promise<PlaylistObject> {
  const palylistId = arg.pid;
  const endpoint = endpoints.getPlaylist(palylistId);
  const res = await spotify.get<PlaylistObject>(endpoint);

  return res.data;
}

// 根據傳入的 PlaylistId 獲取播放清單
async function fetchPlaylistItemsById(
  arg: PlaylistItemsRequest
): Promise<PlaylistItemsObject> {
  const playlistId = arg.pid;
  const endpoint = endpoints.getPlaylistItems(playlistId);
  const res = await spotify.get<PlaylistItemsObject>(endpoint, {
    params: {
      limit: arg.limit,
      market: arg.market,
    },
  });
  return res.data;
}

// 根據傳入的 CategoryId 獲取播放清單的集合
async function fetchPlaylistsByCategoryId(
  arg: PlaylistsByCategoryRequest
): Promise<SimplifiedPlaylistObject[]> {
  const categoryId = arg.categoryId;
  const endpoint = endpoints.getPlaylistsByCategory(categoryId);
  const res = await spotify.get<PlaylistsObject>(endpoint, {
    params: {
      limit: arg.limit,
      country: arg.country,
    },
  });
  return res.data.playlists.items;
}

// 根據傳入的 ArtistId 獲得 ArtistObject
async function fetchArtistById(
  arg: ArtistRequest
): Promise<SimplifiedArtistObject> {
  const artistId = arg.artistId;
  const endpoint = endpoints.getArtist(artistId);
  const res = await spotify.get<SimplifiedArtistObject>(endpoint);
  return res.data;
}

// 根據傳入的 ArtistId 獲得相似的 ArtistObject[]
async function fetchRelatedArtistsById(
  arg: ArtistRequest
): Promise<SimplifiedArtistObject[]> {
  const artistId = arg.artistId;
  const endpoint = endpoints.getRelatedArtists(artistId);
  const res = await spotify.get<{ artists: SimplifiedArtistObject[] }>(
    endpoint
  );
  return res.data.artists;
}

// 根據傳入的 trackId 獲得相似的 TrackObject
async function fetchTrackById(arg: TrackRequest): Promise<TrackObject> {
  const trackId = arg.trackId;
  const endponit = endpoints.getTrack(trackId);
  const res = await spotify.get<TrackObject>(endponit);
  return res.data;
}

// 根據傳入的 Seed 獲得推薦的 TrackObject[]
async function fetchRecommendations(
  arg: RecommendationsRequest
): Promise<RecommendationsObject> {
  const endpoint = endpoints.getRecommendations();
  const res = await spotify.get<RecommendationsObject>(endpoint, {
    params: {
      limit: String(arg.limit),
      seed_artists: arg.seed_artists.join(','),
      seed_tracks: arg.seed_tracks.join(','),
      seed_genres: arg.seed_genres.join(','),
    },
  });
  return res.data;
}

////////// CUSTOM SWR HOOKS //////////
function useGetPopularCategories(arg?: CategoriesRequest) {
  const key = endpoints.getCategories();
  const fetcher = ({ url, arg }: { url: string; arg: CategoriesRequest }) =>
    fetchCategories(arg);
  return useSWR(
    {
      key,
      arg,
    },
    fetcher
  );
}

function useGetMusicPreviewPlaylists() {
  const country = "JP";
  const fetcher = async () => {
    try {
      const popularCategorieRes = await fetchCategories({
        limit: "12",
        offset: "1",
        country,
      });
      const featuredPlaylistsRes = await fetchFeaturedPlaylists({
        limit: "1",
        offset: "1",
        country,
      });
      const categoryIdsByPopularCategory = popularCategorieRes.map(
        (playlist) => playlist.id
      );
      const categoryNamesByPopularCategory = popularCategorieRes.map(
        (playlist) => playlist.name
      );

      const promiseByEachCategoryId = categoryIdsByPopularCategory.map((cid) =>
        fetchPlaylistsByCategoryId({ categoryId: cid, country })
      );
      const playlistIdsByCategores = (
        await Promise.all(promiseByEachCategoryId)
      ).map((playlist) => playlist[0].id);

      const playlistIdByFeatured = featuredPlaylistsRes[0].id;
      const playlistIds = [playlistIdByFeatured, ...playlistIdsByCategores];

      const playlistsRes = await Promise.all(
        playlistIds.map((pid) => fetchPlaylistItemsById({ pid, limit: "20" }))
      );
      const resultPlaylists = playlistsRes.map((playlist) => playlist.items);
      const resultPlaylistsValid = resultPlaylists.map((playlist) =>
        playlist.filter((item) => item.track.preview_url)
      );
      const resultPlaylistsLimit8 = resultPlaylistsValid.map((playlist) =>
        playlist.slice(0, 8)
      );

      return {
        playlists: resultPlaylistsLimit8,
        labels: ["精選", ...categoryNamesByPopularCategory],
      };
    } catch (error) {}
  };

  return useSWR("useGetMusicPreviewPlaylists", fetcher);
}

function useGetArtistById(arg: ArtistRequest) {
  const key = endpoints.getArtist(arg.artistId);
  const fetcher = () => fetchArtistById({ artistId: arg.artistId });
  return useSWR({ key, arg }, fetcher);
}

function useGetRelatedArtistsById(arg: ArtistRequest) {
  const key = endpoints.getRelatedArtists(arg.artistId);
  const fetcher = () => fetchRelatedArtistsById({ artistId: arg.artistId });
  return useSWR({ key, arg }, fetcher);
}

function useGetTrackById(arg: TrackRequest) {
  const key = endpoints.getTrack(arg.trackId);
  const fetcher = () => fetchTrackById(arg);
  return useSWR({ key, arg }, fetcher);
}

function useGetRecommendations(arg: RecommendationsRequest) {
  const key = endpoints.getRecommendations();
  const fetcher = () => fetchRecommendations(arg);
  return useSWR(key, fetcher, {
    revalidateOnFocus: false,
  });
}

export { fetchers, fetchHooks };