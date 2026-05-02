let randomNumber = Math.random();
console.log("觀察隨機的數字：", randomNumber);
console.log("加減乘除：",1.5+1.5, 2*2 , 3/3 , 4*4 , 0.11*100  );
console.log("Math.floor：", Math.floor( 3.99999));
let answer = Math.random();
console.log("隨機數字是否會介於0~100：", answer);
const userGuess = Number(guessField.value);  //取得欄位值，並轉為數字
if  (  userGuess === answer ) {
    result.textContent = "猜測結果：Congratulations!" ;
}
else if (userGuess < answer) {
    result.textContent = "猜測結果：數字太小!" ;
}
else if (userGuess > answer) {
    result.textContent = "猜測結果：數字太大!";
}
result.textContent += "遊戲結束";
result.style.backgroundColor="red";
alert("遊戲結束");
setGameOver(); //放到猜對===的欄位

function setGameOver() {
        guessField.disabled = true; //停止輸入功能
        guessSubmit.disabled = true;    //停止按鈕功能
}
<button class="restartBtn">重新開始</button>
const restartBtn = document.querySelector(".restartBtn");
function initGame() {
    // 初始化遊戲
}
restartBtn.addEventListener("click", initGame);




// 1. 產生 1-99 的隨機整數
const answer = Math.floor(Math.random() * 99) + 1;
let min = 1;
let max = 99;
let guess;
let attempts = 0;

while (true) {
    // 2. 取得使用者輸入
    guess = parseInt(prompt(`請輸入 ${min} ~ ${max} 之間的數字：`));
    attempts++;

    // 3. 檢查輸入是否合法
    if (isNaN(guess) || guess < min || guess > max) {
        alert("別鬧了，請輸入範圍內的數字！");
        continue;
    }

    // 4. 判斷勝負
    if (guess === answer) {
        alert(`恭喜答對了！答案就是 ${answer}，你一共猜了 ${attempts} 次。`);
        break; 
    } else if (guess < answer) {
        alert("猜測結果：數字太小!");
        min = guess + 1;
    } else {
        alert("猜測結果：數字太大!");
        max = guess - 1;
    }
}