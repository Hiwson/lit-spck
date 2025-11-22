let shortC = document.getElementById('srt');
let acadC = document.getElementById('acad');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const google = document.getElementById('gle');
const pswd = document.getElementById('pswd');
const see = document.getElementById('see');

see.addEventListener('click', () => {
  if (pswd.type == 'password') {
    see.src = '/Athena clone/eyeOpen.jpg';
    pswd.type = 'text'
  }
  else {
    pswd.type = 'password';
    see.src = '/Athena clone/eyeClose.jpg';
  }
});

btn1.onclick = () => {
  btn1.style.backgroundColor = '#ED1279';
  btn1.style.borderColor = '#ED1279';
  btn2.style.borderLeft = 'none';
  btn2.style.backgroundColor = '#fff';
  btn2.style.borderColor = '#000';
};
btn2.onclick = () => {
  btn2.style.backgroundColor = '#ED1279';
  btn2.style.borderColor = '#ED1279';
  btn1.style.borderRight = 'none';
  btn1.style.backgroundColor = 'white'
  btn1.style.borderColor = 'black'
};
google.onclick = () => {
  window.open('https://google.com');
}