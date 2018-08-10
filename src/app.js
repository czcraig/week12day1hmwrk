const InputView = require(`./views/input_view.js`);
const ResultView = require(`./views/result_view.js`);
const WordCounter = require(`./models/word_counter.js`);



document.addEventListener('DOMContentLoaded', () => {
   const inputView = new InputView();
   inputView.bindEvents();

   const wordcounter = new WordCounter();
   wordcounter.bindEvents();

   const resultView = new ResultView();
   resultView.bindEvents();
});
