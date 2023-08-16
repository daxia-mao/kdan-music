import { fetchers } from "@/stories/Kdan Music Book/api";
import {
  ContentType,
  PlaylistObject,
  SavedAlbumObject,
  SavedTrackObject,
  SimplifiedArtistObject,
  UserProfileObject,
} from "@/stories/Kdan Music Book/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type UserData = {
  profile: UserProfileObject;
  library: {
    tracks: SavedTrackObject[];
    albums: SavedAlbumObject[];
    artists: SimplifiedArtistObject[];
    playlists: PlaylistObject[];
  };
};

type UserState = {
  user: UserData;
};

const initialState: UserState = {
  user: {
    profile: {
      id: "",
      country: "",
      display_name: "",
      email: "",
      images: [],
    },
    library: {
      tracks: [],
      albums: [],
      artists: [],
      playlists: [],
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchItemsFromLibrary.fulfilled, (state, action) => {
      const data = action.payload.res;
      switch (action.payload.type) {
        case "tracks":
          state.user.library.tracks = data as unknown as SavedTrackObject[];
          return;
        case "albums":
          state.user.library.albums = data as unknown as SavedAlbumObject[];
          return;
        case "following":
          state.user.library.artists =
            data as unknown as SimplifiedArtistObject[];
          return;
        case "playlists":
          state.user.library.playlists = data as unknown as PlaylistObject[];
          return;
      }
    });
    builder.addCase(saveItemToLibrary.fulfilled, (state, action) => {});
    builder.addCase(removeItemFromLibrary.fulfilled, (state, action) => {});
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user.profile = action.payload.profile;
    });
    builder.addCase(fetchAllFromLibrary.fulfilled, (state, action) => {});
  },
});

export const fetchAllFromLibrary = createAsyncThunk(
  "user/fetchAllFromLibrary",
  async (_, api) => {
    api.dispatch(fetchUserProfile());
    api.dispatch(fetchItemsFromLibrary({ type: "tracks" }));
    api.dispatch(fetchItemsFromLibrary({ type: "albums" }));
    api.dispatch(fetchItemsFromLibrary({ type: "following" }));
    api.dispatch(fetchItemsFromLibrary({ type: "playlists" }));
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async () => {
    const profile = await fetchers.fetchMe();
    return {
      profile,
    };
  }
);

export const fetchItemsFromLibrary = createAsyncThunk(
  "user/fetchItemsFromLibrary",
  async ({ type }: { type: ContentType }) => {
    const res = await fetchers.fetchItemsFromMyLibrary({ type, limit: 50 });
    return {
      type,
      res,
    };
  }
);

export const removeItemFromLibrary = createAsyncThunk(
  "user/removeItemFromLibrary",
  async ({ id, type }: { id: string; type: ContentType }, api) => {
    await fetchers.removeItemsFromMyLibrary({ type: type, ids: [id] });
    api.dispatch(fetchItemsFromLibrary({ type }));
  }
);

export const saveItemToLibrary = createAsyncThunk(
  "user/saveItemToLibrary",
  async ({ id, type }: { id: string; type: ContentType }, api) => {
    await fetchers.saveItemsToMyLibrary({ type: type, ids: [id] });
    api.dispatch(fetchItemsFromLibrary({ type }));
  }
);

export const checkLibrary = ({
  library,
  type,
  id,
}: {
  library: UserData["library"];
  type: ContentType;
  id: string;
}) => {
  switch (type) {
    case "tracks":
      return library.tracks.some((item) => item.track.id === id);
    case "albums":
      return library.albums.some((item) => item.album.id === id);
    case "following":
      return library.artists.some((item) => item.id === id);
    case "playlists":
      return library.playlists.some((item) => item.id === id);
  }
};

export default userSlice.reducer;
