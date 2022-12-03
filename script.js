const hamburger = document.querySelector('.top-menu-list');
const burgerMenu = document.querySelector('.nav-menu,.nav-menu-click');
const burgerImg = document.querySelector('.nav-menu-img');
const menuIcon = document.querySelector('.icon');

function hamburgerAction() {
  if (hamburger.style.display === 'block') {
    hamburger.style.display = 'none';
    burgerMenu.classList.replace('nav-menu-click', 'nav-menu');
    burgerImg.src = 'img/burgermenu.png';
  } else {
    hamburger.style.display = 'block';
    hamburger.style.visibility = 'visible';
    burgerMenu.classList.replace('nav-menu', 'nav-menu-click');
    burgerImg.src = 'img/close.png';
  }
}

menuIcon.addEventListener('click', hamburgerAction);

// -------------Featured Speaker Section-----------

const speakerDetails = [
  {
    speakerId: '1',
    speakerNmae: 'Reza Ahmadi',
    speakerTitle: 'Berkman Profesor of USA',
    speakerImg: 'avatar-1.jpg',
    speakerDesc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    speakerId: '2',
    speakerNmae: 'Jafar Sohrabi',
    speakerTitle: 'Berkman Profesor of USA',
    speakerImg: 'avatar-2.jpg',
    speakerDesc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    speakerId: '3',
    speakerNmae: 'Mohsen Hussaini',
    speakerTitle: 'Berkman Profesor of USA',
    speakerImg: 'avatar-3.jpg',
    speakerDesc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    speakerId: '4',
    speakerNmae: 'David',
    speakerTitle: 'Berkman Profesor of USA',
    speakerImg: 'avatar-4.jpg',
    speakerDesc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    speakerId: '5',
    speakerNmae: 'Sara',
    speakerTitle: 'Berkman Profesor of USA',
    speakerImg: 'avatar-5.jpg',
    speakerDesc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    speakerId: '6',
    speakerNmae: 'Kazim Mohammadi',
    speakerTitle: 'Full Stack Developer',
    speakerImg: 'avatar-6.jpg',
    speakerDesc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
];

const cards = document.querySelector('.speaker-cards');

cards.innerHTML = '';

for (let j = 0; j < speakerDetails.length; j += 1) {
  if (j < 2) {
    cards.innerHTML += `<div class="speaker-card card-show">
  <div class="speaker-img-div">
      <img class="speaker-img" src="./img/${speakerDetails[j].speakerImg}" alt="">
  </div>
  <div class="speaker-content-div">
      <h4 class="speaker-name">${speakerDetails[j].speakerNmae}</h4>
      <p class="speaker-position">${speakerDetails[j].speakerTitle}</p>
      <p class="speaker-content">
      ${speakerDetails[j].speakerDesc}
      </p>
  </div>
</div>`;
  } else {
    cards.innerHTML += `<div class="speaker-card card-hide">
  <div class="speaker-img-div">
      <img class="speaker-img" src="./img/${speakerDetails[j].speakerImg}" alt="">
  </div>
  <div class="speaker-content-div">
      <h4 class="speaker-name">${speakerDetails[j].speakerNmae}</h4>
      <p class="speaker-position">${speakerDetails[j].speakerTitle}</p>
      <p class="speaker-content">
      ${speakerDetails[j].speakerDesc}
      </p>
  </div>
</div>`;
  }
}

const moreBtn = document.querySelector('.speaker-more-btn');
const speakerCard = document.querySelectorAll('.speaker-cards > div');
const arrow = document.querySelector('.down-arrow');

moreBtn.addEventListener('click', () => {
  for (let i = 2; i < speakerCard.length; i += 1) {
    speakerCard[i].classList.toggle('card-show');
  }
  arrow.classList.toggle('up-arrow');
});
