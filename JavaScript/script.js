let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }
  
  document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
  }
  /*
  let loadMoreBtn = document.querySelector('#load-more');
  let currentItem = 4;
  loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.dishes .box-container .one')];
    for (var i =currentItem; i< currentItem +32; i++){
      boxes[i].style.display='inline-block';
    }
    currentItem +=32;
    if(currentItem>=boxes.length){
      loadMoreBtn.style.display='none';
    }
  }
  */