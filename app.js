let express = require('express');
let path = require('path');

let indexRoute = require('./routes/index.js');
let loginRoute = require('./routes/login/login.js')

let app = express();

app.locals.isPresent = '';

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRoute);
app.use('/login', loginRoute);

app.listen(3000, function() {
	console.log("Its running");
});
