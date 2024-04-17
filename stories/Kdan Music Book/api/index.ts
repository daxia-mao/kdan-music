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
  AlbumRequest,
  SimplifiedAlbumObject,
  AlbumsByArtistRequest,
  ArtistTopTracksRequest,
  SearchRequest,
  SearchObject,
  UserProfileObject,
  SavedTrackObject,
  SavedAlbumObject,
  ContentType,
  fetchMyLibraryRequest,
  checkMyLibraryRequest,
  deleteMyLibraryRequest,
  saveMyLibraryRequest,
  TracksOfAlbumRequest,
  CategoryRequest,
} from "../types";

////////// ENDPOINTES /////////
const endpoints = {
  getTrack: (trackId: string) => `/tracks/${trackId}`,

  getRecommendations: () => `/recommendations`,

  getArtistTopTracks: (artistId: string) => `/artists/${artistId}/top-tracks`,

  getArtist: (artistId: string) => `/artists/${artistId}`,

  getSeveralArtists: () => `/artists`,

  getRelatedArtists: (artistId: string) =>
    `/artists/${artistId}/related-artists`,

  getAlbum: (albumId: string) => `/albums/${albumId}`,

  getTracksOfAlbum: (albumId: string) => `/albums/${albumId}/tracks`,

  getAlbumsByArtist: (artistId: string) => `/artists/${artistId}/albums`,

  getCategories: () => "/browse/categories",

  getCategory: (cid: string) => `/browse/categories/${cid}`,

  getPlaylist: (playlistId: string) => `/playlists/${playlistId}`,

  getPlaylistItems: (playlistId: string) => `/playlists/${playlistId}/tracks`,

  getPlaylistsByCategory: (categoryId: string) =>
    `/browse/categories/${categoryId}/playlists`,

  getFeaturedPlaylists: () => "/browse/featured-playlists",

  search: () => `/search`,

  getMe: () => "/me",

  getMyLibrary: (type: ContentType) => {
    return `/me/${type}`;
  },
  checkMyLibrary: (type: ContentType) => {
    return `/me/${type}/contains`;
  },
  followPlaylist: (playlistId: string) => `/playlists/${playlistId}/followers`,
};

const fetchers = {
  fetchPersonalToken,
  fetchTrackById,
  fetchRecommendations,
  fetchArtistTopTracks,
  fetchArtistById,
  fetchArtistsByIds,
  fetchRelatedArtistsById,
  fetchAlbumById,
  fetchTracksOfAlbum,
  fetchAlbumsByArtist,
  fetchCategory,
  fetchCategories,
  fetchPlaylistById,
  fetchPlaylistItemsById,
  fetchPlaylistsByCategoryId,
  fetchFeaturedPlaylists,
  fetchSearchItems,
  fetchMe,
  checkItemsFromMyLibrary,
  fetchItemsFromMyLibrary,
  removeItemsFromMyLibrary,
  saveItemsToMyLibrary,
};

const fetchHooks = {
  useGetTrackById,
  useGetRecommendations,
  useGetArtistTopTracks,
  useGetAlbumById,
  useGetAlbumsByArtist,
  useGetTracksOfAlbum,
  useGetArtistById,
  useGetSeveralArtistsByIds,
  useGetRelatedArtistsById,
  useGetPopularCategories,
  useGetCategory,
  useGetMusicPreviewPlaylists,
  useGetSearchItems,
  useGetPlaylist,
  useGetFeaturedPlaylists,
  useGetPersonalToken,
  useGetMe,
  useGetItemsFromMyLibrary,
  useCheckItemsFromMyLibrary,
  useGetPlaylistsByCategoryId,
};

////////// AXIOS 初始化 //////////

const spotify = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

const personalSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

////////// AXIOS 攔截器 //////////

/* 在發送 Spotfiy API Request 前從 localStorage 獲得 Access Token */
spotify.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("access_token");
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
      localStorage.setItem("access_token", newAccessToken);
      /* 手動重新發送一次請求 */
      return spotify(error.config);
    }
  }
);

