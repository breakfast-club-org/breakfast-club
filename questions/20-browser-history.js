// The BrowserHistory class will return an object with a set of methods on it
// that will allow you to traverse history or visit pages with text outputs.

class BrowserHistory {
    constructor() {}

    // visit accepts a url (string) which will take you to a url from your
    // current page. It should clear all history forward.
    visit(url) {}

    // back accepts steps (number) which will take you a number of steps back
    // in history, if steps exceeds the history size then return the the most steps
    // back possible
    back(steps) {}

    // forward accepts steps (number) which will take you a number of steps forward
    // in history, if steps exceeds the history size then return the the most steps
    // forward possible
    forward(steps) {}
};

module.exports = BrowserHistory;
