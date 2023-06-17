interface SimpleArtistType {
  id: string;
  name: string;
}
interface SimpleAlbumType {
  id: string;
  name: string;
  image: string;
}

export interface TrackType {
  id: string;
  name: string;
  previewUrl: string | null;
  album: SimpleAlbumType;
  artists: SimpleArtistType[];
}

export interface CategoryType {
  id: string;
  name: string;
  icons: SpotifyApi.ImageObject[];
}