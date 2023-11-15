import {createRandomId, getRandom} from './util.js';
// eslint-disable-next-line no-unused-vars
const listName = ['Валерка', 'Фернандо', 'Моника', 'Петя', 'Маришка', 'Клавдия Сергеевна', 'Мистер Сила', 'Гаврюша', 'Феликс', 'Майа'];
// eslint-disable-next-line no-unused-vars
const listComment = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
// eslint-disable-next-line no-unused-vars
const listDescription = ['На отдыхе)', 'На работе0_о', 'Играюсь!', 'Мечтаю...', 'Ну воооот...', ];
// eslint-disable-next-line no-unused-vars
const picturesCout = 25;
// eslint-disable-next-line no-unused-vars
const commentsId = createRandomId(1,500);
// eslint-disable-next-line no-unused-vars
const randomPictures = createRandomId(1, 25);
// eslint-disable-next-line no-unused-vars
const randomId = createRandomId(1, 25);
// eslint-disable-next-line no-unused-vars
const randomLikes = createRandomId(15, 200);
// eslint-disable-next-line no-unused-vars
const comments = () => {
  // eslint-disable-next-line no-unused-vars
  const randomName = getRandom(0, listName.length - 1);
  // eslint-disable-next-line no-unused-vars
  const randomComment = getRandom(0, listComment.length - 1);

  return {
    id: commentsId(),
    // eslint-disable-next-line no-undef
    avatar: `img/avatar-${getRandom(1,6)}.svg`,
    message: listComment[randomComment],
    name: `${listName[randomName]} `,
  };
};
// eslint-disable-next-line no-unused-vars
const pictures = () => {
  // eslint-disable-next-line no-unused-vars
  const randomComment = getRandom(0, listComment.length - 1);
  // eslint-disable-next-line no-unused-vars
  const randomDescription = getRandom(0, listDescription.length - 1);

  return {
    id: randomId(),
    // eslint-disable-next-line no-undef
    url: `photos/${randomPictures()}.jpg`,
    description: `${listDescription[randomDescription]} `,
    likes: randomLikes(),
    comments: `${listComment[randomComment]} `,
  };
};
// eslint-disable-next-line no-unused-vars
const moreDetails = Array.from({length: picturesCout}, pictures);
