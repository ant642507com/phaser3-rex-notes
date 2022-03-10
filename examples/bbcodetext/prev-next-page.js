import phaser from 'phaser/src/phaser.js';
import BBCodeTextPlugin from '../../plugins/bbcodetext-plugin.js';
import TextPage from '../../plugins/textpage.js'

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {}

    create() {
        var lines = [],
            txt;
        for (var i = 0; i < 50; i++) {
            if ((i % 4) === 0) {
                txt = `[color=yellow]${i}:yellow`;
            } else if ((i % 3) === 0) {
                txt = `[color=gray]${i}:gray`;
            } else {
                txt = `${i}`;
            }
            lines.push(txt);
        }

        var txt = this.add.rexBBCodeText(100, 100, '', {
            wordWrap: {
                width: 500
            },
            maxLines: 7
        });
        txt.page = new TextPage(txt, {
            //text: lines
        });
        txt.page.setText(lines);
        txt.page.showPage();

        this.input.keyboard.on('keydown-DOWN', txt.page.showNextPage, txt.page);
        this.input.keyboard.on('keydown-UP', txt.page.showPreviousPage, txt.page);


        var printPageIdx = function () {
            var page = txt.page;
            var s = page.pageIdx + "/" + page.pageCount
            if (page.isLastPage) {
                s += "-- last page"
            }
            console.log(s);
        }
        printPageIdx();
        this.input.keyboard.on('keydown-UP', printPageIdx);
        this.input.keyboard.on('keydown-DOWN', printPageIdx);
    }

    update() {}
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
            key: 'BBCodeTextPlugin',
            plugin: BBCodeTextPlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);