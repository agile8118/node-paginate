/**
 * The object that we'll use to work with Date objects.
 *
 * The Moment object has been formed into a class just to make it easier
 * to read the code. You could just as easily remove the class syntax and instead
 * just create a Moment object and add the methods to it afterwards like so:
 * const Moment = {};
 * Moment.timeSince = (date) => {...}
 * And then just export the object:
 * export default Moment;
 *
 * As of now this Moment object has only one method called 'timeSince' which is
 * responsible for calculating how old a date object is.
 *
 * ---
 * If you have used the date libraries like 'moment.js' you might notice
 * that this object works in a similar way.
 */

class Moment {
  /**
   * Calculates how old a Date object is.
   * @param {Date} date the object that we need to find out how old it is.
   * @returns {string} will say since when the date object is for, if it reaches
   * years it will say 'X years ago', if it doesn't reach years but months it'll say
   * 'X months ago', similarly 'X days ago', 'X hours ago', or 'Just now'.
   */
  timeSince(date) {
    // First find out how old is the object and then divide that
    // by 1000 milliseconds to get the total seconds
    const seconds = Math.floor((new Date() - date) / 1000);

    // 31536000 second is 1 year.
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return interval + " years ago";

    // 2592000 second is 1 month.
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + " months ago";

    // 86400 second is 1 day.
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return interval + " days ago";

    // 3600 second is 1 hour.
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + " hours ago";

    // 60 second is 1 minute.
    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + " minutes ago";

    // If the difference is less than two minutes just return 'Just now'.
    return "Just now";
  }
}

export default new Moment();
