export const mocks = {
  Query: () => ({
    featuredPlaylists: () => [...new Array(6)],
  }),
  Playlist: () => ({
    id: () => "playlist_01",
    name: () => "Groovin' with GraphQL",
    description: () =>
      "Serving up the hottest development hits, Groovin' with GraphQL has everything you need to get into the coding mindspace... and stay there!",
  }),
};
