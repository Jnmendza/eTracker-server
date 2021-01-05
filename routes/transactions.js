const express = require("express");
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactionController')

router
    .route('https://etracker-app.herokuapp.com')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('https://etracker-app.herokuapp.com/:id')
    .delete(deleteTransaction)

module.exports = router;