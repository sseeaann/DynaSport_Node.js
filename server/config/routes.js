var mainController = require('../controllers/main_controller.js');

module.exports = function(app){
	app.get("/", function(req, res){
		res.render("index", { message: "undefined" });
	});
	app.post("/sendMsg", function(req, res){
		mainController.sendMsg(req, res);
	});
	app.get("/sentSuccess", function(req, res){
		req.flash("success", "A Dynasport associate will be in touch with you soon!");
		res.render("index", { message: req.flash("success") });
	});
};