// The BrowserHistory class will return an object with a set of methods on it
// that will allow you to traverse history or visit pages with text outputs.

class BrowserHistory {
    constructor(url, steps) {
        this.url = url;
        this.historyStore = [];
        this.currentUrl;
        this.currentIndex;
    }

    // visit accepts a url (string) which will take you to a url from your
    // current page. It should clear all history forward.
    visit(url) {
        this.historyStore.push(url);
        this.currentUrl = this.historyStore[this.historyStore.length - 1]; // gets last item in historyStore
        return `You are at ${this.currentUrl}`;
    }

    // back accepts steps (number) which will take you a number of steps back
    // in history, if steps exceeds the history size then return the the most steps
    // back possible
    back(steps) {
        this.currentIndex = this.historyStore.indexOf(this.currentUrl);
        // multiple items in history
        if (this.currentIndex > 0) {
            this.currentIndex = this.currentIndex - steps;
            this.currentUrl = this.historyStore[this.currentIndex];
            return `You are at ${this.currentUrl}`;
        } else {
            // only 1 item left in history
            return `You are at ${this.currentUrl}`;
        }
    }

    // forward accepts steps (number) which will take you a number of steps forward
    // in history, if steps exceeds the history size then return the the most steps
    // forward possible
    forward(steps) {
        this.currentIndex = this.historyStore.indexOf(this.currentUrl);
        // multiple items in history
        if (this.historyStore.length > 0) {
            this.currentIndex = this.currentIndex + steps;
            this.currentUrl = this.historyStore[this.currentIndex];
            // if you can't go any further forward,
            // set currentUrl to last item in historyStore
            if (this.currentUrl === undefined) {
                this.currentUrl = this.historyStore[this.historyStore.length - 1];
            }
            return `You are at ${this.currentUrl}`;
        } else {
            // only 1 item left in history
            return `You are at ${this.currentUrl}`;
        }
    }
};

module.exports = BrowserHistory;