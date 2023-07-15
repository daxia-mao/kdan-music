////////// 通用 GENERAL //////////
export interface AccessTokenType {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface ImageObject {
  url: string;
  height: number | null;
  width: number | null;
}


////////// 藝人 ARTIST //////////
export interface SimplifiedArtistObject {
  id: string;
  name: string;
  popularity?: number;
  images: ImageObject[];
  genres?: string[];
}

////////// 專輯 ALBUM //////////
export interface SimplifiedAlbumObject {
  id: string;
  name: string;
  images: ImageObject[];
  artists: SimplifiedArtistObject[];
  type?: string;
  album_type?: string;
  release_date?: string;
}

////////// 曲目 TRACK //////////
export interface TrackObject {
  id: string;
  name: string;
  popularity?: number;
  preview_url: string;
  track_number?: number;
  artists: SimplifiedArtistObject[];
  album: SimplifiedAlbumObject;
}

////////// 類別 CATEGORY, CATEGORIES //////////
export interface CategoryObject {
  href: string;
  id: string;
  name: string;
  icons: ImageObject[];
}

export interface CategoriesObject {
  categories: {
    items: CategoryObject[];
  };
}

////////// 播放清單 PLAYLIST, PLAYLISTS //////////
export interface SimplifiedPlaylistObject {
  id: string;
  name: string;
  images: ImageObject[];
  description: string;
}

export interface PlaylistTrackObject {
  added_at: string;
  added_by: {
    id: string;
  };
  track: TrackObject;
}
export interface PlaylistObject {
  id: string;
  name: string;
  description: string;
  images: ImageObject[];
  owner: {
    id: string;
    dispaly_name: string;
  };
  total: number;
  tracks: {
    items: PlaylistTrackObject[];
  };
}
export interface PlaylistItemsObject {
  items: PlaylistTrackObject[];
}
export interface PlaylistsObject {
  playlists: {
    items: PlaylistObject[];
  };
}

////////// 推薦 RECOMMENDATION //////////
export interface RecommendationsObject {
  tracks: TrackObject[];
}

////////// 搜尋 SEARCH //////////

export interface SearchObject {
  tracks?: TrackObject[];
  albums?: SimplifiedAlbumObject[];
  artists?: SimplifiedArtistObject[];
  playlists?:PlaylistObject[];
}

////////// 用戶 USER //////////

export interface UserObject {
  id: string;
  country: string;
  display_name: string;
  email: string;
  images: ImageObject[];
}

export interface SavedTrackObject {
  added_at: string;
  track: TrackObject;
}

////////// 請求 ENDPOINT REQUEST TYPE //////////

//https://api.spotify.com/v1/browse/categories
export type CategoriesRequest = {
  limit?: string;
  country?: string;
  offset?: string;
};

export type FeaturedPlaylistsRequest = {
  limit?: number;
  country?: string;
  offset?: string;
};

export type PlaylistRequest = {
  pid: string;
};

export type PlaylistItemsRequest = {
  pid: string;
  limit?: string;
  market?: string;
};

export type PlaylistsByCategoryRequest = {
  categoryId: string;
  country?: string;
  limit?: string;
};

export type AlbumRequest = {
  albumId: string;
};

export type ArtistRequest = {
  artistId: string;
};

export type TrackRequest = {
  trackId: string;
};

export interface RecommendationsRequest {
  limit?: number;
  seed_artists: string[];
  seed_genres: string[];
  seed_tracks: string[];
}

export interface ArtistTopTracksRequest {
  artistId: string;
  market?: string;
}

export interface AlbumsByArtistRequest {
  artistId: string;
  include_groups?: string[];
  limit: number;
}

export interface SearchRequest {
  q: string;
  type?: string[];
  limit?: number;
  market?: string;
}

export interface MySavedTracksRequest {
  market?: string;
  limit?: number;
  offset?: string;
}