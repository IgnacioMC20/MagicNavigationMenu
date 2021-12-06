const list = document.querySelectorAll('.list');

// const activeLink = () => {
//   list.forEach( e => e.classList.remove('active'));
//   this.classList.add('active');
// }

function activeLink(){
  list.forEach( e => e.classList.remove('active'));
  this.classList.add('active');
}

list.forEach( (item) => item.addEventListener('click', activeLink));