let express = require('express');
let router = express.Router();

//controllers
let searchController = loadController('search');

router.get('/search', searchController.index);

module.exports = router;