/* 在發送 Spotfiy API Request 前從 localStorage 獲得 Personal Token ，並 Dispatch Login */
personalSpotify.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("personal_token");
  config.headers.Authorization = "Bearer " + accessToken;
  return config;
});

personalSpotify.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      throw error;
    }
  }
);
// For Storybook
const devURL = process.env.NEXT_PUBLIC_DEV_URL || "https://kdan-music.vercel.app";

////////// UTILS /////////
const fetchAccessToken = async (): Promise<string> => {
  const res = await axios.get<AccessTokenType>(
    devURL
      ? `${devURL}/api/spotify/getAccessToken`
      : "/api/spotify/getAccessToken"
  );
  return res.data.access_token;
};

async function fetchPersonalToken(code: string): Promise<AccessTokenType> {
  const res = await axios.get<AccessTokenType>(
    "/api/spotify/getPersonalToken",
    { params: { code: code } }
  );
  return res.data;
}

export async function testPersonalTokenValid() {
  try {
    const endpoint = endpoints.getMe();
    const res = await personalSpotify.get(endpoint);
    return res;
  } catch (error) {
    throw error;
  }
}

////////// FETCH FUNCTION //////////

// 獲取熱門類別
async function fetchCategories(
  arg?: CategoriesRequest
): Promise<CategoryObject[]> {
  const endpoint = endpoints.getCategories();
  const res = await spotify.get<CategoriesObject>(endpoint, {
    params: {
      limit: String(arg?.limit),
      country: arg?.country,
      offset: arg?.offset,
    },
  });
  return res.data.categories.items;
}

async function fetchCategory(arg: CategoryRequest): Promise<CategoryObject> {
  const endpoint = endpoints.getCategory(arg.categoryId);
  const res = await spotify.get<CategoryObject>(endpoint, {
    params: {
      category_id: arg.categoryId,
      country: arg?.country,
    },
  });
  return res.data;
}

// 獲取精選播放清單的集合
async function fetchFeaturedPlaylists(
  arg?: FeaturedPlaylistsRequest
): Promise<PlaylistObject[]> {
  const endpoint = endpoints.getFeaturedPlaylists();
  const featuredPlaylistsRes = await spotify.get<PlaylistsObject>(endpoint, {
    params: {
      limit: String(arg?.limit),
      country: arg?.country,
      offset: arg?.offset,
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
      limit: String(arg.limit),
      market: arg.market,
    },
  });
  return res.data;
}

