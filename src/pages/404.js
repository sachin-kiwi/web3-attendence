import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <div className="text-center">
          <Link href="/">
            <Button variant="primary">Go back to Homepage</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
