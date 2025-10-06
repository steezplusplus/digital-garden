// https://steamcommunity.com/dev

const NODE_ENV = process.env.NODE_ENV;
const STEAM_WEB_API_KEY = process.env.STEAM_WEB_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

const isDev = NODE_ENV === 'development';
const BASE_URL = 'http://api.steampowered.com'

type SteamOwnedGamesResponse = {
  response: {
    game_count: number;
    games: {
      appid: string;
      playtime_forever: number;
      playtime_windows_forever: number;
      playtime_mac_forever: number;
      playtime_linux_forever: number;
      playtime_deck_forever: number;
      rtime_last_played: number;
      playtime_disconnected: number;
    }[];
  };
};

type SteamStatistics = {
  totalGames: number;
  totalPlaytime: number; // in minutes
}

// https://developer.valvesoftware.com/wiki/Steam_Web_API#GetOwnedGames_(v0001)
export async function getSteamStatistics(): Promise<SteamStatistics> {
  const url = `${BASE_URL}/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_WEB_API_KEY}&steamid=${STEAM_ID}&format=json`;

  if (isDev) {
    console.info('[steam] request', { method: 'GET', route: '/IPlayerService/GetOwnedGames' });
  }

  const response = await fetch(url);

  if (!response.ok) {
    console.log(response.statusText);
  }

  if (isDev) {   
    console.info('[steam] response', { status: response.status, route: '/IPlayerService/GetOwnedGames' });
  }

  const data: SteamOwnedGamesResponse = await response.json();

  const stats = {
    totalGames: data.response.game_count,
    totalPlaytime: data.response.games.reduce((acc, game) => acc + game.playtime_forever, 0),
  };

  return stats;
}