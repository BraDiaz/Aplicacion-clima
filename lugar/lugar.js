const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUlr = encodeURI(direccion)

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedUlr}?json=1`,
        headers: { 'json': '1' }
    });

    const resp = await instance.get();

    if (resp.data.error == false) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const datta = resp.data;
    const standard = datta.standard;
    const sitio = `${standard.city}, ${standard.countryname}`;
    const lat = datta.latt;
    const lng = datta.longt;


    return {
        sitio,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}