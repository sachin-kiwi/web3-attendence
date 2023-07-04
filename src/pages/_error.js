import { Container, Button } from 'react-bootstrap';

function Error({ statusCode }) {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1>
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
          </h1>
          <Button variant="primary" href="/">
            Go back to Homepage
          </Button>
        </div>
      </Container>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
