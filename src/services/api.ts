import axios from "axios";
import { FetchImagesResponse } from "../types";

const userKey: string = "EPKsrUFDPLW7BEso8uVyBtAjWQSOluJfqLdba66Nujw";

export const fetchImages = async (
  page: number = 0,
  query: string
): Promise<FetchImagesResponse> => {
  const { data } = await axios.get<FetchImagesResponse>(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: `Client-ID ${userKey}`,
      },
      params: {
        query: query,
        page: page,
        per_page: 15,
      },
    }
  );
  return data;
};
