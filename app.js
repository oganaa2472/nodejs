const fs = require('fs');
const express = require('express');

const app = express();

// middleware that can modify incoming request data
app.use(express.json());



const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/simple.json`));

app.get('/api/v1/tours/',(req, res) => {
    res.status(200).json({data: {
        tours:tours
    },
    results : tours.length,
    status: 'success'});
});

app.get('/api/v1/tours/:id',(req, res) => {
    const tour = tours.find(el => el.id === parseInt(req.params.id));
    res.status(200).json({data: {
        tour: tour
    },
    
    status: 'success'});
});
app.post('/api/v1/tours',(req, res) => {
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
})

const PORT = process.env.PORT || 3000;   

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
