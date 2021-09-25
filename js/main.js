//----------뱃지----------

// lodash.js cdn = _.throttle(함수, 시간)
// gsap cdn = gsap.to(요소,지속시간,옵션);

const badfeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY); //window.scrollY = 창의 스크롤 높이값

    if (window.scrollY > 500) {
      //배지 숨기기
      // badfeEl.style.display = 'none';

      // gsap.to(요소,지속시간,옵션);
      gsap.to(badfeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });
      //버튼 보이기
      gsap.to('#to-top', 0.2, {
        x: 0,
      });
    } else {
      //배치 보이기
      // badfeEl.style.display = 'block';

      gsap.to(badfeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
      //버튼 숨기기!
      gsap.to('#to-top', 0.2, {
        x: 100,
      });
    }
  }, 300)
);

// to-top

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

//----------순서대로 나타나기----------
const fadeEls = document.querySelectorAll('.visual .fade-in');

//.forEach(function(인수,인수){}); 반복문
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소,지속시간,{옵션});
  gsap.to(fadeEl, 1, {
    //index = 요소가 0부터 개수만큼
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
    opacity: 1,
  });
});

//new Swiper('인수선택자 .swiper-container',{옵션})

// notice-line
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

// promotion
new Swiper('.promotion .swiper-container', {
  // direction:'horizontal' 기본값
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, //반복재생
  autoplay: {
    delay: 5000, //5초
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //이전
    nextEl: '.promotion .swiper-next', //다음
  },
});

// awards
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetweenL: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

// promotion 숨김,보임 처리
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //보이는중

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion; // !는 반대로 바꾸기
  if (isHidePromotion) {
    //숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    //보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// floating

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소,지속시간,{옵션});
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //지속시간
    {
      //옵션
      y: size,
      repeat: -1, //무한반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

// ScrollMagic

const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
