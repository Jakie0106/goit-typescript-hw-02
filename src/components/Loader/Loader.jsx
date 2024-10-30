import { ColorRing } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderContainer}>
      <ColorRing
        height="40"
        width="40"
        radius="5"
        color="green"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
