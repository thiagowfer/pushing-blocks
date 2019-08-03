function blockRect(r1, r2){
    // r1 -> bloqueado
    // r2 -> bloquear

    // catetos
    var catX = r1.centerX() - r2.centerX();
    var catY = r1.centerY() - r2.centerY();
    
    // soma das metades
    var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
    var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

    if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight){
        var overlapX = sumHalfWidth - Math.abs(catX);
        var overlapY = sumHalfHeight - Math.abs(catY);

        if(overlapX >= overlapY){ // colisão por cima ou baixo
            if(catY > 0){
                r1.posY += overlapY;
            } else {
                r1.posY -= overlapY;
            }
        } else { // colisão pela esquerda ou direita
            if(catX > 0){
                r1.posX += overlapX;
            } else {
                r1.posX -= overlapX;
            }
        }
    }
}