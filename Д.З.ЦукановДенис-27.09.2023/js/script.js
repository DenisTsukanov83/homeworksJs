const tabs = document.querySelectorAll('.tab');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {

    btn.onclick = (e) => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        e.target.parentElement.classList.add('active');
    }
}) 