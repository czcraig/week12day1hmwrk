const PubSub = require(`../helpers/pub_sub.js`)
const ResultView = function () {

}

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector(`#result`);
  resultElement.textContent = `you have typed ${result} words`;

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe(`WordCounter:results`, (event) => {
    const wordCount = event.detail;
    this.updateView(wordCount);
  });
};

module.exports = ResultView;
