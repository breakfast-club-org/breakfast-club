const { should } = require("chai");

/**
 * Given the two methods recreate the functionality of both setInterval and clearInterval
 * Example usage:
 * const thing = budgetSetInterval(() => console.log('wow'), 5000 ) // should log 'wow' every 5 seconds
 * budgetClearInterval(thing) // should immediately end the logs
 */
const budgetSetInterval = (cb, countdown) => {
  let targetTime = Date.now() + countdown;
  const handle = {};

  function run() {
    const now = Date.now();
    let shouldRun = false;

    if (targetTime >= now) {
      shouldRun = true;
    } else {
      countdown = targetTime - now;
      shouldRun = false;
    }

    targetTime = now + countdown;
    handle.id = setTimeout(run, countdown);
    if (shouldRun) {
      // in case cb needs to clear timer
      cb();
    }
  }


  handle.id = setTimeout(run, countdown);

  return handle;
}

const budgetClearInterval = (handle) => {
  clearTimeout(handle.id);
}

module.exports = {
  budgetSetInterval,
  budgetClearInterval
}
