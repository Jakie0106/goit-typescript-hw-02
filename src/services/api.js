import axios from "axios";

const userKey = "EPKsrUFDPLW7BEso8uVyBtAjWQSOluJfqLdba66Nujw";

export const fetchImages = async (page = 0, query) => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${userKey}`,
    },
    params: {
      query: query,
      page: page,
      per_page: 15,
    },
  });
  return data;
};
