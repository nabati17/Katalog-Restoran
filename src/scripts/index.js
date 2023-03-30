import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';

import('../DATA.json').then(({ default: jsonData }) => {
  console.log(jsonData);
  let datas = jsonData['restaurants'];
  let dataList = '';
  datas.forEach(function (data) {
    dataList += `
        <article class="post-item">
          <img class="image-tumbnail" src="${data.pictureId}" alt="${data.name}" />
          <div class="post-item__content">
            <h1 class="post-item__title">${data.name}</h1>
            <p class="post-item__date">Location In ${data.city} <br /> Rating ${data.rating}</p>
            <p class="post-item__description">${data.description}</p>
          </div>
        </article>
        `;
  });
  document.querySelector('.posts').innerHTML = dataList;
});

//navbar
let menu = document.getElementById('menu-icon');
let list = document.querySelector('.list');

menu.addEventListener('click', function () {
  list.classList.toggle('active');
});

window.onscroll = () => {
  list.classList.remove('active');
};
