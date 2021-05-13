import AppendCommandBase from '../../dynamictext/methods/AppendCommand.js';

const GetValue = Phaser.Utils.Objects.GetValue;

var OnParseSoundEffectTag = function (textPlayer, parser, config) {
    var tagName = GetValue(config, 'tags.se', 'se');
    parser
        .on(`+${tagName}`, function (name) {
            AppendCommand(textPlayer, name);
            parser.skipEvent();
        })
        .on(`-${tagName}`, function () {
            parser.skipEvent();
        })
}

var PlaySoundEffect = function (name) {
    this.soundEffect = this.scene.sound.add(name);  // this: textPlayer
    this.soundEffect.once('complete', function () {
        this.soundEffect.destroy();
        this.soundEffect = undefined;
    }, this)
        .play();
}

var AppendCommand = function (textPlayer, name) {
    AppendCommandBase.call(textPlayer,
        'se',                     // name
        PlaySoundEffect,          // callback
        name,                     // params
        textPlayer,               // scope
    );
}

export default OnParseSoundEffectTag;