// The BrowserHistory class will return an object with a set of methods on it
// that will allow you to traverse history or visit pages with text outputs.
const {min, max} = Math;

function log(url) {
    return 'You are at ' + url;
}

class BrowserHistory {
    constructor() {
        this.history = Array(10);
        this.top = this.current = -1;
    }

    // visit accepts a url (string) which will take you to a url from your
    // current page. It should clear all history forward.
    visit(url) {
        this.current += 1;
        this.history[this.current] = url;
        this.top = this.current;

        if (this.shouldExpand()) {
            this.history.length *= 2;
        }

        return log(url);
    }

    // back accepts steps (number) which will take you a number of steps back
    // in history, if steps exceeds the history size then return the the most steps
    // back possible
    back(steps) {
        this.current = max(0, this.current - steps);
        return log(this.history[this.current]);
    }

    // forward accepts steps (number) which will take you a number of steps forward
    // in history, if steps exceeds the history size then return the the most steps
    // forward possible
    forward(steps) {
        this.current = min(this.current + steps, this.top);
        return log(this.history[this.current]);
    }

    shouldExpand() {
        return this.top === this.length;
    }
};

module.exports = BrowserHistory;
