const { getAllTours, createTour, getTour, updateTour, deleteTour,checkID,checkBody } = require('../controllers/tourController.js');
const express = require('express');
const tourRouter = express.Router();

// routes

tourRouter.param('id', checkID);

// create checkBody middleware


tourRouter.route('/')
    .get(getAllTours)
    .post(checkBody,createTour);

tourRouter.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

module.exports = tourRouter;