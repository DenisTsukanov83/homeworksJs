addEventListener("DOMContentLoaded", (event) => {
    const field = document.querySelector('.field');
    const field2 = document.querySelector('.field2');
    const ctx = field.getContext('2d');
    const ctx2 = field2.getContext('2d');
    const btn = document.querySelector('.btn');

    let widthRect = 0;
    let heightRect = 0;
    let pointX = 0;
    let pointY = 0;
    let accessWidth = true;
    let accessHeight = true;

    ctx.strokeStyle = 'blue';
    ctx.font = "10px serif";

    function createRect(x1, y1, x2, y2) {
        /* if(widthRect != x2 - x1 || heightRect != y2 - y1 || pointX != x1 || pointY != y1) { */
        if(!accessHeight && !accessWidth) {
            console.log('stop')
            /* return; */
        } else {
            
            requestAnimationFrame(() => createRect(x1, y1, x2, y2));
            console.log('start')
        }
        if(widthRect == x2 - x1) {
            accessWidth = false;
        }
        if(heightRect == y2 - y1) {
            accessHeight = false;
        }

        if(pointX < x1) {
            pointX += 1;
        } else {
            pointX -= 1;
        }

        if(pointY < y1) {
            pointY += 1;
        } else {
            pointY -= 1;
        }
        
        if(accessWidth) {
            if(widthRect <= x2 - x1) {
                widthRect += 1;
            } else {
                widthRect -= 1;
            }
        }

        if(accessHeight) {
            if(heightRect <= y2 - y1) {
                heightRect += 1;
            } else {
                heightRect -= 1;
            }
        }

        
        ctx.clearRect(0, 0, field.width, field.height);
        ctx.strokeStyle = 'rgba(0, 0, 255, 1)';
        ctx.lineWidth = 2;
        ctx.strokeRect(pointX, pointY, widthRect, heightRect);
        ctx.strokeStyle = 'rgba(0, 128, 0, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();

        ctx.moveTo(pointX, 0);
        ctx.lineTo(pointX, pointY);
        ctx.fillText(`x1: ${pointX}`, pointX + widthRect < 450 ? pointX + 5 : pointX - 40 , 10);
        

        ctx.moveTo(0, pointY);
        ctx.lineTo(pointX, pointY);
        ctx.fillText(`y1: ${pointY}`, 5, pointY - 5);

        ctx.moveTo(pointX + widthRect, 0);
        ctx.lineTo(pointX + widthRect, pointY + heightRect);
        ctx.fillText(`x2: ${pointX + widthRect}`, pointX + widthRect + 5, 10);
        

        ctx.moveTo(0, pointY + heightRect);
        ctx.lineTo(pointX + widthRect, pointY + heightRect);
        ctx.fillText(`y2: ${pointY + heightRect}`, 5, pointY + heightRect - 5);

        ctx.stroke();

    }

    function createRuller() {
        for(let i = 0; i <= 500; i++) {
            if(i !== 0 && i % 10 == 0 && i % 50 !== 0) {
                ctx2.beginPath();
                ctx2.moveTo(25, i + 30);
                ctx2.lineTo(30, i + 30);
                ctx2.stroke();
            }
            if(i % 50 == 0) {
                ctx2.beginPath();
                ctx2.moveTo(15, i + 30);
                ctx2.lineTo(30, i + 30);
                ctx2.stroke();
                ctx2.fillText(`${i}`, 5, i + 25);
            }
            if(i !== 0 && i % 10 == 0 && i % 50 !== 0) {
                ctx2.beginPath();
                ctx2.moveTo(i + 30, 25);
                ctx2.lineTo(i + 30, 30);
                ctx2.stroke();
            }

            if(i % 50 == 0) {
                ctx2.beginPath();
                ctx2.moveTo(i + 30, 15);
                ctx2.lineTo(i + 30, 30);
                ctx2.stroke();
                ctx2.fillText(`${i}`, i + 35, 15);
            }
        }
        
    }
    createRuller(); 

    btn.onclick = () => {
        accessWidth = true;
        accessHeight = true;
        const rect = [
            {x: +document.querySelector('.first').value, y: +document.querySelector('.second').value},
            {x: +document.querySelector('.third').value, y: +document.querySelector('.fourth').value}
        ]
        createRect(rect[0].x, rect[0].y, rect[1].x, rect[1].y);
    }
});



