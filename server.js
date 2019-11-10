require('dotenv').config();

const express = require('express');

const ZipCodes = require('./dbHelpers');

const port = process.env.PORT || 5000;

const server = express();

server.listen(port, () => {
    console.log(`\n ### SERVER RUNNING ON PORT:${port} ### \n`)
})

server.use(express.json());

server.get('/api', (req, res) => {
    ZipCodes.find()
    .then(zips => {
        res.json(zips);
    })
    .catch(err => {
        res.status(500).json({err: 'Failed to get zips'})
    })
});

server.get('/api/zips/:zip', (req, res) => {
    const { zip } = req.params;

    ZipCodes.findByZip(zip)
        .then(result => {
            if (result) {
                res.json(result);
            } else {
                res.status(404).json({err: 'Invalid Zip'})
            }
        })
        .catch(err => {
            res.status(500).json({err: "Failed to get zip"})
        })
})

server.get('/api/city/:city', (req, res) => {
    const { city } = req.params;

    ZipCodes.findByCity(city)
        .then(result => {
            if (result) {
                res.json(result)
            } else {
                res.status(404).json({err: 'City not found'})
            }
        })
        .catch(err => {
            res.status(500).json({err: 'Unable to find city'})
        })
})


server.post('/api', (req, res) => {
    const city = req.body;
    console.log(city)
    ZipCodes.add(city)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Error adding city'})
        })
})

server.delete('/api/:id', (req, res) => {
    const { id } = req.params;

    ZipCodes.deleteID(id)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: "Error deleting city"})
        })
})