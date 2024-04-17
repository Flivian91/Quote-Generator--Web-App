import { API_URL, ALL_API } from "./config.js";

export const state = {
  quote: {},
  allQuotes: {},
  pages: {},
};

// gets One Random Quote
export const loadQoutes = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    state.quote = data.data;
  } catch (err) {
    console.error(err);
  }
};
// Get a Collection of qoutes
export const loadAllQuotes =  async function(url){
  try {
    const res = await fetch(url)
    const data = await res.json()
    state.pages = data.pagination
    state.allQuotes = data.data
    console.log(state.allQuotes);

  }catch(err){
    console.error(err);
  }
}