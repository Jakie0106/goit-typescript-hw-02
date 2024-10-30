import s from "./LoadMoreBtm.module.css";

const LoadMoreBtn = ({ click }) => {
  return (
    <div className={s.container}>
      <button onClick={click} className={s.loadBtn}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
