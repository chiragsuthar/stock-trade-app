// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample data to store trades
let trades = [];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to create a new trade
app.post('/trades', (req, res) => {
    const trade = req.body;
    const newTrade = {
        id: trades.length + 1,
        ...trade
    };
    trades.push(newTrade);
    res.status(201).json(newTrade);
});

// Route to get all trades or trades filtered by type and user_id
app.get('/trades', (req, res) => {
    const { type, user_id } = req.query;
    let filteredTrades = trades;
    if (type) {
        filteredTrades = filteredTrades.filter(trade => trade.type === type);
    }
    if (user_id) {
        filteredTrades = filteredTrades.filter(trade => trade.user_id === parseInt(user_id));
    }
    res.status(200).json(filteredTrades);
});

// Route to get a trade by id
app.get('/trades/:id', (req, res) => {
    const { id } = req.params;
    const trade = trades.find(trade => trade.id === parseInt(id));
    if (trade) {
        res.status(200).json(trade);
    } else {
        res.status(404).send('ID not found');
    }
});

// Routes to handle DELETE, PUT, PATCH requests (not allowed)
app.delete('/trades/:id', (req, res) => {
    res.status(405).send('Method Not Allowed');
});

app.put('/trades/:id', (req, res) => {
    res.status(405).send('Method Not Allowed');
});

app.patch('/trades/:id', (req, res) => {
    res.status(405).send('Method Not Allowed');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
