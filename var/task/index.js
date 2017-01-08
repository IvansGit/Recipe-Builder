process.env.NODE_CONFIG_DIR = process.env["LAMBDA_TASK_ROOT"];

'use strict';
const aws = require('./node_modules/aws-sdk/lib/aws');
const Alexa = require('./node_modules/alexa-sdk/lib/alexa');
//const recipes = require('./recipes');

const handlers = {
	'TestIntent': function () {
		var speechOutput = "This is a test intent";
		this.emit(';tell', speechOutput);
	}
	
};

exports.handler = function (event, context) {
	var alexa = Alexa.handler(event, context);
    alexa.appId = "amzn1.echo-sdk-ams.app.APP_ID";
    alexa.registerHandlers(handlers);
    alexa.execute();
};