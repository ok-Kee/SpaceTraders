const agent = require('./agent');

async function fetchAgentInfo(bearerToken){
  const url = 'https://api.spacetraders.io/v2/my/agent';
  const options = {
    method: 'GET',
    headers: {Accept: 'application/json', Authorization: `Bearer ${bearerToken}`}
  }

  const response = await fetch(url, options)
  const jsonResponse = await response.json()
  const data = jsonResponse.data

  let userAgent = new agent(data.symbol, data.headquarters, data.credits, data.startingFaction, data.shipCount)

  return userAgent;

}

exports.fetchAgentInfo = fetchAgentInfo;
