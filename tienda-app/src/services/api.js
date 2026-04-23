const BASE_URL = "https://api.escuelajs.co/api/v1/products";

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
};