console.log(document.URL);
const bar = document.getElementById('bars');
const nav = document.getElementById('navigators');

function display(){
  if(bar.classList.contains('fa-bars')){
    nav.style.display = 'block';
    bar.classList.remove('fa-bars');
    bar.classList.add('fa-xmark');
}
  else {
    nav.style.display = 'none';
    bar.classList.remove('fa-xmark');
    bar.classList.add('fa-bars');
  }
}