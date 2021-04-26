/**
 * Given the two methods recreate the functionality of both setInterval and clearInterval
 * Example usage:
 * const thing = budgetSetInterval(() => console.log('wow'), 5000 ) // should log 'wow' every 5 seconds
 * budgetClearInterval(thing) // should immediately end the logs
 */

//  function doStuff() {
//   console.log("hello!");
//   setTimeout(doStuff, 5000);
// }
// setTimeout(doStuff, 5000);

const countdown = 5000;

const budgetSetInterval = () => {
  console.log('wow');
  setTimeout(budgetSetInterval, countdown);
}

const budgetClearInterval = (cb) => {
  clearTimeout(cb)
}

/**
 * Turn it into a class! Get creative with it!
 * option 1: expose two methods
 * option 2: setInterval has the clearInterval method on it
 * option 3: can you think of anything else?
 */

class budgetInterval {
  constructor(){}

  budgetSetInterval(cb, countdown) {}
  budgetClearInterval(cb) {}
}

// module.exports = ___; // <- feel free to export whichever you want!

budgetSetInterval(budgetSetInterval, countdown);