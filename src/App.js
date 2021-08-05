import React from "react";
import axios from "axios";
import Movie from "./Movie";

//class component: has to extend from react component and use render method to show up on screen
//state: object. dynamic data of component
//this.add()가 아닌 이유: ()는 즉시 발동, add만 해야 click할 때만

//setState(): refresh state and rerender
//compoentDidMount에서 data fetching - use axios!
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (< section class = "container" > {
      isLoading
        ? (< div clas = "loader" > <span class = "loader_text" > Loading ... < /span> <
                    /div >)
        : (< div class = "movies" > {
          movies.map(movie => { < Movie
            key = {
              movie.id
            }
            id = {
              movie.id
            }
            year = {
              movie.year
            }
            title = {
              movie.title
            }
            summary = {
              movie.summary
            }
            poster = {
              movie.medium_cover_image
            }
            />;
                        })
                    } <
                    /div >)} < /section>
        );
    }
}

export default App;