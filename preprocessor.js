var babel = require('babel');

module.exports = { 
    process: function(src, filename) { 
        if (filename.indexOf('node_modules') === -1 &&      // Ignore all files within node_modules
            filename.indexOf('CharacterToSounds') === -1 && // Ignore CharacterToSounds
            filename.indexOf('SoundToCharacters') === -1 && // Ignore SoundToCharacters
            babel.canCompile(filename)) {
            return babel.transform(src, { filename: filename }).code;
        }
        return src;
    }
};