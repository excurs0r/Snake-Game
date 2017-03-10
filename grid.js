function Grid(sizeX, sizeY, fieldSize) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.fieldSize = fieldSize;

    this.getConfig = function() {
        return {
            sizeX: this.sizeX,
            sizeY: this.sizeY,
            fieldSize: this.fieldSize
        };
    }

    this.init = function() {
        createCanvas(sizeX*fieldSize, sizeY*fieldSize);
    }

    this.fill = function(x, y, color) {
        fill(color);
        rect(x*this.fieldSize, y*this.fieldSize, this.fieldSize, this.fieldSize);
        noFill();
    }


}