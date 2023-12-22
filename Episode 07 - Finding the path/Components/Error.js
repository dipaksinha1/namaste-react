import { useRouteError } from "react-router-dom";
export const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h2>Error </h2>;
      <h1>{error.statusText}</h1>
      <h1>
        Error Status:{error.status} & Error Message:{error.data}
      </h1>
    </>
  );
};
