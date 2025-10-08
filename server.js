
const app = require('./app');
const PORT = process.env.PORT || 3000;   
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${PORT}`);
});
