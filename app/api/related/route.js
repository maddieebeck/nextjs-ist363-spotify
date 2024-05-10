import { getAccessToken } from "../../../lib/spotify";

export async function GET(request) {
  const urlParams = request.nextUrl.searchParams;
  const id = urlParams.get("id");

  const token = await getAccessToken();

  const apiResponse = await fetch(
    `https://api.spotify.com/v1/artists/${id}/related-artists`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const relatedData = await apiResponse.json();

  return new Response(JSON.stringify(relatedData));
}
