module.exports = (function(app){
	return {
		sendMsg: function(req, res){
			console.log("POST DATA: ", req.body);
			var senderName = req.body.msgName,
				senderEmail = req.body.msgEmail,
				senderPhone = req.body.msgPhone,
				senderMsg = req.body.msgMessage,
				nodemailer = require("nodemailer");

			var transporter = nodemailer.createTransport({
				service: "gmail",
				auth: {
					user: "gmail.user@gmail.com", // replace with actual email account address
					pass: "userpass" // replace with actual email account pass
				}
			});

			var mailOptions = {
				from: senderName+" "+senderEmail,
				to: "cs@dynasportllc.com",
				subject: "Inquery from DynaSport Website",
				text: "Name: "+senderName+"\nEmail: "+senderEmail+"\nPhone: "+senderPhone+"\n\nMessage: "+senderMsg
			};

			transporter.sendMail(mailOptions, function(err, info){
				if(err){
					console.log("ERR ERR" + err);
				} else {
					console.log("Msg sent: " + info.response);
					res.redirect("/sentSuccess");
				}
			});
		}
	}
})();