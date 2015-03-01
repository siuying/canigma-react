var Dispatcher = require('flux').Dispatcher;

class AppDispatcher extends Dispatcher {
    dispatch(action: Function, data: Object) {
        super.dispatch({action, data})
    }
}

module.exports = new AppDispatcher()