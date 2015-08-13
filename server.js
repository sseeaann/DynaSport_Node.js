var express = require("express"),
	favicon = require("serve-favicon"),
	path = require("path"),
	bodyParser = require("body-parser"),
	mailer = require("express-mailer"),
	cookieParser = require("cookie-parser"),
	session = require("express-session"),
	flash = require("connect-flash"),
	app = express();

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

app.use(favicon(path.join(__dirname, './favicon.ico')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./client/static")));

app.use(cookieParser("moo man"));
app.use(session({
	cookie: { maxAge: 60000 },
	secret: "moo man"
}));
app.use(flash());

require("./server/config/routes.js")(app);

app.listen(6789, function(){
	console.log("Listening on port 6789");
});
