function bubbles() {
     let count = 200;
     let section = document.querySelector('section');
     let i = 0; 

  while (i < count) {
          let bubble = document.creatElement('i');
          let x = Math.floor(Math.random() * window.innerWidth);
          let y = Math.floor(Math.random() * window.innerHeight);
  
