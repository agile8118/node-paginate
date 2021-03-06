/**
 * The object that we'll use for our requests.
 *
 * The Request object has been formed into a class just to make it easier
 * to read the code. You could just as easily remove the class syntax and instead
 * just create a Request object and add the methods to it afterwards like so:
 * const Request = {};
 * Request.get = (url) => {...}
 * And then just export the object:
 * export default Request;
 *
 * As of now this Request object has only one method called 'get' which is
 * responsible for sending get requests.
 *
 * ---
 * If you have used http request packages like axios, you might notice
 * that this object works in a similar way.
 *
 * @TODO If you want to use this object in your projects make sure
 * to add other methods needed for it like the POST, PATCH, DELETE... requests.
 * Those will be very similar to the get function that we have right now but you also
 * need to pass an object for them along with the url parameter to send.
 */

class Request {
  /**
   * Sends a get request
   * @param {string} url what the request will be sent to.
   * @returns {promise} will be resolved with the response property that
   * we'll have after the xml ajax request has been successful.
   */
  get(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open("GET", url);
      req.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(JSON.parse(req.response));
        } else {
          reject({
            status: this.status,
            statusText: req.statusText,
          });
        }
      };
      req.onerror = function () {
        reject({
          status: this.status,
          statusText: req.statusText,
        });
      };
      req.send();
    });
  }
}

export default new Request();
