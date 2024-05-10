let cachedAccessToken = null;
let cachedTokenExpiry = null;

export async function getAccessToken(forceRenewal = false) {
  // Check if the cached token is valid
  const now = new Date();
  console.log("Token Expiry:", cachedTokenExpiry);
  console.log("Current Time:", now);

  if (
    !forceRenewal &&
    cachedAccessToken &&
    cachedTokenExpiry &&
    now < cachedTokenExpiry
  ) {
    console.log("Using cached access token");
    return cachedAccessToken;
  }

  console.log("Fetching new access token");

  // Retrieve Spotify client credentials
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const authHeader = `Basic ${Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString("base64")}`;

  try {
    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: authHeader,
        },
        body: "grant_type=client_credentials",
      }
    );

    const tokenData = await tokenResponse.json();
    if (tokenResponse.status !== 200) {
      throw new Error(`Failed to fetch token: ${tokenData.error_description}`);
    }

    // Cache the new access token and calculate its expiry time
    const expiresIn = tokenData.expires_in; // Typically 3600 seconds (1 hour)
    const bufferSeconds = 5; // Minimize buffer to handle edge cases
    cachedAccessToken = tokenData.access_token;
    cachedTokenExpiry = new Date(
      now.getTime() + (expiresIn - bufferSeconds) * 1000
    );

    return cachedAccessToken;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw new Error("Could not retrieve access token");
  }
}
