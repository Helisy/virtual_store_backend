require('dotenv').config();

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(400).json(
        {
            method: "GET",
            error: false,
            code: 400,
            message: "API version 1.0.0.",
            data: [],
        }
    );
});

const authRouter = require('./auth');
router.use("/auth", authRouter);


module.exports = router;