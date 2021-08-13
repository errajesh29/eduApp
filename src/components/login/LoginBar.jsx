import React, { Component } from 'react';
import logo from '../../images/eduIndia_logo.png'

export default class LoginBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: '',
      email:''
    }
  }

  onInputChangeMobile(term) {
    this.setState({
      mobile: term
    });
    // this.props.onSearchTermChange(term);
  }
  
  onInputChangeEmail(term) {
    this.setState({
      email: term
    });
    // this.props.onSearchTermChange(term);
  }
  handleLoginSubmit() {

  }

  render() {
    return (
      <div style={{marginLeft:'5rem', marginTop:'1rem'}}>
        <div style={{marginLeft: '0px', marginBottom:'3rem',marginTop:'0px' }}>
            <input style={{minWidth:'6rem', width:'18%', maxWidth:'10rem', color:'black'}}
                type='number'
                placeholder = 'Mobile'
                value={this.state.mobile}
                onChange={event => this.onInputChangeMobile(event.target.value)}
            />
            <input style={{minWidth:'8rem', width:'33%', color:'black', maxWidth:'20rem', marginLeft:'20px'}}
                type='text'
                placeholder = 'Email'
                value={this.state.email}
                onChange={event => this.onInputChangeEmail(event.target.value)}
            />
            <button style={{ backgroundColor: '#252d4a', marginLeft:'20px', width:'8rem'}} onClick={() => this.handleLoginSubmit()}>Submit</button>
        </div>
      </div>
    );
  }

}