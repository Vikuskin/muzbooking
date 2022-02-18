const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport')
const keys = require('./config/keys');
const port = process.env.PORT || 5000;
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const accountRoutes = require('./routes/account')

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
mongoose
    .connect(keys.mongoURI)
    .then(() => console.log('mongo connect'))
    .catch((e) => console.log(e));

app.use(passport.initialize())
require('./middleware/passport')(passport)



app.use('/login', loginRoutes);
app.use('/registration', registerRoutes);
app.use('/account', accountRoutes)
app.listen(port, () => console.log(port));
module.exports = app;
