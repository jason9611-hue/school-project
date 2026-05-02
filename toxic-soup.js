
const toxicSoups = [
  "人家有的是背景，我有的只是背影。",
  "希望大家不要覺得自己一無是處，我們至少還可以讓別人覺得很煩。",
  "我最大的缺點，就是缺點錢。",
  "選擇比努力更重要，所以我選擇不努力。",
  "如果你覺得自己累得跟狗一樣，那裡真的是誤會了，因為狗都沒你這麼累。",
  "很多朋友喜歡分享旅遊經驗，看他們把錢花光出去走一趟，回來生活卻沒有任何改變，我就放心了。",
  "以前我以為錢可以買到一切，後來我發現並不是，因為我錢不夠。",
  "小時候我以為可以拯救全世界，長大後發現全世界都拯救不了我。",
  "我最大的抗壓適應能力是：以不變的薪水應萬變的物價。",
  "看時間不是為了起床，而是看還能睡多久。",
  "很多人說抖腳會變窮，講得好像我原本多有錢的樣子。",
  "不努力一下，你怎麼會知道什麼叫做絕望。",
  "棉被以外的地方，都是遠方，請先不要叫我起床。",
  "要好好活下去，因為每天都有新的打擊。",
  "比一個人吃火鍋更寂寞的是，一個人沒有錢吃火鍋。",
  "出社會和人接觸的時間越長，我就越喜歡狗，因為狗永遠是狗，人有時候不是人。",
  "有些事情做不到的話，就留到明天做吧，運氣好的話，明天死了就不用做了。",
  "努力不一定會成功，但是不努力會很輕鬆。",
  "謝謝那些曾經擊倒我的人，躺著真舒服。",
  "我爛泥就想好好地攤在地上，不用你們扶。",
  "上不去的薪水，下不去的房價。",
  "上班打卡制，下班責任制，人生好厭世。",
  "被老闆罵完想去動物園，因為在那裡，我才真的像個人。",
  "誰說錢買不到自由，你老闆不就買到你了。",
  "真懷念小時候哭完就睡，現在哭完還是要上班。",
  "以前常常思考自己適合什麼工作，現在發現自己最適合不工作。",
  "準時下班需要的不是努力，是勇氣。",
  "成功的都是領導有方，失敗的就是下屬無能。",
  "失敗並不可怕，可怕的是，你相信這句話。",
  "世界上99%的事可以靠錢解決，剩下的1%是需要更多錢。",
  "那些鼓勵大家跳出舒適圈的，問題是我從來沒舒適過。",
  "長相是上一代給的，規則是上一代訂的，觀念是上一代教的，環境是上一代留的，結果還好意思說：一代不如一代。",
  "你必須非常努力，才可以證明自己真的無能為力。",
  "我一直把錢視為空氣，因為沒有它我就活不下去。",
  "醜小鴨變天鵝並不是因為他多努力，而是因為他的老母就是天鵝。"
];

const INTERVAL = 60000; 
const STORAGE_KEY = 'toxic-soup-start-time';

function initToxicSoup() {
  
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }
  
  updateSoupDisplay();
  setInterval(updateSoupDisplay, 1000); 
}

function updateSoupDisplay() {
  const startTime = parseInt(localStorage.getItem(STORAGE_KEY)) || Date.now();
  const elapsedTime = Date.now() - startTime;
  const intervalsPassed = Math.floor(elapsedTime / INTERVAL);
  const currentIndex = intervalsPassed % toxicSoups.length;
  
  const soupElement = document.getElementById('toxic-soup-text');
  if (soupElement) {
    soupElement.textContent = toxicSoups[currentIndex];
  }
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initToxicSoup);
} else {
  initToxicSoup();
}