const express = require('express')
const path = require('path')
const port = 3000;
const app = express();
var cons = require('consolidate');

app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'html');

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index', params);
})

app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact', params);
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
