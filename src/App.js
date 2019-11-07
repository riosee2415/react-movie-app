import React from "react";

function Food({ fav }) {
  console.log(fav);
  return <h3>I Like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello React Project</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
