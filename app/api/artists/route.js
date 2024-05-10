import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
  const token = await getAccessToken();

  const artists = [
    {
      name: "Chappell Roan",
      spotify_id: "7GlBOeep6PqTfFi59PTUUN",
    },
    {
      name: "Lorde",
      spotify_id: "163tK9Wjr9P9DmM0AVK7lm",
    },
    {
      name: "Boygenius",
      spotify_id: "1hLiboQ98IQWhpKeP9vRFw",
    },
    {
      name: "Hozier",
      spotify_id: "2FXC3k01G6Gw61bmprjgqS",
    },
    {
      name: "Renee Rapp",
      spotify_id: "2hUYKu1x0UZQXvzCmggvSn",
    },
    {
      name: "Clairo",
      spotify_id: "3l0CmX0FuQjFxr8SK7Vqag",
    },
    {
      name: "Shallow Alcove",
      spotify_id: "2hEZUJYO26jhMzfw0ZzrCj",
    },
    {
      name: "Billie Eilish",
      spotify_id: "6qqNVTkY8uBg9cP3Jd7DAH",
    },
    {
      name: "Leith Ross",
      spotify_id: "4nxKz1dRYXnsGzN1lUURtG",
    },
    {
      name: "Faye Webster",
      spotify_id: "5szilpXHcwOqnyKLqGco5j",
    },
  ];

  const artistsIds = artists.map((artist) => artist.spotify_id);

  const artistsString = artistsIds.join(",");

  const apiResponse = await fetch(
    `https://api.spotify.com/v1/artists?ids=${artistsString}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const artistsData = await apiResponse.json();
  console.log({ artistsData });
  return new Response(JSON.stringify(artistsData));
}
