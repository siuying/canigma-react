var EventEmitter = require('events').EventEmitter
var _ = require('lodash')

var Dispatcher = require('../dispatcher/Dispatcher')
var CantoneseActions = require('../actions/CantoneseActions')
var Canigma = require('../lib/Canigma')

var CHANGE_EVENT = 'change'
var _input = null
var _characters = null
var _output = ""
var _seed = Math.random()

function getRandomInt(min, max) {
  return Math.floor(_seed * (max - min)) + min;
}

function findRandomCharacters(characters, seed) {
    var index = getRandomInt(0, characters.length); 
    return characters[index];
}

function update(input) {
    _input = input
    _characters = Canigma.obfuscateString(input)
    _output = _.map(_characters, c => {
        if (c.sameSoundCharactersWithSingleSound.length > 0) {
            return c.sameSoundCharactersWithSingleSound[0]
        } else if (c.sameSoundCharacters.length > 0) {
            return c.sameSoundCharacters[0]
        } else {
            return c
        }
    })
    if (!_output) {
        _output = ""
    }
}

class CantoneseStore extends EventEmitter {
    static getInput() {
        return _input
    }

    static getOutput() {
        return _output
    }

    static emitChange() {
        super.emit(CHANGE_EVENT)
    }

    static addChangeListener(callback) {
        super.on(CHANGE_EVENT, callback)
    }

    static removeChangeListener(callback) {
        super.removeListener(CHANGE_EVENT, callback)
    }
}

Dispatcher.register((payload) => {
    var {data, action} = payload

    switch(action) {
        case CantoneseActions.updateInput:
            update(data.text)
            break

        default:
            console.warn("unknown action:", action)
    }

    CantoneseStore.emitChange()
})

module.exports = CantoneseStore;