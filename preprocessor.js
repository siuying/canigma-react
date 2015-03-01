var ReactTools = require('react-tools')
module.exports = { 
    process: function(src, filename) { 
        if (filename.indexOf('node_modules') === -1 &&      // Ignore all files within node_modules
            filename.indexOf('CharacterToSounds') === -1 && // Ignore CharacterToSounds
            filename.indexOf('SoundToCharacters') === -1 ) { // Ignore SoundToCharacters
            return ReactTools.transform(src, {harmony: true});
        }
        return src;
    }
};