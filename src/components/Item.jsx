import { useParams } from "react-router-dom";

export default function Item() {
  const { item } = useParams();

  return <div>This is the page for displaying item {item}</div>;
}
