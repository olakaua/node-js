const axios = require('axios')


async function getNameAgents(name)  {
  const agents = await axios.get('https://valorant-api.com/v1/agents')
  const agent = agents.data.data.filter(item => item.displayName === "Boom Bot")
  console.log(agent)
  return agents;
  
}

getNameAgents("Boom Bot");