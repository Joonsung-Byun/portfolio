const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800, // 애니메이션 스피드 (밀리초)
});

console.log("I am connected");
let x = new Date();
console.log(x);
let y = x.getFullYear();
console.log(y);
document.querySelector('#theYear').textContent = y
console.log("I'm done")
