import React, { Component } from "react";

const options = ['Pre','LKG','UKG','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'
    ];
  const filmsByTati = [
    {
      id: 1,
      title: "Jour de fête",
      releasedYear: 1949
    },
    {
      id: 2,
      title: "Play time",
      releasedYear: 1967
    },
    {
      id: 3,
      releasedYear: 1958,
      title: "Mon Oncle"
    }
  ];

class GradeSelector extends Component {

	state = {
		selectedOption: options[0],
		selectedTatiFilm: filmsByTati[0],
	}

  render() {
  return (
    <div>
      <label>Select Grade:</label>
      <div>
            {options.map((option) => (
                <label>
                    {option}                 
                    <input style={{marginLeft:'0.20rem',marginTop:'-0.2rem', marginRight:'2rem'}}
                    value={option}
                    name="platform"
                    type="radio"
                    onChange={option}
                    />
                </label>
                    
            ))}
        </div>
    </div>
  );
        }
}

export default GradeSelector;