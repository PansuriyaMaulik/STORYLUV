const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db.js');

// Load config
dotenv.config({ path: './config/config.env' })

const app = express();

//connect db
connectDB()

//Logging configuration
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Handlebars configuration
app.engine('.hbs', exphbs({ defaultLayout: 'main' ,extname : '.hbs' }));
app.set('view engine', '.hbs');

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)); 