const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/indexRouter');
//settings

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: false}))
//middleware

//routes
app.use(indexRouter);

//start the server

app.listen(app.get('port'), () => {
    console.log('server listen on port:', app.get('port'));
})