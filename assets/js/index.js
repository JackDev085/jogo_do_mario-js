const mario = document.querySelector('.mario'); // Adicione um ponto para indicar uma classe
const pipe = document.querySelector('.cano'); // Adicione um ponto para indicar uma classe

const jump = () => {
  mario.classList.add('jump'); // Adicione uma classe chamada 'jump'
  setTimeout(()=>{
    mario.classList.remove('jump'); 

  },500)
};

const loop = setInterval(()=>{

const pipePosition  = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
  
console.log(marioPosition)
if (pipePosition <= 120 && pipePosition>0 && marioPosition <100) {
    pipe.style.animation = 'none';
    pipe.style.left = '${pipePosition}px'
  }
},10);

