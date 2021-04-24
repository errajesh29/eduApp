import React, { Component } from "react";

  const subjects = [
    {
      sub: 'Mathmatics',
      select: true,
      image: 'imgSubMath'
    },
    {
      sub: 'Chemistry',
      select: false,
      image: 'imgSubChem'
    },
    {
      sub: 'Physics',
      select: false,
      image: 'imgSubPhy'
    },
    {
      sub: 'Biology',
      select: false,
      image: 'imgSubBio'
    },
  ];
  const subjectsLower = [
    {
      sub: 'English',
      select: true,
      image: 'imgSubMath'
    },
    {
      sub: 'Math',
      select: false,
      image: 'imgSubChem'
    },
    {
      sub: 'EVS',
      select: false,
      image: 'imgSubPhy'
    },
    {
      sub: 'Hindi',
      select: false,
      image: 'imgSubBio'
    },
    {
      sub: 'SST',
      select: false,
      image: 'imgSubBio'
    },
  ];
  const subjectsMiddle = [
    {
      sub: 'English',
      select: true,
      image: 'imgSubMath'
    },
    {
      sub: 'Math',
      select: false,
      image: 'imgSubChem'
    },
    {
      sub: 'Science',
      select: false,
      image: 'imgSubPhy'
    },
    {
      sub: 'Hindi',
      select: false,
      image: 'imgSubBio'
    },
    {
      sub: 'SST',
      select: false,
      image: 'imgSubBio'
    },
  ];

  const subjectsGK = [
    {
      sub: 'World',
      select: true,
      image: 'imgSubMath'
    },
    {
      sub: 'History',
      select: false,
      image: 'imgSubChem'
    },
    {
      sub: 'Geography',
      select: false,
      image: 'imgSubPhy'
    },
    {
      sub: 'India',
      select: false,
      image: 'imgSubBio'
    },
    {
      sub: 'Current Affairs',
      select: false,
      image: 'imgSubBio'
    },
  ]

const options = [ 
                { 
                  id:'GK',
                  select: true,
                  subjects : subjectsGK
                },
                {
                  id:'LKG',
                  select: false,
                  subjects : subjectsLower
                },
                {
                  id:'UKG',
                  select: false,
                  subjects : subjectsLower
                },
                {
                  id:'I',
                  select: false,
                  subjects : subjectsLower
                },
                {
                  id:'II',
                  select: false,
                  subjects : subjectsLower
                },
                {
                  id:'III',
                  select: false,
                  subjects : subjectsLower
                },
                {
                  id:'IV',
                  select: false,
                  subjects : subjectsLower
                },
                {
                  id:'V',
                  select: false,
                  subjects : subjectsLower
                },
                {
                  id:'VI',
                  select: false,
                  subjects : subjectsMiddle
                },
                {
                  id:'VII',
                  select: false,
                  subjects : subjectsMiddle
                },
                {
                  id:'VIII',
                  select: false,
                  subjects : subjectsMiddle
                },
                {
                  id:'IX',
                  select: false,
                  subjects : subjects
                },
                {
                  id:'X',
                  select: false,
                  subjects : subjects
                },
                {
                  id:'XI',
                  select: false,
                  subjects : subjects
                },
                { 
                  id:'XII',
                  select: false,
                  subjects : subjects
                }
  ];



class GradeSelector extends Component {

	state = {
		grades: options,
    selectedOption: options[0]
	}

  /* deselect last option and select new option */
  onGradeChanged(e) {
    console.log('grade changed:', e);
    
    const { grades } = this.state;
    let newSelect = {};
    const nextState = grades.map(grade => {
      if(grade.id == e.id) {
        console.log('selected:', grade);
        grade.select = true;
        newSelect = grade;
      } else if(grade.select) {
        grade.select = false;
      }
      return grade;
    })
    this.setState({grades : nextState});
    this.setState({selectedOption : newSelect});

    console.log("New Grades: ", nextState);
  }

  onSubjectChanged(sub) {

  }

  render() {
  return (
    <div>
      <span>Select Grade:</span>
      <div>
            {this.state.grades.map((option) => (
                <label>
                    {option.id}
                    <input key={option.id} style={{marginLeft:'0.20rem',marginTop:'-0.2rem', marginRight:'2rem'}}
                      value={option}
                      checked={option.select} 
                      name="platform"
                      type="radio"
                      onChange={event => this.onGradeChanged(option)}
                    />
                  
                </label>
                    
            ))}
        </div>
        <div>
            <span>Subjects:</span>
            <div>
            {this.state.selectedOption.subjects.map((subject) => (
              <label>
                {/* <input type="radio" name="test" value="small" checked = {subject.select}></input> */}
                <button key={subject.sub} style={{color:'red', marginRight:'1rem'}}>{this.state.selectedOption.id} - {subject.sub}</button>
                {/* <img src="http://placehold.it/40x60/0bf/fff&text=A"/> */}
              </label>
            ))}
            </div>
          </div>
    </div>
  );
  }
}

export default GradeSelector;