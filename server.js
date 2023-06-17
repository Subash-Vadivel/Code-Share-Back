const app = require('./app');
const morgan = require('morgan');
const dotenv = require('dotenv');
app.use(morgan('dev'));

dotenv.config({ path: './config.env' });
const port = process.env.port || 2000;
const server = app.listen(port, () => {
    console.log(`App running on the port ${port}`);

})

