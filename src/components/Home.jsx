import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Welcome to Goose Trade</h1>
      </div>
      <div>
        <Link to="/items">
          <button>Shop now!</button>
        </Link>
      </div>
      <div>
        <div>Your one stop shop to buying and selling</div>
      </div>
    </div>
  );
}
