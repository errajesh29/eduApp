import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import './style/style.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/youtube/search_bar';
import VideoList from './components/youtube/video_list';
import VideoDetail from './components/youtube/video_detail';
import QuizApp from './components/quiz-app/QuizApp';
import LoginBar from './components/login/LoginBar';
import GradeSelector from './components/grade-selector/GradeSelector';
import QuizCreate from './components/quiz/CreateQuiz';
import Create from './components/quiz/manage/Create';

const API_KEY = 'AIzaSyC7OfeCVQd89PuG2GiASKAzQEuD-4wQ5zE'; // 'AIzaSyDKjRPdaV2oKrhB1xN0fHY5F35TEV33EKk';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      createQuiz : false
    }

    this.videoSearch('Class 1 English');
  }

  videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    //throttles the live updating of search results
    const vidSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (

      <div>
        <div className="row">
          <LoginBar/>
        </div>
        <div className="row radio-buttons">
          <GradeSelector/>
        </div>
        <div className="row">
          <SearchBar onSearchTermChange={vidSearch}/>
        </div>
        <div className="row">
          <div>
            {/* <VideoDetail video={this.state.selectedVideo} /> */}
            <iframe width='100%' height='400px'
            src="https://www.youtube.com/embed/vqpN-5HpmkQ">
              </iframe>
          </div>
          <div>
            <QuizApp/>
          </div>
        </div>
        <div className="row">
          {/* <div class="col-sm-3 quizlist" >
            <Create/>
          </div> */}
          {/* <div class="col-sm-3 tubelist" >
              <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}
              videos={this.state.videos}
             />
          </div> */}
        </div>

      </div>
    );
  }
}
export default App;
