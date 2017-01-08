var AlexaLambdaHandler = require('./node_modules/alexa-sdk/lib/alexa');

module.exports.handler = AlexaLambdaHandler.LambdaHandler;
module.exports.CreateStateHandler = AlexaLambdaHandler.CreateStateHandler;
module.exports.StateString = AlexaLambdaHandler.StateString;

'use strict';
var aws = require('./node_modules/aws-sdk');
var Alexa = require('./node_modules/alexa-sdk');


var handlers = {
	'LaunchRequest': function () {
		var speechOutput = "Welcome to Recipe Builder. What can I help you with?";
		var repromptOutput = "What can I help you with?";
		this.emit(':ask', speechOutput, repromptOutput);
	},
	'Unhandled': function() {

        this.emit(':ask', 'Sorry, I didn\'t get that.');

    },
	
	'HelpIntent': function () {
		var speechOutput = "You can ask me 'What can I cook'";
		var speechOutput2 = "or 'What do I have'";
		this.emit(':ask', speechOutput, speechOutput2);
	},
	
	'TestIntent': function () {
		var speechOutput = "Sorry I can't understand";
        this.emit(':ask', speechOutput);
    },
	
	
	'MyIngredientIntent': function (){
		if(this.event.request.intent.slots.ingredient.value == "chicken"){
			var speechOutput = 'You can cook Rosemary Chicken';
			var imageObj = {
				largeImageUrl: 'https://i.imgur.com/uicDl7p.jpg'
			};
			this.emit(':askWithCard', speechOutput, "", "Rosemary Chicken", "2 1/2 pounds of boneless, skinless chicken breasts\n6 garlic cloves\n3 tablespoons of fresh rosemary leaves\n3 tablespoons of extra-virgin olive oil\n1 lemon\n1 tablespoon of grill seasoning blend OR salt and black pepper\n1/2 cup of dry white wine or chicken broth", imageObj);
			MyIngredientIntentTwo.event.request.intent.slots.rcp_two.value = "Rosemary Chicken";
		}
		else if(this.event.request.intent.slots.ingredient.value == "rice"){
			var speechOutput = 'You can cook Fried Rice';
			var imageObj = {
				largeImageUrl: 'https://i.imgur.com/ifDuV77.jpg'
			};
			this.emit(':askWithCard', speechOutput, "", "Fried Rice", "1/3 cup of vegetable oil\n1/3 pound of Black Forest ham, diced OR 2 cups of cooked or shredded meat\n1 onion, diced\nSalt and pepper (to taste)\n3 garlic cloves\n2 pinch piece of ginger\n3 whole scallions\n1 1/3 cups medley of frozen corn/peas/carrots\n4 large eggs, lightly beaten\n4 cups of rice", imageObj);
			MyIngredientIntentTwo.event.request.intent.slots.rcp_two.value = "Fried Rice";
		}
		else if(this.event.request.intent.slots.ingredient.value == "potato"){
			var speechOutput = 'You can cook Mashed Potato';
			var imageObj = {
				largeImageUrl: 'https://i.imgur.com/ATRRvZO.jpg'
			};
			this.emit(':askWithCard', speechOutput, "", "Mashed Potato", "4 pounds of potatoes\n1 bay leaf\nSalt and pepper (to taste)\n2 cups of heavy cream\n3 tablespoons of unsalted butter\n2 tablespoons of chopped chives", imageObj);
			MyIngredientIntentTwo.event.request.intent.slots.rcp_two.value = "Mashed Potato";
		}
		else if(this.event.request.intent.slots.ingredient.value == "egg"){
			var speechOutput = 'You can cook Sunny Side up Eggs';
			var imageObj = {
				largeImageUrl: 'https://i.imgur.com/W9bmoyn.jpg'
			};
			this.emit(':askWithCard', speechOutput, "", "Sunny Side up Eggs", "Salt and pepper (to taste)\n1 tablespoon of olive oil\nEggs", imageObj);
			MyIngredientIntentTwo.event.request.intent.slots.rcp_two.value = "Sunny Side up Eggs";
		}
		else{
			var speechOutput = 'Sorry, please try again with another ingredient';
			this.emit(':ask', speechOutput);
		}
	},
	'MyIngredientIntentTwo': function (){
		if((this.event.request.intent.slots.ing_one.value == "chicken" || this.event.request.intent.slots.ing_two.value == "chicken")&&(this.event.request.intent.slots.ing_one.value == "rice" || this.event.request.intent.slots.ing_two.value == "rice")){
			var speechOutput = 'You can cook Chicken Rice';
			var imageObj = {
				largeImageUrl: 'https://i.imgur.com/zGVRyK3.jpg'
			};
			this.emit(':askWithCard', speechOutput, "", "Chicken Rice", "1/3 cup of vegetable oil\n2 cups of cooked or shredded chicken\n1 onion, diced\nSalt and pepper (to taste)\n3 garlic cloves\n2 -inch piece of ginger\n3 whole scallions \n1 1/3 cups medley of frozen corn/peas/carrots\n4 large eggs, lightly beaten\n4 cups of rice", imageObj);
			this.event.request.intent.slots.rcp_two.value = "Chicken Rice";
		}
		else if((this.event.request.intent.slots.ing_one.value == "bacon" || this.event.request.intent.slots.ing_two.value == "bacon")&&(this.event.request.intent.slots.ing_one.value == "egg" || this.event.request.intent.slots.ing_two.value == "egg")){
			var speechOutput = 'You can cook Bacon and Fried Eggs';
			var imageObj = {
				largeImageUrl: 'https://i.imgur.com/NGKDree.jpg'
			};
			this.emit(':askWithCard', speechOutput, "", "Bacon and Fried Eggs", "Bacon\nEggs\nSalt and pepper (to taste)", imageObj);
			this.event.request.intent.slots.rcp_two.value = "Bacon and Fried Eggs";
		}
		else if((this.event.request.intent.slots.ing_one.value == "spaghetti" || this.event.request.intent.slots.ing_two.value == "spaghetti")&&(this.event.request.intent.slots.ing_one.value == "bacon" || this.event.request.intent.slots.ing_two.value == "bacon")){
			var speechOutput = 'You can cook Spaghetti with Bacon Bits';
			var imageObj = {
				largeImageUrl: 'https://i.imgur.com/AHPZADH.jpg'
			};
			this.emit(':askWithCard', speechOutput, "", "Spaghetti with Bacon Bits", "Spaghetti\nBacon bits OR chopped up bacon strips\nBlack pepper (to taste)\n1 egg\n4 tablespoons of grated parmesan", imageObj);
			this.event.request.intent.slots.rcp_two.value = "Spaghetti with Bacon Bits";
		}
		else if((this.event.request.intent.slots.ing_one.value == "potato" || this.event.request.intent.slots.ing_two.value == "potato")&&(this.event.request.intent.slots.ing_one.value == "chicken" || this.event.request.intent.slots.ing_two.value == "chicken")){
			var speechOutput = 'You can cook Baked Potato with Roasted Chicken';
			var imageObj = {
				largeImageUrl: 'https://i.imgur.com/YNzZTBn.jpg'
			};
			this.emit(':askWithCard', speechOutput, "", "Baked Potato with Roasted Chicken", "1 Potato\n1 teaspoon of olive oil\nSalt and pepper (to taste)\n2 teaspoons of butter\n1/4 cup of shredded cheddar cheese\nOnion powder (to taste)\nEntire chicken OR chicken breasts\n1 stalk of celery, leaves removed", imageObj);
			this.event.request.intent.slots.rcp_two.value = "Baked Potato with Roasted Chicken";
		}
		else if((this.event.request.intent.slots.ing_one.value == "rice" || this.event.request.intent.slots.ing_two.value == "rice")&&(this.event.request.intent.slots.ing_one.value == "egg" || this.event.request.intent.slots.ing_two.value == "egg")){
			var speechOutput = 'You can cook Fried Rice with Eggs';
			var imageObj = {
				largeImageUrl: 'https://i.imgur.com/KesUR3z.jpg'
			};
			this.emit(':askWithCard', speechOutput, "", "Fried Rice with Eggs", "1/3 cup of vegetable oil\n1 onion, diced\nSalt and pepper (to taste)\n3 garlic cloves\n2 pinch piece of ginger\n3 whole scallions\n1 1/3 cups medley of frozen corn/peas/carrots\n4 large eggs, lightly beaten\n4 cups of rice\nSoy sauce (to taste)", imageObj);
			this.event.request.intent.slots.rcp_two.value = "Fried Rice with Eggs";
		}
		else if((this.event.request.intent.slots.ing_one.value == "chicken" || this.event.request.intent.slots.ing_two.value == "chicken")&&(this.event.request.intent.slots.ing_one.value == "bacon" || this.event.request.intent.slots.ing_two.value == "bacon")){
			var speechOutput = 'You can cook Roasted Chicken and Bacon Bits';
			var imageObj = {
				largeImageUrl: 'https://i.imgur.com/yzP33qf.jpg'
			};
			this.emit(':askWithCard', speechOutput, "", "Roasted Chicken and Bacon Bits", "Onion powder (to taste)\nEntire chicken OR chicken breasts\n1 stalk of celery, leaves removed\nSalt and pepper (to taste)\nBacon bits OR chopped up bacon strips", imageObj);
			this.event.request.intent.slots.rcp_two.value = "Roasted Chicken with Bacon Bits";
		}
		else{
			var speechOutput = 'Sorry, please try again with another ingredient';
			this.emit(':ask', speechOutput);
		}
	},
	'VeganIntent': function () {
		var speechOutput = "Good for you!";
		this.emit(':ask', speechOutput);
	},
	'ByeByeIntent': function () {
		var speechOutput = "Goodbye!";
		this.emit(':tell', speechOutput);
	},
	'NoFoodIntent': function () {
		var speechOutput = "Go buy some food. Bye!";
		this.emit(':tell', speechOutput);
	}
	
	
	
};

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
	alexa.registerHandlers(handlers);
	alexa.execute();
};