// Lặp qua mỗi thẻ div
  const divs = document.querySelectorAll('.item');
  divs.forEach((div) => {
  const dots = div.querySelectorAll('.tab-item');
  const slides = div.querySelectorAll('.img-item');
  const prevBtn = div.querySelector('.icon-left1');
  const nextBtn = div.querySelector('.icon-right1');
  const numberOfSlides = slides.length;
  let slideNumber = 0;

  // Xử lý sự kiện khi nhấp vào dot
  dots.forEach((dot, index) => {
    const slide = slides[index];

    dot.onclick = function () {
      div.querySelector('.tab-item.active').classList.remove('active');
      div.querySelector('.img-item.active').classList.remove('active');

      this.classList.add('active');
      slide.classList.add('active');
    };
  });

  // Xử lý sự kiện khi nhấn nút "Next"
  nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });

    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
    dots[slideNumber].classList.add('active');
  });

  // Xử lý sự kiện khi nhấn nút "Previous"
  prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });

    slideNumber--;

    if (slideNumber < 0) {
      slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
    dots[slideNumber].classList.add('active');
  });
});


// Lấy các phần tử HTML cần sử dụng
const menuList = document.querySelector('.menu-list-place');
const iconLeft = document.querySelector('.icon-left');
const iconRight = document.querySelector('.icon-right');

// Xử lý sự kiện click trên nút trái
iconLeft.addEventListener('click', () => {
    menuList.scrollLeft -= 400; // Di chuyển sang trái 400px
    // toggleLeftButtonVisibility();
});

// Xử lý sự kiện click trên nút phải
iconRight.addEventListener('click', () => {
    menuList.scrollLeft += 400; // Di chuyển sang phải 400px
    // toggleLeftButtonVisibility();
});

// // Hàm ẩn/hiện nút trái
// function toggleLeftButtonVisibility() {
//     if (menuList.scrollLeft === 0) {
//         iconLeft.style.display = 'none'; // Ẩn nút trái khi danh sách ở vị trí ban đầu
//     } else {
//         iconLeft.style.display = 'block'; // Hiện nút trái khi danh sách không ở vị trí ban đầu
//     }
// }


var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        // Khi cuộn lên, hiển thị menu
        document.querySelector(".menu-tablet-mobile").style.bottom = "0";
      } else {
        // Khi cuộn xuống, ẩn menu
        document.querySelector(".menu-tablet-mobile").style.bottom = "-66px";
      }

      prevScrollpos = currentScrollPos;
    };