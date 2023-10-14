// routes/exampleRoute.js
const express = require('express');
const router = express.Router();
const StockModel = require('../models/stockModel');
const { Timestamp } = require('mongodb');

// Define a route to get all data from the database
router.get('/getSortedStocks', async (req, res) => {
  try {
    const data = await StockModel.find().sort({'Calculated Rating': 1});
    // console.log(data);
    res.json(data);
    console.log('api/getSortedStocks request recieved.')
  } catch (error) {
    console.error('Error getting data:', json(data));
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Define a route to get all data from the database
router.delete('/deleteAllStocks', async (req, res) => {
  try {
    await StockModel.deleteMany({});
    const respMess = res.json({message: "All data deleted :O"});
    console.log('api/deleteAllStocks request recieved...', respMess);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
