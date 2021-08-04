import React from "react";
import PropTypes from "prop-types";

//object of foods
const foodILike = [
  {
    id:1,
    name: "Salmon",
    image: "https://content.fun-japan.jp/renewal-prod/cms/articles/content/batchsalmonsushi001jpg_2021-02-25-10-35-44.jpg",
    rating: 5
  },
  {
    id:2,
    name: "Ramen",
    image: "https://www.kikkoman.eu/fileadmin/_processed_/0/0/csm_WEB_Traditional_Fukuoka_Ramen_0af581b084.jpg",
    rating: 4
  },
  {
    id:3,
    name: "Pasta",
    image: "https://www.seriouseats.com/thmb/ekA98_89qoc1kLGnJaXuuJtIQMs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__03__20200224-carretteira-pasta-vicky-wasik-21-ffe68515b25f4b348cbde845a59d6a62.jpg",
    rating: 4.6

  },
  {
    id:4,
    name: "Cake",
    image: "https://preppykitchen.com/wp-content/uploads/2019/06/Ultimate-Chocolate-Cake-feature-1200-1084x1536.jpg",
    rating: 5
  }
]

//How to send information from a Father Component to Children Component
//inside props object 안의 fav
function Food({name, picture, rating}){
  return (
  <div>
    <h2>I like {name}</h2>
    <h4> {rating}/5</h4>
    <img src={picture} alt={name}/>
  </div>
  );
}

//propTypes contains description of prop types expected
//check if: string, number, Array, Boolean, object,node,element...
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

// Component는 HTML을 반환하는 함수
// component의 property로 fav 설
// react masic으로 props를 전송
// JS의 Map function
// key prop은 react internal use를 위한 것. 고유한 element.
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;