
// [5,10,-5]
var asteroidCollision = function(asteroids) {
    let stack= [];
    for (let astero of asteroids ) {
        let explode = false;
        while(stack.length>0&&astero<0&&stack[stack.length-1]>0){
            let rightAstero = stack.pop();
            if(rightAstero===Math.abs(astero)){
                explode = true;
                break;
            }else if(rightAstero>Math.abs(astero)){
                astero = 0;
                stack.push(rightAstero);
                break;
            }
        }
        if(!explode&&astero!==0){
            stack.push(astero);
        }
    }
    return stack;
};