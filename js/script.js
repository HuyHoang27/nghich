document.addEventListener('DOMContentLoaded', function(){
    const giftBoxes = document.querySelectorAll('.gift-box');
    const cardContainer = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.greeting-card');
    const closeButtons = document.querySelectorAll('.close-btn');
  
    /* Background changer: Tự động thay đổi background mỗi 5 giây */
    const backgrounds = [
      'url("assets/images/bg_1.jpg")',
      'url("assets/images/bg_2.jpg")',
      'url("assets/images/bg_3.jpg")',
      'url("assets/images/bg_4.jpg")',
      'url("assets/images/bg_5.jpg")',
      'url("assets/images/bg_6.jpg")',
      'url("assets/images/bg_7.jpg")',
      'url("assets/images/bg_8.jpg")',
      'url("assets/images/bg_9.jpg")',
    ];
    let currentBg = 0;
    setInterval(() => {
      document.body.style.backgroundImage = backgrounds[currentBg];
      currentBg = (currentBg + 1) % backgrounds.length;
    }, 5000);
  });
  