const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=63f30582b161c5b938fb163f33092414&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}