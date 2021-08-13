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
import StudentView from './components/screen-mode/StudentView';
import TeacherView from './components/screen-mode/TeacherView';
import logo from '../src/images/eduIndia_logo.png';
import './App.css'

const API_KEY = 'AIzaSyC7OfeCVQd89PuG2GiASKAzQEuD-4wQ5zE'; // 'AIzaSyDKjRPdaV2oKrhB1xN0fHY5F35TEV33EKk';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      student: false,  //student or teacher
      teacher: true
    }

    //this.videoSearch('Class 1 English');
  }

  // videoSearch(term) {
  //     YTSearch({key: API_KEY, term: term}, videos => {
  //     this.setState({
  //       videos: videos,
  //       selectedVideo: videos[0],
  //     });
  //   });
  // }
  onStudentChanged() {
    this.setState({student: true});
    this.setState({teacher: false});
  }

  onTeacherChanged() {
    this.setState({student: false});
    this.setState({teacher: true});
  }

  render() {
    //throttles the live updating of search results
    const vidSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div>
        <div>
          <label style={{height:'60px'}}>
              <div style={{maxWidth:'45rem'}} >
                <label style={{ textAlign: 'top' , marginLeft:'0.2rem'}}>
                  <span style={{marginLeft:'5rem'}}>Student</span> 
                  <input type='radio' checked={this.state.student} onChange={event => this.onStudentChanged()}/>
                  <span style={{marginLeft:'3rem'}}>Teacher</span> 
                  <input type='radio' checked={this.state.teacher} onChange={event => this.onTeacherChanged()}/>
                  <LoginBar/>
                  <img style={{marginTop:'-13rem', marginLeft:'-2rem', height:'60px', width:'50px'}} src={logo} />
 
                </label>
                
              </div>
          </label>
        </div>
        <div className="row radio-buttons">
          <GradeSelector/>
        </div>
        { (this.state.student) ?
          <div className="row">
            <StudentView/>
          </div> : (this.state.teacher) ?
          <div className="row">
            <TeacherView/>
          </div> : <span>No View</span>
        }
      </div>
    );
  }
}
export default App;
