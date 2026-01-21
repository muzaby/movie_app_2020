import propTypes from "prop-types";

function Food({ fav, image, rank }) {
  return (
    <div>
      <h3>I love {fav}</h3>
      <img src={image} alt={fav}/>
      <p>Rank: {rank}</p>
    </div>
  );
}

Food.prototype = {
  fav: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  rank: propTypes.number.isRequired
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza-jpg",
    rank: 5.0
  },
  {
    id: 2,
    name: "samgiopsal",
    image: "https://i.namu.wiki/i/oFHlYDjoEh8f-cc3lNK9jAemRkbXxNGwUg7XiW5LGS6DF1P2x8GCeNQxbQhVIwtUS1u53YPw-uoyqpmLtrGNJA.webp",
    rank: 4.5
  },
  {
    id: 3,
    name: "kimchi",
    image: "https://i.namu.wiki/i/3u7KQ8jVXWJMJpioMNBo5bFb7NrMd1jUbJrGXy99vSgh57D2w0BHG3RlEnawqyRlfAuTihp37sPnlCKX3IlKNg.webp",
    rank: 4.7
  },
];

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      {foodILike.map(dish => <Food key={dish.id} fav={dish.name} image={dish.image} rank={dish.rank} />)}
    </div>
  );
}

export default App;
