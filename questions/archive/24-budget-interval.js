/**
 * Given the two methods recreate the functionality of both setInterval and clearInterval
 * Example usage:
 * const thing = budgetSetInterval(() => console.log('wow'), 5000 ) // should log 'wow' every 5 seconds
 * budgetClearInterval(thing) // should immediately end the logs
 */
// const data = new Map();
//
// const budgetSetInterval = (cb, countdown, context, ...args) => {
//   const uuid = `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`;
//
//   const thing = () => {
//     data.set(uuid, setTimeout(thing, countdown));
//     cb.apply(context, args);
//   }
//
//   data.set(uuid, setTimeout(thing, countdown))
//
//   return uuid;
// }
//
// const budgetClearInterval = (cb) => {
//   clearTimeout(data.get(cb))
// }

/**
 * Turn it into a class! Get creative with it!
 * option 1: expose two methods
 * option 2: setInterval has the clearInterval method on it
 * option 3: can you think of anything else?
 */

class budgetInterval {
  constructor(){
    this.data = new Map();
  }

  budgetSetInterval(cb, countdown, that, ...args) {
    const uuid = `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`;

    const thing = () => {
      this.data.set(uuid, setTimeout(thing, countdown));
      cb.apply(that, args);
    }

    this.data.set(uuid, setTimeout(thing, countdown))

    return uuid;
  }

  budgetClearInterval(cb) {
    clearTimeout(data.get(cb))
  }
}

<<<<<<< HEAD

// budgetSetInterval(budgetSetInterval, countdown);

module.exports = budgetInterval;
=======
module.exports = budgetInterval; // <- feel free to export whichever you want!
>>>>>>> master
