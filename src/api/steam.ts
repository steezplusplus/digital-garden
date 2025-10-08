// Steam Web API client
const NODE_ENV = process.env.NODE_ENV;
const STEAM_WEB_API_KEY = process.env.STEAM_WEB_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

const isDev = NODE_ENV === 'development';
const BASE_URL = 'https://api.steampowered.com';

type SteamGame = {
  appid: number;
  playtime_forever: number;
};

type SteamOwnedGamesResponse = {
  response?: {
    games?: SteamGame[];
  };
};

type SteamPlayerSummaryResponse = {
  response?: {
    players?: Array<{
      timecreated: number;
    }>;
  };
};

type SteamStatsDTO = {
  createdAt: number; // Unix timestamp
  totalHoursPlayed: number;
};

export async function getSteamStats(): Promise<SteamStatsDTO> {
  try {
    if (isDev) {
      console.info('[steam] request', { method: 'GET', routes: ['/IPlayerService/GetOwnedGames', '/ISteamUser/GetPlayerSummaries'] });
    }

    const [gamesResponse, profileResponse] = await Promise.all([
      fetch(`${BASE_URL}/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_WEB_API_KEY}&steamid=${STEAM_ID}&format=json&include_played_free_games=1`),
      fetch(`${BASE_URL}/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_WEB_API_KEY}&steamids=${STEAM_ID}`)
    ]);

    if (isDev) {
      console.info('[steam] response', { 
        gamesStatus: gamesResponse.status, 
        profileStatus: profileResponse.status 
      });
    }

    if (!gamesResponse.ok || !profileResponse.ok) {
      // TODO: Do nothing with the error for now.
      return { createdAt: 0, totalHoursPlayed: 0 };
    }

    const gamesData = (await gamesResponse.json()) as SteamOwnedGamesResponse;
    const profileData = (await profileResponse.json()) as SteamPlayerSummaryResponse;

    const games = gamesData?.response?.games ?? [];
    const totalMinutes = games.reduce((acc, game) => acc + (game.playtime_forever ?? 0), 0);
    const totalHoursPlayed = Math.floor(totalMinutes / 60);
    const createdAt = profileData?.response?.players?.[0]?.timecreated ?? 0;

    return { createdAt, totalHoursPlayed };
  } catch (error) {
    // TODO: Do nothing with the error for now.
    return { createdAt: 0, totalHoursPlayed: 0 };
  }
}