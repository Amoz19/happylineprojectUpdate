const menu = document.querySelector('.menu');
const innermenu = document.querySelector('.menu-left');
const button = document.querySelector('.button');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.main-nav');
const scrollTop = document.querySelector('.scroll-top')
const navHeight = nav.getBoundingClientRect().height;
const menuHeight = menu.getBoundingClientRect().height;

button.addEventListener('click',()=>{
    menu.classList.toggle('showHeight');
})

closeBtn.addEventListener('click',()=>{
    menu.classList.toggle('showHeight');

})

window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        nav.classList.add('fixed-nav')
    }
    else{
        nav.classList.remove('fixed-nav')
    }

    if (scrollHeight > 150) {
      scrollTop.classList.add("show-scroll-top");
    } else {
      scrollTop.classList.remove("show-scroll-top");
    }
})

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link)=>{
  link.addEventListener('click',(clk)=>{
    clk.preventDefault();
    const id = clk.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixedNav = nav.classList.contains("fixed-nav");

    // const showHeight = menu.classList.contains('showHeight');
    
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    menu.classList.remove('showHeight');
  })
})




