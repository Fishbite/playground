console.log("min' it up here :¬P");

/*
Mixin – is a generic object-oriented programming term: a 
class that contains methods for other classes.

*/
let eventMixin = {
  /**
   * Subscribe to event, usage:
   *  menu.on('select', function(item) { ... }
   */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Cancel the subscription, usage:
   *  menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Generate an event with the given name and data
   *  this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return; // no handlers for that event name
    }

    // call the handlers
    this._eventHandlers[eventName].forEach((handler) =>
      handler.apply(this, args)
    );
  },
};

// make a class
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}

// add the mmixin with event related methods
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// add a handler to be called on selection
menu.on("select", (value) => alert(`Value selected: "${value}"`));
menu.choose("Arse");

/*
We can use mixins as a way to augment a class by adding 
multiple behaviors, like event-handling as we have seen 
above.

Mixins may become a point of conflict if they accidentally 
overwrite existing class methods. So generally one should 
think well about the naming methods of a mixin, to minimize 
the probability of that happening.
*/
