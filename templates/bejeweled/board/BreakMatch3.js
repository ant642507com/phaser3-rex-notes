/*
1. Pick each match3 line
2. Pick a random chess in this match3 line
3. Change symbol to a different value of all neighbors
*/

import RandomSymbol from '../chess/RandomSymobl.js';

const GetRandom = Phaser.Utils.Array.GetRandom;

var BreakMatch3 = function () {
    var tileZ = this.chessTileZ,
        scope = this.chessCallbackScope,
        symbols = this.candidateSymbols;

    this.getMatchLines(3, function (result, board) {
        // Pick a random chess in this match3 line
        var tileXY = GetRandom(result.tileXY);
        var chess = board.tileXYZToChess(tileXY.x, tileXY.y, tileZ);
        var neighborChess = board.getNeighborChess(chess, null);
        // collect symbols of all neighbors
        for (var i = 0, cnt = neighborChess.length; i < cnt; i++) {
            excluded.push(neighborChess[i].getData('symbol'));
        }
        var newSymbol = RandomSymbol(board, tileXY.x, tileXY.y, symbols, scope, excluded);
        if (newSymbol != null) {
            // Change symbol to a different value of all neighbors
            chess.setData('symbol', newSymbol);
        }
        excluded.length = 0;
    });
}

var excluded = [];
export default BreakMatch3;