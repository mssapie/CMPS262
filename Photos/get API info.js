fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-19&api-key=ocmYAnlVxm3QWnQoHJtBwtUdiu90MlAn')
.then(response => {
  return response.json()
})
.then(data => {
  console.log(data.response.docs[2].headline.main)
  console.log(data.response.docs[2].snippet)
})
.catch(err => {
  //Do something here if it errors out
})
