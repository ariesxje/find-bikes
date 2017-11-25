var api = {
  getStations(){
    var url = `https://data.melbourne.vic.gov.au/resource/qnjw-wgaj.json`;
    return fetch(url, {
      method: 'GET',
      header: 'X-App-Token'
    }).then((res) => res.json())
  }
};

module.exports = api;