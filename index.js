const url =
  'https://bgrq2wza3i.execute-api.us-east-1.amazonaws.com/default/tweet';

const tweetsUl = document.querySelector('#tweets');
const searchInput = document.querySelector('.search');

let m = '';

fetch(url)
  .then((data) => data.json())
  .then((json) => {
    console.log(json[0]);
    console.log(m);
    for (let i = 0; i < json.length; i++) {
      m += `<li class="tweet-text" style="margin: 1rem 0; background: #fff; max-width: 300px; padding: .8rem 1rem; border-radius: 4px;">${json[i]}</li>`;
    }
    console.log(m);
    tweetsUl.innerHTML = m;
  });

searchInput.addEventListener('keydown', (e) => {
  console.log(searchInput.value);
  const t = searchInput.value.toLowerCase();

  const tweets = document.querySelectorAll('.tweet-text');

  for (let i = 0; i < tweets.length; i++) {
    if (!tweets[i].innerHTML.includes(t)) {
      tweets[i].style.display = 'none';
    }
  }
});
