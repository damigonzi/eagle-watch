const mongoose = require('mongoose');

// Create data model
const exampleSchema = new mongoose.Schema({
  // Define your schema fields here
  'Stockticker': String,
  'Companyname': String,
  'Category': String,
  'Subcategory': String,
  'Businessoffering': String,
  'Calculatedrating': String,
  'Currentprice': String,
  'Marketcapital': Number,
  'Sharesoutstanding': Number,
  'Weekhigh': Number,
  '60dayrollingaverage': Number,
  'Todayvsrollingavg': Number,
  'Todayvs52weekhigh': Number,
  'Lastupdatetime': String
  // ...
});

// Load data from Mongodb collection into the data model
const ExampleModel = mongoose.model('stock', exampleSchema);

module.exports = ExampleModel;
