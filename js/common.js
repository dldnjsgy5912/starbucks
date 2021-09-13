// --------------------통합 검색 --------------------

// aa.addEventListener(실행문,function(){~~})
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
    
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색'); //.setAttribute = 속성 추가 
});
// focus <==> blur
searchInputEl.addEventListener('blur',function(){ 
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//2021