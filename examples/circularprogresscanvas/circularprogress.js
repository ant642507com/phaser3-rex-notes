import 'phaser';
import CircularProgressCanvasPlugin from '../../plugins/circularprogresscanvas-plugin.js';

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() { }

    create() {
        var progressBar = this.add.rexCircularProgressCanvas({
            x: 400, y: 300,
            radius: 50,

            trackColor: COLOR_DARK,
            barColor: COLOR_LIGHT,
            centerColor: COLOR_PRIMARY,

            // textColor: 0xffffff,
            textStrokeColor: 'red',
            textStrokeThickness: 3,
            textSize: '50px',
            textStyle: 'bold',
            textFormatCallback: function (value) {
                return Math.floor(value * 100).toString();
            },

            value: 0
        })

        progressBar
            .setEaseValueFunction('Cubic')
            .setEaseValueDuration(2000)
            .easeValueTo(0.75);
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
    plugins: {
        global: [{
            key: 'rexCircularProgressCanvas',
            plugin: CircularProgressCanvasPlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);