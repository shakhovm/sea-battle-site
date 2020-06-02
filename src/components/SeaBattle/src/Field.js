
export default class Field {

    constructor() {
        this.field =new Array(10).fill()
            .map( el => (new Array(10).fill("*")));
        this.shipCounter = 0;
    }

    get getField() {
        return this.field;
    }

    shoot(row, col) {
        if (row < 0 || col < 0 || row >= 10 || col >= 10) {
            return -1;
        }
        if (this.field[row][col] === "O") {
            this.field[row][col] = "X";
            if( ++this.shipCounter === 20) return 2;

            return 1;
        } else if (this.field[row][col] === "*") {
            this.field[row][col] = "-";
            return 0;
        }
        return -1;
    }

    makeRandomShoot() {
        let possiblePositions = [];
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                if (this.field[i][j] !== "X")
                    possiblePositions.push([i, j]);
            }
        }
        if (possiblePositions.length === 0) {
            throw DOMException;
        }
        let index = Math.floor(Math.random() * Math.floor(possiblePositions.length));
        return this.shoot(possiblePositions[index][0], possiblePositions[index][1]);

    }

    check(row, col) {
        for (let i = -1 ; i < 2; ++i) {
            if (row + i < 0 || row + i >= 10)
                continue;
            for (let j = -1; j < 2; ++j) {
                if (col + j < 0 || col + j >= 10)
                    continue;

                if (this.field[row + i][col + j] === 'O')
                    return false;
            }
        }
        return true;
    }

    generateField(shipSize) {
        let possible_positions = [];

        for (let row = 0; row < 10; ++row) {
            for (let col = 0; col < 10; ++col) {
                let ship_vertical = [];

                for (let i = row; i < row + shipSize; ++i) {
                    if (i >= 10 || !this.check(i, col)) {
                        break;
                    }
                    ship_vertical.push([i, col])
                }

                if (ship_vertical.length === shipSize)
                    possible_positions.push(ship_vertical);

                let ship_horizontal = [];

                for (let i = col; i < col + shipSize; ++i) {
                    if (i >= 10 || !this.check(row, i)) {
                        break;
                    }
                    ship_horizontal.push([row, i])
                }
                if (ship_horizontal.length === shipSize)
                    possible_positions.push(ship_horizontal);

            }
        }
        let index = Math.floor(Math.random() * Math.floor(shipSize));

        let positions = possible_positions[index];

        for (let position of positions) {

            this.field[position[0]][position[1]] = 'O';

        }

    }

    createField() {
        const sizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
        for (let size of sizes) {
            this.generateField(size);
        }
        return this;
    }

    copy() {
        let newField = new Field();
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                newField.getField[i][j] = this.field[i][j];
            }
        }
        return newField;
    }
}