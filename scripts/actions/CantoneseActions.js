var Dispatcher = require('../dispatcher/Dispatcher')

function updateInput(text) {
    Dispatcher.dispatch(updateInput, {text: text})
}

module.exports = {
    updateInput: updateInput
}