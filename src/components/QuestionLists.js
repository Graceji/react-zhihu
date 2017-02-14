import React, { Component } from 'react';
import QuestionItem from './QuestionItem';

class QuestionLists extends Component {

	render() {
		const {questions, onVote} = this.props;
		return (
			<div>
				{questions.map(q =>
					<QuestionItem
						key={q.id}
						index={q.id}
						title={q.title}
						description={q.description}
						voteCount={q.voteCount}
						onVote={onVote}
					/>
				)}
			</div>
		);
	}
}

export default QuestionLists;