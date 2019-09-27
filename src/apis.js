import Config from '../credentials'

export function searchWebService (keyword, page) {
  return fetch(
    `${Config.BASE_URL}/search/movie?api_key=${
      Config.API_KEY
    }&page=${page}&query=${keyword}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then(res => res)
}
