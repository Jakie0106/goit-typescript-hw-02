export interface Image {
  id: string;
  urls: {
    small: string;
    regular?: string;
  };
  alt_description: string;
}

export interface FetchImagesResponse {
  results: Image[];
  total: number;
}

export interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

export interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

export interface SearchBarProps {
  search: (query: string) => void;
}

export interface FormValues {
  query: string;
}

export interface HeaderProps {
  search: SearchBarProps["search"];
}

export interface LoadMoreBtnProps {
  click: () => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  image: Image | null;
  isClose: () => void;
}
