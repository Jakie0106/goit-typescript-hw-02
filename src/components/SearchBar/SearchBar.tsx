import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FormValues, SearchBarProps } from "../../types";

const SearchBar: React.FC<SearchBarProps> = ({ search }) => {
  const initialValues: FormValues = {
    query: "",
  };

  const handleSubmit = (values: FormValues): void => {
    if (values.query !== "") {
      search(values.query);
    } else {
      toast.error("You need to enter a search query.");
      return;
    }
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field type="text" name="query" className={s.input} />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
};

export default SearchBar;
