import React, { Component } from 'react';
import CreateQuizApp from '../quiz-app/CreateQuizApp';
class TeacherView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            video_url: 'https://www.youtube.com/embed/vqpN-5HpmkQ',
        }
    }

    onYoutubeUrlChanged() {

    }
    render() {
        return (
        <div>
            <div className="row">
                <div>
                    <input style={{color:'black', width:'100%', marginLeft:'1rem'}} type='text' value = {this.state.video_url} onChange={this.onYoutubeUrlChanged} placeholder="Copy paste youtube url..." />
                    <iframe width='400px' height='300px'
                        src={this.state.video_url}>
                    </iframe>
                </div>
            </div>
            <CreateQuizApp />
          </div>
        );
    }

}

export default TeacherView;