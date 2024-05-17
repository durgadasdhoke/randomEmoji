const emojiContainer = document.getElementById("emoji");
const getRandomEmojiBtn = document.getElementById("getRandomEmojiBtn");
let data =[ "✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"];

getRandomEmojiBtn.addEventListener('click',()=>{
    emojiContainer.innerHTML = `<div class="lds-hourglass"></div>`;
    console.log("clicked");
    let randomIndex = Math.floor(Math.random()*data.length);
    console.log(randomIndex);
        setTimeout(()=>{
            emojiContainer.innerHTML = `<div class ="icon">${data[randomIndex]}</div>`;
        },1000);
});

