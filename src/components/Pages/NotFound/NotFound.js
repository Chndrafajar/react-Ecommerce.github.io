import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="NotFound">
      <Container className="mt-3">
        <div className="mt-4 text-center">
          <Image src="asset/item/notfound.png" width="300" />
          <h2>Oooopss!</h2>
          <p>Page Not Found!</p>
          <Button variant="danger" as={Link} to="/market">
            Back
          </Button>
        </div>
      </Container>
    </div>
  );
}
