import React, { Component } from 'react' //rfce
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends Component {

  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => { //async 영화 api(정보, 데이터)를 가져오는 함수
    const {
      data:{data:{movies},},
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    console.log(movies);
    this.setState({isLoading:false,movies}) //키:키값 이름이 동일하면 하나만 써줘도 됨
  } 
  // axios.get()으로 영화데이터api를 가져와서 const 변수안에 저장하는데 async, await라는 비동기 방식으로 가져오겠다는 것


  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading : false});
    // },6000); //로딩 끝나는 지점
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state; //구조 분해 할당
    return (

      <section className='container'>
        {isLoading ? 
        (<div className='loader'>
          <span className='loader_text'>'Loading...'</span>
        </div>)
         :
         (<div className='movies'>
          {movies.map( (movie,index) => (<Movie key={index}
                                                id={movie.id}
                                                year={movie.year}
                                                title={movie.title}
                                                summary={movie.summary}
                                                poster={movie.medium_cover_image}
                                                genres={movie.genres}
                                          />))}
         </div>)
        
      }</section>
    )
  }
}

export default Home