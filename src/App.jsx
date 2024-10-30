import "./App.css";
import { fetchImages } from "../src/services/api";
import Header from "./components/Header/Header";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSelectImg, setIsSelectImg] = useState(null);
  const [pageCounter, setPageCounter] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(page, query);
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

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (searchValue) => {
    setQuery(searchValue);
    setImages([]);
    setPage(1);
    setPageCounter(0);
  };

  const handleImgClick = (image) => {
    setIsSelectImg(image);
    setIsOpenModal(true);
  };

  const modalClose = () => {
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
