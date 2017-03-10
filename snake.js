function Snake() {

    this.posX = 10;
    this.posY = 10;

    this.speedX = 1;
    this.speedY = 0;

    this.tail = [{x:9,y:10}, {x:8,y:10}, {x:7,y:10}, {x:6,y:10}, {x:5,y:10}, {x:4,y:10}];
    this.dead = false;



    // Movement
    this.moveUp = function(){
        if(this.speedY != 1) {
            this.speedX = 0;
            this.speedY = -1;
        }
    }
    this.moveDown = function(){
        if(this.speedY != -1) {
            this.speedX = 0;
            this.speedY = 1;
        }
    }
    this.moveLeft = function(){
        if(this.speedX != 1) {
        this.speedX = -1;
        this.speedY = 0;
        }
    }
    this.moveRight = function() {
        if(this.speedX != -1) {
            this.speedX = 1;
            this.speedY = 0;
        }  
    }

    // Add something to tail
    this.eat = function() {
        this.tail.push({x: this.posX, y: this.posY});
    }


    this.update = function() {

        var prev = {x: this.posX, y: this.posY};

        this.posX += this.speedX;
        this.posY += this.speedY;

        this.isDead();

        for(var i=0; i<this.tail.length; i++) {
            var temp = cloneObject(this.tail[i]);
            this.tail[i].x = prev.x;
            this.tail[i].y = prev.y;
            prev = temp;
        }
    }

    this.draw = function() {
        if(this.dead) {
            fill('#000000')
            textSize(32);
            text("You are dead :(", (grid.getConfig().sizeX*grid.getConfig().fieldSize/2)-200, (grid.getConfig().sizeY*grid.getConfig().fieldSize/2)-16);
            text("Score: "+(this.tail.length -6).toString(), (grid.getConfig().sizeX*grid.getConfig().fieldSize/2)-200, (grid.getConfig().sizeY*grid.getConfig().fieldSize/2)+20);
        }
        else {
           grid.fill(this.posX, this.posY, '#81B131');
           for(var i=0; i<this.tail.length;i++) {
               grid.fill(this.tail[i].x, this.tail[i].y, '#79A0FE');
           }
        }
    }


    this.isDead = function() {
        if(this.posX > grid.getConfig().sizeX) {
            this.dead = true;
        } 
        if(this.posX < 0) {
            this.dead = true;
        }
        if(this.posY > grid.getConfig().sizeY) {
            this.dead = true;
        }
        if (this.posY < 0) {
           this.dead = true;
        }
        for(var i=0; i<this.tail.length;i++) {
            if(this.tail[i].x == this.posX && this.tail[i].y == this.posY) {
                this.dead = true;
            }
        }
    }

    this.getCoordinates = function() {
        var coordinates = [];
        coordinates.push({x: this.posX, y: this.posY});
        for(var i=0; i < this.tail.length; i++) {
            coordinates.push(cloneObject(this.tail[i]));
        }
        return coordinates;
    }
   
    
}