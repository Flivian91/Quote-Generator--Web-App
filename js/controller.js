import view from "./view.js";
import * as model from "./model.js";
import { API_URL, ALL_API} from "./config.js";
import quoteView from "./quoteView.js";
// const quoteContainer = document.querySelector(".quote__card");

const controlQuotes = async function (url, urlAll) {
  try {
    view.renderSpinner();
    //  Load the qoutes
    await model.loadQoutes(url);
    await model.loadAllQuotes(urlAll)
    // Render the data in the View
    view.render(model.state.quote[0]);
    // render the data of all the Quotes to the quoteView
    // view.render(model.state.allQuotes)
  } catch (err) {
    console.error(err);
  }
};
controlQuotes(API_URL, ALL_API);

// Controller for click
function controlClickGenerate(){
  view.renderSpinner()
  controlQuotes(API_URL, ALL_API);
  // view.render(model.state.quote[0]);
  console.log("Hello");
  
}

// All handler function
function init(){
  view.addHandlerClick(controlClickGenerate)
}
init()
