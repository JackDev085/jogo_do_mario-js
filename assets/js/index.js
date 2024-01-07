const mario = document.querySelector('.mario'); // Adicione um ponto para indicar uma classe

const jump = () => {
  mario.classList.add('jump'); // Adicione uma classe chamada 'jump'
  setTimeout(()=>{
    mario.classList.remove('jump'); 

  },500);

   

}

document.addEventListener('keydown', jump); // Corrija o tipo de evento para 'keydown'
