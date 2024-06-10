import "./styles.css";
import BookSearch from "./Components/BookSearch";
import Bookshelf from "./Components/Bookshelf";

export default function App() {
  return (
    <div className="App">
      <BookSearch />
      <Bookshelf />
    </div>
  );
}
