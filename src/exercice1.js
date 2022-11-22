// Exercise 1
// Show all names of valorant agents

const axios = require('axios')


async function getNameAgents()  {
  const agents = await axios.get('https://valorant-api.com/v1/agents')
  const agent = agents.data.data.map(item => item.displayName)
  console.log(agent)
  return agents;
}

getNameAgents()