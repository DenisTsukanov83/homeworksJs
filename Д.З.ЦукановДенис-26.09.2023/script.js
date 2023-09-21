const field = document.querySelector('.field');
const ctx = field.getContext('2d');
const btn = document.querySelector('.btn');
const fromX =document.querySelector('.first');
const fromY =document.querySelector('.second');
const toX =document.querySelector('.third');
const toY =document.querySelector('.fourth');

ctx.strokeStyle = 'blue'
let widthRect = 0;
let heightRect = 0;




function createRect(fromX, fromY, toX, toY) {

    if(widthRect < toX - fromX || heightRect < toY - fromY) {
        requestAnimationFrame(() => createRect(fromX, fromY, toX, toY));
    } else {
        console.log(`fromX: ${fromX}`)
        console.log(`fromY: ${fromY}`)
        console.log(`toX: ${toX}`)
        console.log(`toY: ${toY}`)
        console.log('stop')
    }

    if(widthRect < toX - fromX) {
        widthRect++;
    }
    if(heightRect < toY - fromY) {
        heightRect++;
    }
    
    ctx.clearRect(0, 0, field.width, field.height);
    ctx.strokeRect(fromX, fromY, widthRect, heightRect);

}

btn.onclick = () => {
    widthRect = 0;
    heightRect = 0
    let obj = {
        from: {x: +fromX.value, y: +fromY.value},
        to: {x: +toX.value, y: +toY.value}
    }

    const topX = obj.from.x < obj.to.x ? obj.from.x : obj.to.x;
    const topY = obj.from.y < obj.to.y ? obj.from.y : obj.to.y;
    const botX = obj.to.x > obj.from.x ? obj.to.x : obj.from.x;
    const botY = obj.to.y > obj.from.y ? obj.to.y : obj.from.y;

    createRect(topX, topY, botX, botY)



    


    /* ctx.beginPath();
    ctx.moveTo(obj.topLeft.x, obj.topLeft.y);
    ctx.lineTo(obj.bottomRight.x, obj.topLeft.y);

    ctx.moveTo(obj.bottomRight.x, obj.topLeft.y);
    ctx.lineTo(obj.bottomRight.x, obj.bottomRight.y);

    ctx.moveTo(obj.bottomRight.x, obj.bottomRight.y);
    ctx.lineTo(obj.topLeft.x, obj.bottomRight.y);

    ctx.moveTo(obj.topLeft.x, obj.bottomRight.y);
    ctx.lineTo(obj.topLeft.x, obj.topLeft.y);

    ctx.stroke(); */


}


/* console.log(rect.getBoundingClientRect()) */