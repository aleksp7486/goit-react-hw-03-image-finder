const URL = 'https://pixabay.com/api/';

function getImages(value, page) {
  const params = new URLSearchParams({
    key: '30931366-a07d02e157d3797ab4f355b57',
    q: `${value}`,
    lang: 'en,ru',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: `${page}`,
  });
  return fetch(`${URL}?${params}`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

const api = {
  getImages,
};

export default api;
