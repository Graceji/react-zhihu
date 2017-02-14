import React, { Component } from 'react';

class QuestionItem extends Component {
	constructor(props) {
		super(props);
		this.increaseVoteCount = this.increaseVoteCount.bind(this);
		this.decreaseVoteCount = this.decreaseVoteCount.bind(this);
	}
	
	increaseVoteCount() {
		const {voteCount, onVote, index} = this.props;
		const newCount = parseInt(voteCount + 1);
		onVote(index, newCount);
	}

	decreaseVoteCount() {
		const {voteCount, onVote, index} = this.props;
		const newCount = parseInt(voteCount - 1);
		onVote(index, newCount);
	}

	render() {
		const {title, description, voteCount} = this.props;
		return (
			<div>
				<div className="Item--vote">
					<button
						className="btn btn-default"
						onClick={this.increaseVoteCount}
					>
						<span className="glyphicon glyphicon-chevron-up"></span>
						<span className="voteCount">{voteCount}</span>
					</button>
					<button
						className="btn btn-default"
						onClick={this.decreaseVoteCount}
					>
						<span className="glyphicon glyphicon-chevron-down"></span>
					</button>
				</div>
				<div className="Item--content">
					<div className="Item--title">
						{title}
					</div>
					<div className="Item--description">
						{description}
					</div>
				</div>
			</div>
		);
	}
}

export default QuestionItem;