require('dotenv').config()
const axios = require('axios');

const url = process.env.URL;  // Замените на ваш URL
const minutes = parseInt(process.env.INTERVAL_MINUTES)
const currentEnergy = parseInt(process.env.CURRENT_ENERGY)
const countTaps = parseInt(process.env.COUNT_TAPS)

console.log()
setInterval(() => {

  currentTime = new Date()

  const data = {
    // Ваши данные для отправки
      clientTime: Math.floor(currentTime/1000),
      currentEnergy: currentEnergy, //Заменить на максимальное кол-во энергии
      taps: countTaps, //Заменить на максимальное кол-во энергии
  }

  axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
      'Cookie': '_ym_uid=1729108581719886409; _ym_d=1729108581; _ym_isad=2; qlyuker=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1MDkyOTc4NzB9LCJpYXQiOjE3MjkxMDg2MDEsImV4cCI6MTcyOTExOTQwMX0.j7Nepq_lbbQqI1VL82S2cAm_2SaKvfLUb4YfsVYW42E; _ym_ucs=nodejs; _yasc=YFBWluw0PZ+I4U2MvVE2dhhBHD4hGh95FeRAUK78O1ZZQOt6Af51TispjJpIZ2jJ'
    }
  })
  .then(() => {
    console.log(currentTime, 'Запрос выполнен успешно');
  })
  .catch(error => {
    console.error('Ошибка запроса:', error.message);
  })
  
  
  console.log(currentTime, data)
  
}, minutes*60*1000) //Рассчитать с запасом, чтобы не запускался чаще, чем энергия наполняется до краев.
