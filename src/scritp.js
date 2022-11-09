const axios = require('axios')


async function getNameAgents(name)  {
  const agents = await axios.get('https://valorant-api.com/v1/agents')
  console.log(agents.data)
  return agents;
  
}

getNameAgents("Fate");
