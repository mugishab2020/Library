import { Link, useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  if (error instanceof Response) {
    // Checking if it's a specific HTTP error(500 in this case)
    if (error.status === 500) {
      return (
        <div className="error500">
          <h1 className="error500__t1">500 Internal Server Error</h1>
          <p className="error500__t1">
            Something went wrong on our end. Please try again later.
          </p>
          <img
            className="error500__sad"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/dead-158-755435.png?f=webp&w=512"
            alt="500 error"
          />
        </div>
      );
    }
  }
  return (
    <div>
      {error ? (
        <div>An Error Occured</div>
      ) : (
        <div className="error404">
          <div className="error404__content">
            <h1 className="error404__t1">404</h1>
            <p className="error404__t2">Oops... page not found!</p>
            <img
              className="error404__sad"
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/nerdy-1539025-1304212.png?f=webp&w=512"
              alt="404 error"
              width={100}
              height={100}
            />
            <p className="redirect-link">
              Go to{" "}
              <Link to={"/"} style={{ color: "#00628B" }}>
                Home Page
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ErrorPage;
