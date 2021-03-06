window.customElements.define('my-cat-component', class MyCatComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
        const template = this.getCatTemplate(3);
        this.shadowRoot.appendChild(template);
        let matrix = [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 1]
        ];
        let player = 1;
        this.play(matrix, player);
    }
    getCatTemplate(size) {
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
            :host{
                display:block;
            }           
        </style>
        <div class="grid">
          
        </div>
        `;
        return template.content.cloneNode(true);
    }

    play(matrix, player) {
        const findHorizontal = (matrix, player) => {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix.length; col++) {
                    console.log('Col: ' + col, 'Row: ' + row, 'Matrix: ' + matrix[row][col]);
                    if (matrix[row][col] !== player) {
                        console.log('sali');
                        break;
                    }
                    if (col === matrix.length - 1 && matrix[row][col] === player) {
                        return true;
                    }
                }
            }
            return false;
        };
        const findVertical = (matrix, player) => {
            for (let col = 0; col < matrix.length; col++) {
                for (let row = 0; row < matrix.length; row++) {
                    console.log('Col: ' + col, 'Row: ' + row, 'Matrix: ' + matrix[row][col]);
                    if (matrix[row][col] !== player) {
                        console.log('sali');
                        break;
                    }
                    if (row === matrix.length - 1 && matrix[row][col] === player) {
                        return true;
                    }
                }
            }
            return false;
        };

        const findLeftDiagonal = (matrix, player) => {
            for (let row = 0, col = 0; row < matrix.length; row++, col++) {
                console.log('Col: ' + col, 'Row: ' + row, 'Matrix: ' + matrix[row][col]);
                if (matrix[row][col] !== player) {
                    console.log('sali');
                    break;
                }
                if (col === matrix.length - 1 && matrix[row][col] === player) {
                    return true;
                }
            }
            return false;
        };

        const findRightDiagonal = (matrix, player) => {
            for (let row = 0, col = matrix.length - 1; row < matrix.length; row++, col--) {
                console.log('Col: ' + col, 'Row: ' + row, 'Matrix: ' + matrix[row][col]);
                if (matrix[row][col] !== player) {
                    console.log('sali');
                    break;
                }
                if (row === matrix.length - 1 && matrix[row][col] === player) {
                    return true;
                }
            }
            return false;
        };
        // console.log('Ganador horizontal: ' + findHorizontal(matrix, player));
        // console.log('Ganador Vertical: ' + findVertical(matrix, player));
        // console.log('Ganador Left Diagonal: ' + findLeftDiagonal(matrix, player));
        console.log('Ganador Right Diagonal: ' + findRightDiagonal(matrix, player));
        console.table(matrix);
    }


});