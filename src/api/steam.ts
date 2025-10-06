// Steam Web API client
const NODE_ENV = process.env.NODE_ENV;
const STEAM_WEB_API_KEY = process.env.STEAM_WEB_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

const isDev = NODE_ENV === 'development';
const BASE_URL = 'https://api.steampowered.com';

type SteamGame = {
  appid: number;
  playtime_forever: number;
  playtime_windows_forever?: number;
  playtime_mac_forever?: number;
  playtime_linux_forever?: number;
  playtime_deck_forever?: number;
  rtime_last_played?: number;
};

type SteamOwnedGamesResponse = {
  response?: {
    game_count?: number;
    games?: SteamGame[];
  };
};

type SteamStatistics = {
  totalGames: number;
  totalPlayedGames: number;
  totalPlaytime: number; // in hours
};

// https://developer.valvesoftware.com/wiki/Steam_Web_API#GetOwnedGames_(v0001)
export async function getSteamStatistics(): Promise<SteamStatistics> {
  const url = `${BASE_URL}/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_WEB_API_KEY}&steamid=${STEAM_ID}&format=json&include_played_free_games=1`;

  if (isDev) {
    console.info('[steam] request', { method: 'GET', route: '/IPlayerService/GetOwnedGames', url });
  }

  try {
    const response = await fetch(url);

    if (isDev) {
      console.info('[steam] response', { status: response.status, route: '/IPlayerService/GetOwnedGames' });
    }

    if (!response.ok) {
      console.error('[steam] error', { status: response.status, statusText: response.statusText });
      return { totalGames: 0, totalPlayedGames: 0, totalPlaytime: 0 };
    }

    const data = (await response.json()) as SteamOwnedGamesResponse;

    const games = data?.response?.games ?? [];
    const totalGames = data?.response?.game_count ?? games.length ?? 0;
    const totalPlayedGames = games.reduce((acc, game) => game.playtime_forever > 0 ? acc + 1 : acc, 0);
    const totalPlaytime = Math.floor(games.reduce((acc, game) => acc + (game.playtime_forever ?? 0), 0) / 60);

    return { totalGames, totalPlayedGames, totalPlaytime };
  } catch (err) {
    console.error('[steam] error fetching stats', err);
    return { totalGames: 0, totalPlayedGames: 0, totalPlaytime: 0 };
  }
}