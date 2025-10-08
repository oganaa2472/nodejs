const fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/simple.json`));

const getAllTours =  (req, res) => {
    res.status(200).json({data: {
        tours:tours
    },
    results : tours.length,
    status: 'success'});
};
const createTour =  (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({id: newId}, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    });
}
const getTour =  (req, res) => {
if(req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    const tour = tours.find(el => el.id === parseInt(req.params.id));
    res.status(200).json({data: {
        tour: tour
    },
    
    status: 'success'});
}
const deleteTour =  (req, res) => {
    if(req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    res.status(204).json({
        status: 'success',
        data: null
    });
}
const updateTour =  (req, res) => {
    if(req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    });
}

const checkID =(req, res, next, val) => {
    console.log(`Tour id is: ${val}`);
    if(req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
}
const checkBody =(req, res, next) => {
   if(!req.body.name || !req.body.price) {
    return res.status(400).json({
        status: 'fail',
        message: 'Missing name or price'
    });
   }
   next();
  
}
module.exports = { getAllTours, createTour, getTour, updateTour, deleteTour ,checkID,checkBody};
// ...existing code...