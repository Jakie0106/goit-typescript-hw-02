import "./App.css";
import { fetchImages } from "./services/api";
import Header from "./components/Header/Header";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { Image, FetchImagesResponse } from "./types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isSelectImg, setIsSelectImg] = useState<Image | null>(null);
  const [pageCounter, setPageCounter] = useState<number>(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data: FetchImagesResponse = await fetchImages(page, query);
        setImages((prev) => [...prev, ...data.results]);
        setPageCounter(data.total);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [page, query]);

  const handleChangePage = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (searchValue: string): void => {
    setQuery(searchValue);
    setImages([]);
    setPage(1);
    setPageCounter(0);
  };

  const handleImgClick = (image: Image): void => {
    setIsSelectImg(image);
    setIsOpenModal(true);
  };

  const modalClose = (): void => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <Header search={handleSetQuery}></Header>
      {isError ? (
        <ErrorMessage />
      ) : (
        images.length > 0 && (
          <ImageGallery images={images} onClick={handleImgClick} />
        )
      )}

      {images.length > 0 && images.length < pageCounter && !isLoading && (
        <LoadMoreBtn click={handleChangePage} />
      )}
      {isLoading && <Loader />}
      {isOpenModal && (
        <ImageModal
          isOpen={isOpenModal}
          image={isSelectImg}
          isClose={modalClose}
        />
      )}
    </div>
  );
}

export default App;
