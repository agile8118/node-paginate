/**
 * This class is responsible for creating DOM elements.
 *
 * The El object has been formed into a class just to make it easier
 * to maintain and read the code. You can remove the class syntax and convert
 * it to es5 if you want but it will be more verbose. You can do that like this:
 *  First create the constructor function like so:
 *  function EL(elName) { this.el = document.createElement(elName); }
 *  Remember that a constructor function is just a function, nothing more.
 *  We just call it a constructor function and make the function name capitalized
 *  by convention because we need to call it later with the 'new' operator like this:
 *  new El('whatever').whatever()...;
 *  The new operator here will first create an empty object and then it will attach the
 *  function to that object so that the 'this' keyword will point to the right object and
 *  therefore we can do something like this: this.el = ...
 *  Without the new operator the 'this' keyword will NOT WORK AS WE WANT IT TO BE.
 *  Once the constructor function has been created we now need to add our methods on it like so:
 *  El.prototype.className = function (className) {
 *    this.el.setAttribute("class", className);
 *    return this;
 *  }
 *  Notice that we add the methods on the prototype of the object and not on the object.
 *  We do that because of the efficiency reasons. When we create a new function it will
 *  occupy a memory space, so whenever we are creating a new object we are creating each methods
 *  again for EACH one of those objects. But when we add the methods to the prototype, each El object
 *  can then reference those methods on the memory instead of having them on itself.
 *  Alright, after we added the methods on the prototype we just use the El function like before.
 *
 * -----
 * This design pattern that you see here is called the builder patter.
 */

export default class El {
  constructor(elName) {
    this.el = document.createElement(elName);
  }

  // Will set the class of the element
  className(className) {
    this.el.setAttribute("class", className);
    return this;
  }

  // Set the text of an element
  text(text) {
    this.el.appendChild(document.createTextNode(text));
    return this;
  }

  // Set the src attribute of an element
  src(src) {
    this.el.setAttribute("src", src);
    return this;
  }

  // Sets the disabled attribute of an element to false or true
  disabled(boolean) {
    if (boolean === true) {
      this.el.disabled = true;
    } else this.el.disabled = false;

    return this;
  }

  // Adds an onclick event listener to an element
  onClick(func) {
    this.el.addEventListener("click", func);
    return this;
  }

  // Append a DOM element to the element. We might call this function multiple times
  // to append different elements to the element.
  append(element) {
    if (element) this.el.appendChild(element);
    return this;
  }

  // At the end once we configured the element we call this which will
  // return the final DOM element
  build() {
    return this.el;
  }
}
