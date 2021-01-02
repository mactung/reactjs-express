var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})

router.get('/hello', ()=> {
    console.log('Hello from server');
})
router.post('/register-esl', (req, res)=> {
    console.log(req.body);    
})

module.exports = router