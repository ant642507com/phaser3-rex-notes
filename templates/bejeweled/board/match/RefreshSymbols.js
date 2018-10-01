// private callback of match
var RefreshSymbolsCallback = function (tileXY, board) {
    // TODO: Return null if not in valid area
    if (tileXY.y < (board.height / 2)) {
        return null;
    }
    var chess = board.tileXYZToChess(tileXY.x, tileXY.y, this.chessTileZ);
    if (chess == null) {
        return null;
    }
    return chess.getData('symbol');
};

// scope: Bejeweled.board
export default RefreshSymbolsCallback;