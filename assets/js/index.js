const bubbles = document.querySelectorAll('.bubble');
const container = document.querySelector('.container');
const containerRadius = container.offsetWidth / 2; // Bán kính của container
const bubbleRadius = bubbles[0].offsetWidth / 2; // Bán kính của bong bóng
const center = {
    x: containerRadius,
    y: containerRadius
};
const numBubbles = bubbles.length;
const angleIncrement = (2 * Math.PI) / numBubbles;  // Góc giữa các bong bóng

let angle = 0;

function positionBubbles() {
    bubbles.forEach((bubble, index) => {
        const x = center.x + (containerRadius - bubbleRadius - 30) * Math.cos(angle) - bubbleRadius;
        const y = center.y + (containerRadius - bubbleRadius - 30) * Math.sin(angle) - bubbleRadius;

        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
        angle += angleIncrement;

    });
}
// Thêm hàm animateBubbles để làm cho bong bóng di chuyển
function animateBubbles() {
    angle = 0; // Reset góc về 0 để bắt đầu lại từ đầu
    const animationSpeed = 0.005; // Điều chỉnh tốc độ quay

    function animate() {
        bubbles.forEach((bubble, index) => {
            const x = center.x + (containerRadius - bubbleRadius - 30) * Math.cos(angle + index * angleIncrement) - bubbleRadius;
            const y = center.y + (containerRadius - bubbleRadius - 30) * Math.sin(angle + index * angleIncrement) - bubbleRadius;

            bubble.style.left = `${x}px`;
            bubble.style.top = `${y}px`;
        });

        angle += animationSpeed;
        requestAnimationFrame(animate); // Gọi lại hàm animate liên tục
    }

    animate(); // Bắt đầu animation
}

positionBubbles(); // Gọi hàm để đặt vị trí ban đầu
animateBubbles(); // Gọi để bắt đầu chuyển động



const profilePicture = document.querySelector('.profile-image');

profilePicture.addEventListener('click', () => {
    bubbles.forEach(bubble => {
        if (bubble.style.opacity === '0' || bubble.style.opacity === '') {
            bubble.style.transition = 'opacity 0.5s';
            bubble.style.opacity = '1';
            bubble.style.pointerEvents = 'auto'; // Enable click events
        } else {
            bubble.style.transition = 'opacity 0.5s';
            bubble.style.opacity = '0';
            bubble.style.pointerEvents = 'none'; // Disable click events
        }
    });
});