const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const countryRouter = require('./routers/country');
const cityRouter = require('./routers/city');
const placeRouter = require('./routers/place');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/country', countryRouter);
app.use('/city', cityRouter);
app.use('/place', placeRouter);

app.listen(3333, () => {
  console.log('server is running');
});