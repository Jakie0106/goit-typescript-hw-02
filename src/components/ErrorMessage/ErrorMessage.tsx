import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={s.container}>
      <h2 className={s.errorText}>Server Error</h2>
    </div>
  );
};

export default ErrorMessage;
