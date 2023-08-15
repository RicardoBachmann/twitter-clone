import { tweetsData } from "./data.js";

const tweetInput = document.getElementById("tweet-input");
const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.addEventListener("click", function () {
  console.log(tweetInput.value);
});

document.addEventListener("click", function (e) {
  console.log(e.target.dataset.like);
});

function getFeedHtml() {
  let feedHtml = ``;

  tweetsData.forEach(function (tweet) {
    feedHtml += `<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-solid fa-reply" data-reply="${tweet.uuid}"></i>
                    ${tweet.replies.length}
                </span>
                <i class="fa-regular fa-heart" data-like="${tweet.uuid}"></i>
                <span class="tweet-detail">
                    ${tweet.Like}
                </span>
                <i class="fa-solid fa-retweet" data-retweet="${tweet.uuid}"></i>
                <span class="tweet-detail">
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>`;
  });
  return feedHtml;
}

function render() {
  document.getElementById("feed-container").innerHTML = getFeedHtml();
}

render();
