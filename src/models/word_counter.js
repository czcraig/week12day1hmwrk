const PubSub = require(`../helpers/pub_sub.js`)
const WordCounter = function(){

};

WordCounter.prototype.countWords = function (text) {
  const words = text.split(` `);
  return words.length
};


WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe(`InputView:text-inputted`, (event) => {
    const inputtedText = event.detail
    console.log(event);
    const result = this.countWords(inputtedText);
    PubSub.publish(`WordCounter:results`, result);
  });
}




module.exports = WordCounter;
