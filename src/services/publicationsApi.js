// https://pixabay.com/api/?q=cat&page=1&key=30931366-a07d02e157d3797ab4f355b57&image_type=photo&orientation=horizontal&per_page=12

const URL = 'https://pixabay.com/api/';

export const getImages = async (value, page) => {
  const params = new URLSearchParams({
    key: '30931366-a07d02e157d3797ab4f355b57',
    q: `${value}`,
    lang: 'en,ru',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: `${page}`,
  });
  const response = await fetch(`${URL}?${params}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};
