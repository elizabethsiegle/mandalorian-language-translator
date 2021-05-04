const superagent = require('superagent');
var apiurl="https://api.funtranslations.com/translate/mandalorian.json"
exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.MessagingResponse();
  const message = twiml.message(); 
  const msgToTranslate = event.Body.toLowerCase().trim();
  superagent.get(`${apiurl}?text=${msgToTranslate}`) 
  .set('X-Funtranslations-Api-Secret','61hlLrihjA2JI6nRzjyq5AeF')
  .end((err, res) => {
    message.body(`"${msgToTranslate}" in Mandalorian translates to "${res.body.contents.translated}". May the 4th be with you!`);
    message.media("https://cdn.pixabay.com/photo/2015/09/04/18/55/yoda-922520_1280.png")
    callback(null, twiml);
  })
    
  };
  
  

