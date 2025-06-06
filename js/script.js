// 'use strict';

// const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const navbarLinks = document.getElementsByClassName('navbar-links')[0];
// const listItems = document.querySelectorAll('.list-item');
// console.log(toggleButton, navbarLinks, listItems);

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active');
// });

// listItems.forEach((item) => {
//   // console.log(item);
//   item.addEventListener('click', function () {
//     navbarLinks.classList.remove('active');
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  // Ngưỡng cuộn để thay đổi navbar, có thể điều chỉnh giá trị này
  // Ví dụ: 50px hoặc chiều cao của header/một phần header
  const scrollThreshold = 50;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > scrollThreshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Code cho toggle button của navbar (nếu bạn đã có hoặc cần)
  const toggleButton = document.querySelector(".toggle-button");
  const navbarLinks = document.querySelector(".navbar-links");

  if (toggleButton && navbarLinks) {
    toggleButton.addEventListener("click", (event) => {
      event.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
      navbarLinks.classList.toggle("active");
    });
  }

  // Tùy chọn: Đảm bảo video phát mượt mà trên một số trình duyệt
  const video = document.getElementById("header-video-bg");
  if (video) {
    video.play().catch((error) => {
      // Tự động phát có thể bị chặn, đặc biệt nếu không có muted
      // Thuộc tính `muted` đã được thêm vào thẻ video nên ít gặp vấn đề này
      console.warn("Video autoplay was prevented:", error);
      // Bạn có thể thêm một nút play/pause cho người dùng nếu cần
    });
  }
});