// 根據傳入的 CategoryId 獲取播放清單的集合
async function fetchPlaylistsByCategoryId(
  arg: PlaylistsByCategoryRequest
): Promise<PlaylistObject[]> {
  const categoryId = arg.categoryId;
  const endpoint = endpoints.getPlaylistsByCategory(categoryId);
  const res = await spotify.get<PlaylistsObject>(endpoint, {
    params: {
      limit: String(arg.limit),
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

async function fetchArtistsByIds(arg: {
  artistIds: string[];
}): Promise<SimplifiedArtistObject[]> {
  const artistIds = arg.artistIds;
  const endpoint = endpoints.getSeveralArtists();
  const res = await spotify.get<{ artists: SimplifiedArtistObject[] }>(
    endpoint,
    {
      params: {
        ids: artistIds.join(","),
      },
    }
  );
  return res.data.artists;
}

// 根據傳入的 AlbumId 獲得 AlbumObject
async function fetchAlbumById(
  arg: AlbumRequest
): Promise<SimplifiedAlbumObject> {
  const albumId = arg.albumId;
  const endpoint = endpoints.getAlbum(albumId);
  const res = await spotify.get<SimplifiedAlbumObject>(endpoint);
  return res.data;
}

async function fetchTracksOfAlbum(
  arg: TracksOfAlbumRequest
): Promise<TrackObject[]> {
  const albumId = arg.albumId;
  const endpoint = endpoints.getTracksOfAlbum(albumId);
  const res = await spotify.get<{ items: TrackObject[] }>(endpoint, {
    params: {
      id: arg.albumId,
      limit: String(arg.limit),
      market: arg.market,
    },
  });
  const trackIds = res.data.items.map((item) => item.id);
  const promises = trackIds.map((trackId) => fetchTrackById({ trackId }));
  const result = await Promise.all(promises);
  return result;
}

async function fetchAlbumsByArtist(
  arg: AlbumsByArtistRequest
): Promise<SimplifiedAlbumObject[]> {
  const artistId = arg.artistId;
  const endpoint = endpoints.getAlbumsByArtist(artistId);
  const res = await spotify.get<{ items: SimplifiedAlbumObject[] }>(endpoint, {
    params: {
      id: arg.artistId,
      include_groups: arg.include_groups?.join(","),
      limit: String(arg.limit),
    },
  });
  return res.data.items;
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
): Promise<TrackObject[]> {
  const endpoint = endpoints.getRecommendations();
  const res = await spotify.get<RecommendationsObject>(endpoint, {
    params: {
      limit: String(arg.limit),
      seed_artists: arg.seed_artists.join(","),
      seed_tracks: arg.seed_tracks.join(","),
      seed_genres: arg.seed_genres.join(","),
    },
  });
  return res.data.tracks;
}

// 根據傳入的 ArtistId 獲得該 Artist 的熱門曲目。
async function fetchArtistTopTracks(
  arg: ArtistTopTracksRequest
): Promise<TrackObject[]> {
  const endpoint = endpoints.getArtistTopTracks(arg.artistId);
  const res = await spotify.get<{ tracks: TrackObject[] }>(endpoint, {
    params: {
      id: arg.artistId,
      market: arg.market,
    },
  });

  return res.data.tracks;
}

async function fetchSearchItems(arg: SearchRequest): Promise<SearchObject> {
  const endpoint = endpoints.search();
  const res = await spotify.get<{
    tracks: { items: TrackObject[] };
    albums: { items: SimplifiedAlbumObject[] };
    artists: { items: SimplifiedArtistObject[] };
    playlists: { items: PlaylistObject[] };
  }>(endpoint, {
    params: {
      q: arg.q,
      type: `track,album,artist,playlist`,
      limit: String(arg.limit),
      market: arg.market,
    },
  });

  const result: SearchObject = {
    tracks: res.data.tracks ? res.data.tracks.items : undefined,
    albums: res.data.albums ? res.data.albums.items : undefined,
    artists: res.data.artists ? res.data.artists.items : undefined,
    playlists: res.data.playlists ? res.data.playlists.items : undefined,
  };

  return result;
}

async function fetchMe(): Promise<UserProfileObject> {
  const endpoint = endpoints.getMe();
  try {
    const res = await personalSpotify.get<UserProfileObject>(endpoint);
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function fetchItemsFromMyLibrary(
  arg: fetchMyLibraryRequest
): Promise<
  | SavedTrackObject[]
  | SavedAlbumObject[]
  | PlaylistObject[]
  | SimplifiedArtistObject[]
> {
  const endpoint = endpoints.getMyLibrary(arg.type);
  try {
    if (
      arg.type === "tracks" ||
      arg.type === "albums" ||
      arg.type === "playlists"
    ) {
      const res = await personalSpotify.get<{
        items: SavedTrackObject[] | SavedAlbumObject[] | PlaylistObject[];
      }>(endpoint, {
        params: {
          limit: String(arg.limit),
        },
      });
      return res.data.items;
    } else {
      const res = await personalSpotify.get<{
        artists: { items: SimplifiedArtistObject[] };
      }>(endpoint, {
        params: {
          type: "artist",
          limit: String(arg.limit),
        },
      });
      return res.data.artists.items;
    }
  } catch (error) {
    throw error;
  }
}

async function checkItemsFromMyLibrary(
  arg: checkMyLibraryRequest
): Promise<boolean[]> {
  const endpoint = endpoints.checkMyLibrary(arg.type);
  try {
    if (
      arg.type === "tracks" ||
      arg.type === "albums" ||
      arg.type === "playlists"
    ) {
      const res = await personalSpotify.get<boolean[]>(endpoint, {
        params: {
          ids: arg.ids.join(","),
        },
      });

      return res.data;
    } else {
      const res = await personalSpotify.get<boolean[]>(endpoint, {
        params: {
          type: "artist",
          ids: arg.ids.join(","),
        },
      });
      return res.data;
    }
  } catch (error) {
    throw error;
  }
}

async function removeItemsFromMyLibrary(arg: deleteMyLibraryRequest) {
  const endpoint = endpoints.getMyLibrary(arg.type);
  try {
    if (arg.type === "tracks" || arg.type === "albums") {
      const res = await personalSpotify.delete(endpoint, {
        data: {
          ids: arg.ids,
        },
      });
      return res.data;
    } else if (arg.type === "following") {
      const res = await personalSpotify.delete(endpoint, {
        params: {
          type: "artist",
        },
        data: {
          ids: arg.ids,
        },
      });
      return res.data;
    } else if (arg.type === "playlists") {
      const pid = arg.ids.join();
      const endpoint = endpoints.followPlaylist(pid);
      const res = await personalSpotify.delete(endpoint);
      return res.data;
    }
  } catch (error) {
    throw error;
  }
}

async function saveItemsToMyLibrary(arg: saveMyLibraryRequest) {
  const endpoint = endpoints.getMyLibrary(arg.type);
  try {
    if (arg.type === "tracks" || arg.type === "albums") {
      const res = await personalSpotify.put(endpoint, null, {
        params: {
          ids: arg.ids.join(","),
        },
      });
      return res.data;
    } else if (arg.type === "following") {
      const res = await personalSpotify.put(endpoint, null, {
        params: {
          type: "artist",
          ids: arg.ids.join(","),
        },
      });
      return res.data;
    } else if (arg.type === "playlists") {
      const pid = arg.ids.join();
      const endpoint = endpoints.followPlaylist(pid);
      const res = await personalSpotify.put(endpoint, null);
      return res.data;
    }
  } catch (error) {
    throw error;
  }
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

function useGetCategory(arg: CategoryRequest) {
  const key = endpoints.getCategories();
  const fetcher = () => fetchCategory(arg);
  return useSWR(
    {
      key,
      arg,
    },
    fetcher
  );
}

function useGetPlaylistsByCategoryId(arg: PlaylistsByCategoryRequest) {
  const key = endpoints.getPlaylistsByCategory(arg.categoryId);
  const fetcher = () => fetchPlaylistsByCategoryId(arg);
  return useSWR(
    {
      key,
      arg,
    },
    fetcher
  );
}

function useGetMusicPreviewPlaylists() {
  const country = "TW";
  const fetcher = async () => {
    try {
      const popularCategorieRes = await fetchCategories({
        limit: 12,
        offset: "1",
        country,
      });
      const featuredPlaylistsRes = await fetchFeaturedPlaylists({
        limit: 1,
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
        fetchPlaylistsByCategoryId({ categoryId: cid, country, limit: 1 })
      );

      const playlistIdsByCategores = (
        await Promise.all(promiseByEachCategoryId)
      ).map((playlist) => playlist[0]?.id);

      const playlistIdByFeatured = featuredPlaylistsRes[0]?.id;
      const playlistIds = [playlistIdByFeatured, ...playlistIdsByCategores].filter(v => v);
      const playlistsRes = await Promise.all(
        playlistIds.map((pid) => fetchPlaylistItemsById({ pid, limit: 20 }))
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
    } catch (error) {
      throw error;
    }
  };

  return useSWR("useGetMusicPreviewPlaylists", fetcher);
}

function useGetTrackById(arg: TrackRequest) {
  const key = endpoints.getTrack(arg.trackId);
  const fetcher = () => fetchTrackById(arg);
  return useSWR({ key, arg }, fetcher);
}

function useGetAlbumById(arg: AlbumRequest) {
  const key = endpoints.getAlbum(arg.albumId);
  const fetcher = () => fetchAlbumById(arg);
  return useSWR({ key, arg }, fetcher);
}

function useGetTracksOfAlbum(arg: TracksOfAlbumRequest) {
  const key = endpoints.getTracksOfAlbum(arg.albumId);
  const fetcher = () => fetchTracksOfAlbum(arg);
  return useSWR({ key, arg }, fetcher);
}

function useGetAlbumsByArtist(arg: AlbumsByArtistRequest) {
  const key = endpoints.getAlbumsByArtist(arg.artistId);
  const fetcher = () => fetchAlbumsByArtist(arg);
  return useSWR({ key, arg }, fetcher);
}

function useGetArtistById(arg: ArtistRequest) {
  const key = endpoints.getArtist(arg.artistId);
  const fetcher = () => fetchArtistById({ artistId: arg.artistId });
  return useSWR({ key, arg }, fetcher);
}

function useGetSeveralArtistsByIds(arg: { artistIds: string[] }) {
  const key = endpoints.getSeveralArtists();
  const fetcher = () => fetchArtistsByIds({ artistIds: arg.artistIds });
  return useSWR({ key, arg }, fetcher);
}

function useGetRelatedArtistsById(arg: ArtistRequest) {
  const key = endpoints.getRelatedArtists(arg.artistId);
  const fetcher = () => fetchRelatedArtistsById({ artistId: arg.artistId });
  return useSWR({ key, arg }, fetcher);
}

function useGetRecommendations(arg: RecommendationsRequest) {
  const key = endpoints.getRecommendations();
  const fetcher = () => fetchRecommendations(arg);
  return useSWR(key, fetcher, {
    revalidateOnFocus: false,
  });
}

function useGetArtistTopTracks(arg: ArtistTopTracksRequest) {
  const key = endpoints.getArtistTopTracks(arg.artistId);
  const fetcher = () => fetchArtistTopTracks(arg);
  return useSWR(key, fetcher);
}

function useGetSearchItems(arg: SearchRequest) {
  const key = endpoints.search();
  const fetcher = () => fetchSearchItems(arg);
  return useSWR({ key, arg }, fetcher);
}

function useGetPlaylist(arg: PlaylistRequest) {
  const key = endpoints.getPlaylist(arg.pid);
  const fetcher = () => fetchPlaylistById(arg);
  return useSWR({ key, arg }, fetcher);
}

function useGetFeaturedPlaylists(arg: FeaturedPlaylistsRequest) {
  const key = endpoints.getFeaturedPlaylists();
  const fetcher = () => fetchFeaturedPlaylists(arg);
  return useSWR({ key, arg }, fetcher);
}

function useGetPersonalToken(arg: { code: string }) {
  const key = "/api/getPersonalToken";
  const fetcher = () => fetchPersonalToken(arg.code);
  return useSWR({ key, arg }, fetcher);
}

function useGetMe() {
  const key = endpoints.getMe();
  const fetcher = () => fetchMe();
  return useSWR(key, fetcher);
}

function useGetItemsFromMyLibrary(arg: fetchMyLibraryRequest) {
  const key = endpoints.getMyLibrary(arg.type);
  const fetcher = () => fetchItemsFromMyLibrary(arg);
  return useSWR({ key, arg }, fetcher);
}

function useCheckItemsFromMyLibrary(arg: checkMyLibraryRequest) {
  const key = endpoints.checkMyLibrary(arg.type);
  const fetcher = () => checkItemsFromMyLibrary(arg);
  return useSWR({ key, arg }, fetcher);
}

export { fetchers, fetchHooks };
