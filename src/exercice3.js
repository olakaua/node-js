// Exercise 3
// acha o campeão que tenha a abilities "Boom Bot"


const axios = require('axios')


async function getInfoAgents(habilit)  {
  const agents = await axios.get('https://valorant-api.com/v1/agents')
  const agent = agents.data.data.find(item => {
    const abilitiesArray = item.abilities
    const fon = abilitiesArray.find(h => h.displayName === habilit)
    return !!fon
  })
  
  console.log(agent)
  return agents;
}

getInfoAgents("Boom Bot");