const BASE_URL = 'https://newsapi.org/v2'
const API_KEY = 'f60f89e15cee4ca48b413622bf524d68'

export const getNews = (searchText) => {
    return fetch(`${BASE_URL}/everything?q=${searchText}`, {
        headers: {
            'X-Api-Key': API_KEY,
        }
    })
        
}