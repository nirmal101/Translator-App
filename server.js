const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));
