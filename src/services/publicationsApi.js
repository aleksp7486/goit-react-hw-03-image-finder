import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

async function getImages(value, page, perPage) {
  const params = new URLSearchParams({
    key: '30931366-a07d02e157d3797ab4f355b57',
    q: `${value}`,
    lang: 'en,ru',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: `${perPage}`,
    page: `${page}`,
  });
  const response = await axios.get(`?${params}`);
  return response;
}

const api = {
  getImages,
};

export default api;
