# node-js

Javascript functions 

Arrow functions

Async Await

Functions (map, filter, find, reduce)

JSON

# Exercise 1

Show all names of valorant agents

# Exercise 2

# Get one agent
const axios = require('axios')


async function getNameAgents(name)  {
  const agents = await axios.get('https://valorant-api.com/v1/agents')
  const agent = agents.data.data.filter(item => item.displayName === name)
  console.log(agent)
  return agents;
  
}

getNameAgents("Fade");

# Exercise 3

acha o campeão que tenha a abilities "Boom Bot"