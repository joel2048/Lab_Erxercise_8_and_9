"use strict";
const axios = require('axios')

//get all
const getAnime = (req, res) => {
    axios.get(`https://kitsu.io/api/edge/anime`).then(data => {
        console.log(data.data); 
        res.status(200).json({ data: data.data }) 
    }).catch(err => {
        res.status(500).json({ data: err.message }) 
    })
}


// example: http://localhost:8000/api/anime/categories?value=romance
const getAnimeByFilter = (req, res) => {
    const { attribute } = req.params;

    const { value } = req.query;

    axios.get(`https://kitsu.io/api/edge/anime?filter[${attribute}]=${value}`).then(data => {
        console.log(data.data); 
        res.status(200).json({ data: data.data }) 
    }).catch(err => {
        res.status(500).json({ data: err.message }) 
    })
}

module.exports = {
    getAnime, getAnimeByFilter
}