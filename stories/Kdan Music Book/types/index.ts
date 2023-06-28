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
    items: SimplifiedPlaylistObject[];
  };
}

////////// 推薦 RECOMMENDATION //////////
export interface RecommendationsObject {
  tracks: TrackObject[];
}

////////// 請求 ENDPOINT REQUEST TYPE //////////

//https://api.spotify.com/v1/browse/categories
export type CategoriesRequest = {
  limit?: string;
  country?: string;
  offset?: string;
};

export type FeaturedPlaylistsRequest = {
  limit?: string;
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
