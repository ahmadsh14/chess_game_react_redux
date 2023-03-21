export const getValidMoves = (pieceData, pieces) => {
    const validMoves = []
    const direction = pieceData.piece.color === "white" ? -1 : 1;
    const startingRow = pieceData.piece.color === "white" ? 6 : 1;
    const currentRow = pieceData.row;
    const currentCol = pieceData.col;

    const oneSquareAhead = pieces[currentRow + direction][currentCol];
    if (!oneSquareAhead) {
        validMoves.push([currentRow + direction, currentCol]);
    }

    if (currentRow === startingRow) {
        const twoSquaresAhead =
            pieces[currentRow + 2 * direction][currentCol];
        if (!twoSquaresAhead && !oneSquareAhead) {
            validMoves.push([currentRow + 2 * direction, currentCol]);
        }
    }

    const leftDiagonal = pieces[currentRow + direction][currentCol - 1];
    const rightDiagonal = pieces[currentRow + direction][currentCol + 1];
    if (leftDiagonal && leftDiagonal.color !== pieceData.piece.color) {
        validMoves.push([currentRow + direction, currentCol - 1]);
    }
    if (rightDiagonal && rightDiagonal.color !== pieceData.piece.color) {
        validMoves.push([currentRow + direction, currentCol + 1]);
    }
    return validMoves
}

export const getBishopMoves = (pieceData, pieces) => {
    const validMoves = [];
    const currentRow = pieceData.row;
    const currentCol = pieceData.col;
    // check diagonals
    let i, j;
    // top left
    for (i = currentRow - 1, j = currentCol - 1; i >= 0 && j >= 0; i--, j--) {
        if (pieces[i][j]) {
            if (pieces[i][j].color !== pieces[currentRow][currentCol].color) {
                validMoves.push([i, j]);
            }
            break;
        }
        validMoves.push([i, j]);
    }
    // top right
    for (i = currentRow - 1, j = currentCol + 1; i >= 0 && j < 8; i--, j++) {
        if (pieces[i][j]) {
            if (pieces[i][j].color !== pieces[currentRow][currentCol].color) {
                validMoves.push([i, j]);
            }
            break;
        }
        validMoves.push([i, j]);
    }
    // bottom left
    for (i = currentRow + 1, j = currentCol - 1; i < 8 && j >= 0; i++, j--) {
        if (pieces[i][j]) {
            if (pieces[i][j].color !== pieces[currentRow][currentCol].color) {
                validMoves.push([i, j]);
            }
            break;
        }
        validMoves.push([i, j]);
    }
    // bottom right
    for (i = currentRow + 1, j = currentCol + 1; i < 8 && j < 8; i++, j++) {
        if (pieces[i][j]) {
            if (pieces[i][j].color !== pieces[currentRow][currentCol].color) {
                validMoves.push([i, j]);
            }
            break;
        }
        validMoves.push([i, j]);
    }

    return validMoves;
}

