const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

//Define routes
app.use('/api/handlers', require('./routes/api/handlers'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/order', require('./routes/api/orders'));
app.use('/api/item', require('./routes/api/items'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Serever started on port ${PORT}`));
