import React, { Component } from 'react';
import SearchBar from '../youtube/search_bar';
import QuizApp from '../quiz-app/QuizApp';
class StudentView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // videoSearch(term) {
    //     YTSearch({key: API_KEY, term: term}, videos => {
    //     this.setState({
    //       videos: videos,
    //       selectedVideo: videos[0],
    //     });
    //   });
    // }

    render() {
        return (
        <div>
            <div className="row">
                <SearchBar />
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

export default StudentView;