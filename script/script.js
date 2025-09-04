const lampadina = document.querySelector('.lampadinaSpenta');

const lightSwitch = document.querySelector('button');

lightSwitch.addEventListener('click', 
    function () {
    lampadina.classList.add('lampadinaAccesa')
    }
)
