// https://steamcommunity.com/dev

const NODE_ENV = process.env.NODE_ENV;
const STEAM_WEB_API_KEY = process.env.STEAM_WEB_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

const isDev = NODE_ENV === 'development';
const BASE_URL = 'http://api.steampowered.com/'

// http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=XXXXXXXXXXXXXXXXX&steamid=76561197960434622&format=json
export async function getSteamPlaytime() {
  const url = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_WEB_API_KEY}&steamid=${STEAM_ID}&format=json`;

  const res = await fetch(url);

  if (!res.ok) {
    console.log(res.statusText);
  }

  const data = await res.json();

  if (isDev) {
    console.debug('[steam]', data);
  }

  return data;
}