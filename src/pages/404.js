import { Container, Button } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1>404 - Page Not Found</h1>
        <p>The requested page could not be found.</p>
        <Button variant="primary" href="/">
          Go back to Homepage
        </Button>
      </div>
    </Container>
  );
};

export default NotFoundPage;
