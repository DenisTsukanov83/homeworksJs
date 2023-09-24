addEventListener("DOMContentLoaded", (event) => {
    const field = document.querySelector('.field');
    const field2 = document.querySelector('.field2');
    const ctx = field.getContext('2d');
    const ctx2 = field2.getContext('2d');
    const btn = document.querySelector('.btn');
    const btn2 = document.querySelector('.task-7 .btn');
    const btn3 = document.querySelector('.task-8 .btn');
    const btn4 = document.querySelector('.task-9 .btn');
    const btn5 = document.querySelector('.task-10 .btn');
    const btn6 = document.querySelector('.task-11 .btn');
    const btn7 = document.querySelector('.task-12 .btn');
    const btn8 = document.querySelector('.task-13 .btn');

    let widthRect = 0;
    let heightRect = 0;
    let pointX = 0;
    let pointY = 0;
    let accessPointX = false;
    let accessPointY = false;
    let accessWidth = false;
    let accessHeight = false;

    ctx.font = "10px serif";

    function createRect(x1, y1, x2, y2) {

        if(pointX == x1) {
            accessPointX = true;
        } else {
            pointX < x1 ? pointX += 1 : pointX -= 1;
            accessPointX = false;
        }

        if(pointY == y1) {
            accessPointY = true;
        } else {
            pointY < y1 ? pointY += 1 : pointY -= 1;
            accessPointY = false;
        }

        if(widthRect == x2 - x1) {
            accessWidth = true;
        } else {
            widthRect <= x2 - x1 ? widthRect += 1 : widthRect -= 1;
            accessWidth = false;
        } 

        if(heightRect == y2 - y1) {
            accessHeight = true;
        } else {
            heightRect <= y2 - y1 ? heightRect += 1 : heightRect -= 1;
            accessHeight = false;
        }

        ctx.clearRect(0, 0, field.width, field.height);
        ctx.strokeStyle = 'rgb(0, 0, 255)';
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

        showСoordinates(pointX, pointY, pointX + widthRect, pointY + heightRect);
        showWidth(widthRect);
        showHeight(heightRect);
        showArea(widthRect, heightRect);
        showPerimeter(widthRect, heightRect);


        if(!accessPointX || !accessPointY || !accessHeight || !accessWidth) {
            requestAnimationFrame(() => createRect(x1, y1, x2, y2));
            console.log('start')
        } else {
            console.log('stop')
            return;
        }

    }

    function createRuller() {
        ctx2.strokeStyle = 'black';
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

    showСoordinates = (x1, y1, x2, y2) => {
        const res = document.querySelector('.task-2 .res');
        res.textContent = `x1: ${x1}, y2: ${y1}, x2: ${x2}, y2: ${y2}`;
    }

    showWidth = (width) => {
        const res = document.querySelector('.task-3 .res');
        res.textContent = `${Math.abs(width)}`;
    }

    showHeight = (height) => {
        const res = document.querySelector('.task-4 .res');
        res.textContent = `${Math.abs(height)}`;
    }

    showArea = (width, height) => {
        const res = document.querySelector('.task-5 .res');
        res.textContent = `${Math.abs(width * height)}`;
    }

    showPerimeter = (width, height) => {
        const res = document.querySelector('.task-6 .res');
        res.textContent = `${Math.abs(width) * 2 + Math.abs(height) * 2}`;
    }

    setWidth = (rect) => {
        const inp = +document.querySelector('.task-7 .inp').value;
        const sel = document.querySelector('.task-7 select').value;

        let x = sel == '-' ? rect[1].x - inp : rect[1].x + inp;
        document.querySelector('.task-1 .inp.third').value = x;
        createRect(rect[0].x, rect[0].y, x, rect[1].y);
    }

    setHeight = (rect) => {
        const inp = +document.querySelector('.task-8 .inp').value;
        const sel = document.querySelector('.task-8 select').value;

        let y = sel == '-' ? rect[1].y - inp : rect[1].y + inp;

        document.querySelector('.task-1 .inp.fourth').value = y;
        createRect(rect[0].x, rect[0].y, rect[1].x, y);
    }
    
    setWidthAndHeight = (rect) => {
        const inp1 = +document.querySelector('.task-9 .inp.first').value;
        const sel1 = document.querySelector('.task-9 .sel-1').value;
        const inp2 = +document.querySelector('.task-9 .inp.second').value;
        const sel2 = document.querySelector('.task-9 .sel-2').value;

        let width = sel1 == '-' ? rect[1].x - inp1 : rect[1].x + inp1;
        let height = sel2 == '-' ? rect[1].y - inp2 : rect[1].y + inp2;

        document.querySelector('.task-1 .inp.third').value = width;
        document.querySelector('.task-1 .inp.fourth').value = height;
        createRect(rect[0].x, rect[0].y, width, height);
    }

    moveXAxis = (rect) => {
        const inp = +document.querySelector('.task-10 .inp').value;
        const sel = document.querySelector('.task-10 select').value;

        let x1 = sel == '-' ? rect[0].x - inp : rect[0].x + inp;
        let x2 = sel == '-' ? rect[1].x - inp : rect[1].x + inp;

        document.querySelector('.task-1 .inp.first').value = x1;
        document.querySelector('.task-1 .inp.third').value = x2;
        createRect(x1, rect[0].y, x2, rect[1].y);
    }

    moveYAxis = (rect) => {
        const inp = +document.querySelector('.task-11 .inp').value;
        const sel = document.querySelector('.task-11 select').value;

        let y1 = sel == '-' ? rect[0].y - inp : rect[0].y + inp;
        let y2 = sel == '-' ? rect[1].y - inp : rect[1].y + inp;

        document.querySelector('.task-1 .inp.second').value = y1;
        document.querySelector('.task-1 .inp.fourth').value = y2;
        createRect(rect[0].x, y1, rect[1].x, y2);
    }

    moveXAndYAxises = (rect) => {
        const inp1 = +document.querySelector('.task-12 .inp.first').value;
        const sel1 = document.querySelector('.task-12 .sel-1').value;
        const inp2 = +document.querySelector('.task-12 .inp.second').value;
        const sel2 = document.querySelector('.task-12 .sel-2').value;

        let x1 = sel1 == '-' ? rect[0].x - inp1 : rect[0].x + inp1;
        let x2 = sel1 == '-' ? rect[1].x - inp1 : rect[1].x + inp1;
        let y1 = sel2 == '-' ? rect[0].y - inp2 : rect[0].y + inp2;
        let y2 = sel2 == '-' ? rect[1].y - inp1 : rect[1].y + inp2;

        document.querySelector('.task-1 .inp.first').value = x1;
        document.querySelector('.task-1 .inp.third').value = x2;

        document.querySelector('.task-1 .inp.second').value = y1;
        document.querySelector('.task-1 .inp.fourth').value = y2;
        createRect(x1, y1, x2, y2);
    }

    getCoordinatesOfPoint = (rect) => {
        let x = +document.querySelector('.task-13 .inp.first').value;
        let y = +document.querySelector('.task-13 .inp.second').value;
        let res = document.querySelector('.task-13 .res');
        let x1 = rect[0].x;
        let y1 = rect[0].y;
        let x2 = rect[1].x;
        let y2 = rect[1].y;

        if(x1 < x2 && y1 < y2) {
            if(x >= x1 && x <= x2 && y >= y1 && y <= y2) {
                res.textContent = 'Эта точка внутри прямоугольника!';
            } else {
                res.textContent = 'Эта точка НЕ внутри прямоугольника!';
            }
        }

        if(x1 > x2 && y1 > y2) {
            if(x >= x2 && x <= x1 && y >= y2 && y <= y1) {
                res.textContent = 'Эта точка внутри прямоугольника!';
            } else {
                res.textContent = 'Эта точка НЕ внутри прямоугольника!';
            }
        }

        if(x1 > x2 && y1 < y2) {
            if(x >= x2 && x <= x1 && y >= y1 && y <= y2) {
                res.textContent = 'Эта точка внутри прямоугольника!';
            } else {
                res.textContent = 'Эта точка НЕ внутри прямоугольника!';
            }
        }

        if(x1 < x2 && y1 > y2) {
            if(x >= x1 && x <= x2 && y >= y2 && y <= y1) {
                res.textContent = 'Эта точка внутри прямоугольника!';
            } else {
                res.textContent = 'Эта точка НЕ внутри прямоугольника!';
            }
        }

    }
    
    //Создать объект
    btn.onclick = () => {
        const rect = [
            {x: +document.querySelector('.first').value, y: +document.querySelector('.second').value},
            {x: +document.querySelector('.third').value, y: +document.querySelector('.fourth').value}
        ]
        createRect(rect[0].x, rect[0].y, rect[1].x, rect[1].y);
    }

    //Изменить ширину
    btn2.onclick = () => {
        const rect = [
            {x: +document.querySelector('.first').value, y: +document.querySelector('.second').value},
            {x: +document.querySelector('.third').value, y: +document.querySelector('.fourth').value}
        ]
        setWidth(rect);
    }

    //Изменить высоту
    btn3.onclick = () => {
        const rect = [
            {x: +document.querySelector('.first').value, y: +document.querySelector('.second').value},
            {x: +document.querySelector('.third').value, y: +document.querySelector('.fourth').value}
        ]
        setHeight(rect);
    }

    //Изменить ширину и высоту
    btn4.onclick = () => {
        const rect = [
            {x: +document.querySelector('.first').value, y: +document.querySelector('.second').value},
            {x: +document.querySelector('.third').value, y: +document.querySelector('.fourth').value}
        ]
        setWidthAndHeight(rect);
    }

    //Сместить по оси X
    btn5.onclick = () => {
        const rect = [
            {x: +document.querySelector('.first').value, y: +document.querySelector('.second').value},
            {x: +document.querySelector('.third').value, y: +document.querySelector('.fourth').value}
        ]
        moveXAxis(rect);
    }

    //Сместить по оси Y
    btn6.onclick = () => {
        const rect = [
            {x: +document.querySelector('.first').value, y: +document.querySelector('.second').value},
            {x: +document.querySelector('.third').value, y: +document.querySelector('.fourth').value}
        ]
        moveYAxis(rect);
    }

    //Сместить по осям X и Y
    btn7.onclick = () => {
        const rect = [
            {x: +document.querySelector('.first').value, y: +document.querySelector('.second').value},
            {x: +document.querySelector('.third').value, y: +document.querySelector('.fourth').value}
        ]
        moveXAndYAxises(rect);
    }

    //Определить попадает точка в прямоугольник или нет
    btn8.onclick = () => {
        const rect = [
            {x: +document.querySelector('.first').value, y: +document.querySelector('.second').value},
            {x: +document.querySelector('.third').value, y: +document.querySelector('.fourth').value}
        ]
        getCoordinatesOfPoint(rect);
    }
});



