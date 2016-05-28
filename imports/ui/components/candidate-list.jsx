import React from 'react';
import Candidate from './candidate' 

class CandidateList extends React.Component {
	render () {
		console.log(this.props.candidates);
		return (
			<div>
				{this.props.candidates.map((candidate, index) =>
					<Candidate key={index} name={candidate.name}/>
				)}
			</div>
		);
	}
}

export default CandidateList;