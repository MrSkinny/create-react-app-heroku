const mongoose = require('mongoose');

const DB_NAME = process.env.DB_NAME || 'howdy-world';

mongoose.Promise = global.Promise;

const TEST_DB = process.env.NODE_ENV === 'test' ? `mongodb://localhost/${DB_NAME}-test` : null;
const DATABASE_URL = process.env.DATABASE_URL || TEST_DB || `mongodb://localhost/${DB_NAME}`;

mongoose.connect(DATABASE_URL);

module.exports = mongoose.connection;
