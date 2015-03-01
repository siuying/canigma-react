var _ = require('lodash');
var SoundToCharacters = require('./SoundToCharacters');
var CharacterToSounds = require('./CharacterToSounds');

function getRandomInt(min, max) {
  return Math.floor(_seed * (max - min)) + min;
}

function findRandomCharacters(characters, seed) {
    var index = getRandomInt(0, characters.length); 
    return characters[index];
};

class Canigma {
    // find sounds by character
    static findSoundsByCharacter(character) {
        return CharacterToSounds[character];
    }

    // find characters by sound
    static findCharactersBySound(sound) {
        return SoundToCharacters[sound];
    }

    // find characters with same sound, except itself
    static findOtherCharactersWithSameSound(originalCharacter, sound) {
        var characters = Canigma.findCharactersBySound(sound);
        return _.reject(characters, char => { return char === originalCharacter});
    }

    // find characters with single sound
    static findCharactersWithSingleSound(characters) {
        return _.select(characters, char => { 
            return Canigma.findSoundsByCharacter(char).length == 1;
        });
    }

    static obfuscateString(string) {
        var inputCharacters = string.split("");
        var characters = _.map(inputCharacters, originalCharacter => {
            var sounds = Canigma.findSoundsByCharacter(originalCharacter);
            if (sounds) {
                var selectedSound = sounds[0];
                var sameSoundCharacters = Canigma.findOtherCharactersWithSameSound(originalCharacter, selectedSound);
                var sameSoundCharactersWithSingleSound = Canigma.findCharactersWithSingleSound(sameSoundCharacters);

                return {
                    input: originalCharacter,
                    sounds: sounds,
                    selectedSound: selectedSound,
                    sameSoundCharacters: sameSoundCharacters,
                    sameSoundCharactersWithSingleSound: sameSoundCharactersWithSingleSound
                }                
            } else {
                return {
                    input: originalCharacter,
                    sounds: null,
                    selectedSound: null,
                    sameSoundCharacters: [],
                    sameSoundCharactersWithSingleSound: []
                }
            }
        });
        return characters;
    }
}

module.exports = Canigma;