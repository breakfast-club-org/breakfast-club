// The BrowserHistory class will return an object with a set of methods on it
// that will allow you to traverse history or visit pages with text outputs.

class BrowserHistory {
    constructor() {
      this.history = []
      this.position = 0
    }

    // visit accepts a url (string) which will take you to a url from your
    // current page. It should clear all history forward.
    visit(url) {
      if (this.position < this.history.length - 1) {
        this.history.length = this.position

        const visitedPage = this.history.push(url)

        this.position++

        return `You are at ${this.history[this.position - 1]}`
      } else {
        const visitedPage = this.history.push(url)

        this.position++

        return `You are at ${this.history[this.position - 1]}`
      }
    }

    // back accepts steps (number) which will take you a number of steps back
    // in history, if steps exceeds the history size then return the the most steps
    // back possible
    back(steps) {
      this.position = this.position - steps

      if (this.position <= 0) {
        this.position = 0
        return `You are at ${this.history[0]}`
      }

      const newPosition = this.position

      return `You are at ${this.history[newPosition - 1]}`
    }

    // forward accepts steps (number) which will take you a number of steps forward
    // in history, if steps exceeds the history size then return the the most steps
    // forward possible
    forward(steps) {
      this.position = this.position + steps

      if (this.position >= this.history.length) {
        this.position = this.history.length
        return `You are at ${this.history[this.position - 1]}`
      }

      const newPosition = this.position

      return `You are at ${this.history[newPosition - 1]}`
    }
};

module.exports = BrowserHistory;