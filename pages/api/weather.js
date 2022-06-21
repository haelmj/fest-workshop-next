// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');

const API_KEY = process.env.API_KEY;

export default async function handler(req, res) {
  // make request to api service 
  let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${API_KEY}`)
  console.log(result.data)
  // return response from api service
  res.send(result.data);
}

