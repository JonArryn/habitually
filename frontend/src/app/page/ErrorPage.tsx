import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an error occurred</p>
      <p>
        <i>{error && error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
