import React, { Component } from 'react';

class AddNewQuestion extends Component {
	render() {
		return (
			<button
				className="btn btn-success"
				onClick={this.props.onToggleDisplay}
			>
				添加问题
			</button>
		)
	}
}

export default AddNewQuestion;