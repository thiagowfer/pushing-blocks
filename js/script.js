(function(){
    // Variáveis
    var cnv = document.querySelector('canvas');
    var ctx = cnv.getContext('2d');

    // Teclas
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

    // Movimento
    var mvLeft = mvUp = mvRight = mvDown = false;

    // Arrays
    var sprites = [];
    var blocks = [];

    // Objetos
    var character = new Sprite(50, 175, 50, 50, "#00f"); 
    character.speed = 3;
    sprites.push(character);    

    var block1 = new Sprite(500, 100, 50, 50, "#f00"); 
    sprites.push(block1);
    blocks.push(block1);  

    var block2 = new Sprite(200, 300, 100, 50, "#8B6914"); 
    sprites.push(block2);
    blocks.push(block2);  

    // Entradas 
    addEventListener("keydown", function(e){
        var key = e.keyCode;
        switch(key){
            case LEFT:
                mvLeft = true;
            break;
            case UP:
                mvUp = true;
            break;
            case RIGHT:
                mvRight = true;
            break;
            case DOWN:
                mvDown = true;
            break;
        }
    }, false);

    addEventListener("keyup", function(e){
        var key = e.keyCode;
        switch(key){
            case LEFT:
                mvLeft = false;
            break;
            case UP:
                mvUp = false;
            break;
            case RIGHT:
                mvRight = false;
            break;
            case DOWN:
                mvDown = false;
            break;
        }
    }, false);

    // Criação do loop com as funções
    function loop(){
        requestAnimationFrame(loop, cnv);
        update();
        render();
    }

    function update(){
        if(mvLeft && !mvRight){
            character.posX -= character.speed;
        }
        if(mvRight && !mvLeft){
            character.posX += character.speed;
        }
        if(mvUp && !mvDown){
            character.posY -= character.speed;
        }
        if(mvDown && !mvUp){
            character.posY += character.speed;
        }
        // Limites da tela
        character.posX = Math.max(0, Math.min(cnv.width - character.width, character.posX));
        character.posY = Math.max(0, Math.min(cnv.height - character.height, character.posY));
        
        // Colisões
        for(var i in blocks){
            var blk = blocks[i];
            if(blk.visible){
                blockRect(blk, character);
            }
        }

    }

    // Renderizar itens na tela
    function render(){
        ctx.clearRect(0,0,cnv.width, cnv.height);
        for(var i in sprites){
            var spr = sprites[i];
            if(spr.visible){
                ctx.fillStyle = spr.color;
                ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
            }
        }
    }
    loop();

}());