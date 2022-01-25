var apikey='ocmYAnlVxm3QWnQoHJtBwtUdiu90MlAn'
var urlbase='https://api.nytimes.com/svc/search/v2/articlesearch.json?'
var keyword = 'Value from textbox that the user inputs in here'
var query = '?q='
var apikeyidentity = 'api-key='

// var url = urlbase + query + keyword + apikeyidentity + apikey;

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-19&api-key=ocmYAnlVxm3QWnQoHJtBwtUdiu90MlAn'

function setup() {
  noCanvas();
  loadJSON(url, getData);
}
function getData(data) {
  var articles = data.response.docs;

  //Loop to get all results from articlesearch
  for (var i = 0; i < articles.length; i++) {
    createElement('h1', articles[i].headline.main);
    createP(articles[i].snippet);
    createP(articles[i].lead_paragraph);
    createP(articles[i].web_url);
  }
}


function setup() {
  noCanvas();
  loadJSON(url, getData);
}
function getData(data) {
  var articles = data.response.docs;

  //Loop to get all results from articlesearch
  for (var i = 0; i < articles.length; i++){
    createElement('h1', articles[i].headline.main);
  }
}
