const chessIcons = {
    king : '♚',
    queen : '♛',
    rook : '♜',
    knight : '♞',
    bishop : '♝',
    pawn : '♟️',
}

const chessPiecesHashMap = {
    0 : null, // empty cell
    1 : {'white|king' : chessIcons.king},
    2 : {'white|queen' : chessIcons.queen},
    3 : {'white|knight': chessIcons.knight},
    4 : {'white|bishop': chessIcons.bishop},
    5 : {'white|rook' : chessIcons.rook},
    6 : {'white|pawn' : chessIcons.pawn},
    7 : {'black|king' : chessIcons.king},
    8 : {'black|queen' : chessIcons.queen},
    9 : {'black|knight': chessIcons.knight},
    10 : {'black|bishop': chessIcons.bishop},
    11 : {'black|rook' : chessIcons.rook},
    12 : {'black|pawn' : chessIcons.pawn},
}




// given the two data structures above
// create a function called 'getPieceDetails' that takes a number argument
// and returns a details object of a certain chess piece with the following keys
// index, color, name, icon
// use destructuring assignment

// example:

// console.log( getPieceDetails(1) ); // output -->    { index: 1, color: 'white', name: 'king', icon: '♚' }
// console.log( getPieceDetails(0) ); // output an empty cell -->    { index: 0, color: null, name: null, icon: null }


// exceptions:
// - if the number 0 is passed to the function, all keys of the returned object
// will have a value of null, apart from the index key that will be 0
// - throw an error with the following message:
// `The function getPieceDetails expects a single integer between 0 and 12`
// if:
// - no value was passed to the function
// - the input provided is not a number
// - the number provided is not an integer
// - the integer is not is not a key of the hash map
// - the function was called with more then one input value


function getPieceDetails(num){
    const [obj] = Object.entries(chessPiecesHashMap[num]);
    const [colorName, icon] = obj;
    const [color, name] = colorName.split("|");

    if(num === 0){
        return {
            index: num,
            color: null,
            name: null,
            icon: null
        };
    } else if(typeof num === "undefined" ||
              !Number.isInteger(num) ||
              num < 0 && num > 12){
        throw new Error("The function getPieceDetails expects a single integer between 0 and 12");
    };
    
    return {
        index: num,
        color,
        name,
        icon
    };
};

const result = getPieceDetails(1);
console.log(result)