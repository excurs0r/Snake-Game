function Mouse() {
    this.posX = 20;
    this.posY = 20;


    this.update = function() {
        var validPosition = false;
        while(!validPosition) {
            this.posX = Math.floor(Math.random() * grid.getConfig().sizeX);
            this.posY = Math.floor(Math.random() * grid.getConfig().sizeY);
            let snakeCfg = snake.getCoordinates();
            let onSnake = false;
            for (let i=0; i<snakeCfg.length;i++) {
                if (snakeCfg[i].y == this.posY || snakeCfg[0].x == this.posX) {
                    onSnake = true;
                }
            }
            if(!onSnake) {
                validPosition = true;
            }
        }
    }

    this.draw = function() {
        grid.fill(this.posX, this.posY, '#CB5338');
    }

    this.getPosition = function() {
        return {x: this.posX, y: this.posY};
    }
}