
const express = require('express');
const morgan = require('morgan');
const app = express();

// routes
const tourRouter = require('./routes/tourRoutes.js');
const userRouter = require('./routes/userRoutes.js');
// middleware that can modify incoming request data
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// custom middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));// third party middleware
}


app.use((req, res, next) => {

    console.log('Hello from the middleware 👋')
    next();
})


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);


module.exports = app;


