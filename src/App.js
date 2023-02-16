import React from "react";
import Row from "./components/Row";
import requests from "./requests";

const App = () => {
  return (
    <div>
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
};

export default App;
