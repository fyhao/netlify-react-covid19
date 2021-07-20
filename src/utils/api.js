/* Api methods to call /functions */

const readAll = () => {
  return fetch('/.netlify/functions/todos-read-all').then((response) => {
    return response.json()
  })
}
const covidstatsFetch = () => {
  return fetch('/.netlify/functions/covidstats-fetch').then((response) => {
    return response.json()
  })
}
const covidSummaryFetch = () => {
  return fetch('/.netlify/functions/covidsummary-fetch').then((response) => {
    return response.json()
  })
}
export default {
  readAll: readAll,
  covidstatsFetch: covidstatsFetch,
  covidSummaryFetch: covidSummaryFetch
}
