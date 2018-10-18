const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const debug = require('debug')('assignment:server');
const validator = require('express-validator');

const urlsRouter = require('./routes/urls');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(logger('dev'));
app.use(validator());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/urls', urlsRouter);

app.listen(port, () => {
  debug('Listening on port ' + port);
});
