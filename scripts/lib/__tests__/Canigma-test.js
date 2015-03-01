jest.dontMock('../Canigma');
jest.dontMock('../SoundToCharacters');
jest.dontMock('../CharacterToSounds');

var Canigma = require('../Canigma');

describe('Canigma', () => {
    describe('#findSoundsByCharacter', () => {
        it('should return sounds of a character', () => {
            expect(Canigma.findSoundsByCharacter("啊")).toEqual(["aa1", "aa2", "aa3", "aa4", "haa2", "haa4"]);
            expect(Canigma.findSoundsByCharacter("易")).toEqual(["ji6", "jik6"]);
            expect(Canigma.findSoundsByCharacter("我")).toEqual(["ngo5"]);
        });
    });

    describe('#findCharactersBySound', () => {
        it('should return characters by a sound', () => {
            expect(Canigma.findCharactersBySound("ngo5").sort()).toEqual(["我", "猗"].sort());
            expect(Canigma.findCharactersBySound("bek3").sort()).toEqual(["壁"].sort());
            expect(Canigma.findCharactersBySound("biu6").sort()).toEqual(["票", "驃"].sort())
        });
    });

    describe('#findOtherCharactersWithSameSound', () => {
        it('should return other characters with same sound', () => {
            var characters = Canigma.findOtherCharactersWithSameSound("不", "bat1")
            expect(characters.sort()).toEqual([ "筆", "畢", "泌", "嗶", "甭", "潷", "蓽", "珌", "篳", "蹕", "吥", "彃", "滭", "縪", "觱", "罼", "鷝", "熚", "鏎", "驆"].sort());
        });
    });

    describe('#findCharactersWithSingleSound', () => {
        it('should return characters with single sound', () => {
            var characters = Canigma.findCharactersWithSingleSound(["伙", "顆", "棵", "夥", "吙", "鈥", "敤"]) 
            expect(characters.sort()).toEqual(["伙", "夥", "吙", "鈥"].sort());
        });
    });

    describe('#obfuscateString', () => {
        it('should return objects from input string', () => {
            var characters = Canigma.obfuscateString("不誠實");
            var c1 = characters[0]
            var c2 = characters[1]
            var c3 = characters[2]

            expect(c1.input).toEqual("不");
            expect(c1.sounds.sort()).toEqual(["bat1", "fau2"].sort());
            expect(c1.selectedSound).toEqual("bat1");
            expect(c1.sameSoundCharacters.length).toEqual(20);
            expect(c1.sameSoundCharactersWithSingleSound.length).toEqual(15);

            expect(c2.input).toEqual("誠");
            expect(c2.sounds).toEqual(["sing4"]);
            expect(c2.selectedSound).toEqual("sing4");
            expect(c2.sameSoundCharacters.length).toEqual(22);
            expect(c2.sameSoundCharactersWithSingleSound.length).toEqual(11);

            expect(c3.input).toEqual("實");
            expect(c3.sounds.sort()).toEqual(["sat6"].sort());
            expect(c3.selectedSound).toEqual("sat6");
            expect(c3.sameSoundCharacters.length).toEqual(2);
            expect(c3.sameSoundCharactersWithSingleSound.length).toEqual(0);
        });
    });
});