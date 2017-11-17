let Alexa = require('alexa-sdk');

let intentHandlers = {

    'HelloWorldIntent': function () {
        let responseSpeech = 'Hello Cogeco';

        let citySlot = this.event.request.intent.slots.city;
        if (citySlot && citySlot.value) {
            responseSpeech += ' from ' + citySlot.value + '.';

            if (citySlot.value === 'San Antonio') {
                responseSpeech += ' Go Spurs Go!';
            } else if (citySlot.value === 'Austin') {
                responseSpeech += ' Keep Austin weird!';
            }
        }

        this.emit(':tell', responseSpeech);
    }
};

exports.handler = function(event, context, callback){
    let alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(intentHandlers);
    alexa.execute();
};
