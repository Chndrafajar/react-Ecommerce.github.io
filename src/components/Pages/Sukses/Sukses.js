import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sukses() {
  return (
    <div className="mt-4 text-center">
      <Image src="asset/banner/succes.png" width="300" />
      <h2>Order Success</h2>
      <p>Thank You For Ordering!</p>
      <Button variant="danger" as={Link} to="/market">
        Back
      </Button>
    </div>
  );
}
