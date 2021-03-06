import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/carRoutes';
import cors from 'cors';

const app = express();
const PORT = 4000;

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/carsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Body parser setup
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and Express running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);