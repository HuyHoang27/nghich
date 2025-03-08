document.addEventListener("DOMContentLoaded", function() {
    // Mảng chứa dữ liệu quà và thiệp
    const gifts = [
        {
            to: "Em",
            gift_image_url: "assets/images/bansung.jpg",
            card_message: "Bùm chiếu 🔫🎯 Nhà ngươi đã bị bắt 😏",
        },
        {
            to: "Em",
            gift_image_url: "assets/images/smile.jpg",
            card_message: "Tội danh: Quá xinh đẹp làm rung động lòng người! 😍✨ Y Ê U Q U Á I ✨" 
        },
        {
            to: "Em",
            gift_image_url: "assets/images/bantim.jpg",
            card_message: "🤨 Im lặng! Mọi lời biện hộ sẽ trở thành bằng chứng chống lại em trước tòa án trái tim của tôi!💘⚖️" 
        }
    ];

    const giftBoxes = document.querySelectorAll('.present-box');

    giftBoxes.forEach((box, index) => {
        if (!gifts[index]) return;
        const gift = gifts[index];

        // Thiết lập tên trên hộp quà
        const nameElem = box.querySelector(".name");
        nameElem.innerText = gift.to;

        // Tạo ảnh quà
        const imgWrap = box.querySelector(".img-wrap");
        if (gift.gift_image_url) {
            const imgElem = document.createElement("img");
            imgElem.src = gift.gift_image_url;
            imgWrap.appendChild(imgElem);
        }

        // Tạo thiệp dưới hộp quà (là con của hộp quà)
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h4>💌 Lời nhắn 💌</h4>
            <p>${gift.card_message}</p>
        `;
        card.style.display = "none"; // Ẩn ban đầu
        

        // Xử lý sự kiện mở hộp quà và toggle hiển thị thiệp
        box.addEventListener("click", function(event) {
            // Không cần đóng hộp khác khi mở hộp này (cho phép mở nhiều cùng lúc)
            event.stopPropagation(); // Ngăn sự kiện lan ra ngoài nếu cần
            box.classList.toggle("open");
            // Nếu hộp mở, hiển thị thiệp; nếu đóng thì ẩn đi
            card.style.display = box.classList.contains("open") ? "block" : "none";
        });
        box.appendChild(card);
    });
});
