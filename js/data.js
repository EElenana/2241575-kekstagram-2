import {randomNumber, randomUniqNumber, getRandomArrayElement} from './mocks.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Нет слов , одни эмоции 🏆',
  'Страшно, вырубай',
  'Хм, выглядеть так должно быть незаконно',
  'Когда у меня пропадает творческое вдохновение, я смотрю на это фото',
  'На слезу пробрало (((((',
  'Слишком сложный мем, пояснительную бригаду',
  'Автор скатился Атписка!!11!1',
  'Фу, боже... какой кринж',
  'Видно же, что фотошоп!',
  'Вай, какая красотка',
  'Кросиво))',
];

const NAMES = [
  'Артём',
  'Ангелина',
  'Авдотья',
  'Жанна',
  'Оскар',
  'Лера',
  'ИмяУкрали',
  'Никита',
  'Дмитрий',
  'Святослав',
  'Игорь',
  'Алибек',
];

const DESCRIPTIONS = [
  'Меня сложно найти, легко потерять и невозможно забыть.',
  'С днем котиков!!',
  'А она такая ванильная, но я никогда не назвала бы ее сладкой.',
  'На случай, если буду нужен, то я там же, где и был, когда был не нужен.',
  'Иногда жизнь — это жизнь, а ты в ней иногда.',
  'Здесь могла бы быть ваша реклама.',
  'Хочу чипсов(()(((',
  'Моя мама сказала что нужно жить и мечтать, жить и мечтать. Поэтому я снова легла спать.',
  'Иногда самое трудное — забыть того, с которым по сути ничего и не было.',
];

const generateId =  randomUniqNumber(1, 25)
const generatePhotoId = randomUniqNumber(1, 25);
const generateCommentId = randomUniqNumber(1, 200);

const createComment = function() {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${randomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const createDescriptionOfPhoto = function() {
  return {
    id: generateId(),
    url: `./photos/${generatePhotoId()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: randomNumber(15, 200),
    comments: Array.from({length: randomNumber(1, 10)}, createComment),
  };
};

export {createDescriptionOfPhoto};
