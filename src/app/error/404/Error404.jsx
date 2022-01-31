import { Button, Container } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import classNames from 'classnames';
import styles from './Error404.scss';

const Error404 = () => (
  <main
    className={classNames(styles.error, 'justify-content-center')}
    role="main"
  >
    <Container className="text-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <LinkContainer to="/">
        <Button color="secondary" outline>
          <span>&larr; Back to Homepage</span>
        </Button>
      </LinkContainer>
    </Container>
  </main>
);

export default Error404;
