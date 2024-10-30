import { LoadMoreBtnProps } from "../../types";
import s from "./LoadMoreBtm.module.css";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ click }) => {
  return (
    <div className={s.container}>
      <button onClick={click} className={s.loadBtn}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
