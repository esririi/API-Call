import { useState } from "react";
import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./api";
import ImageList from "./Components/ImagesList";

function App() {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images}/>
    </div>
  );
}

export default App;
