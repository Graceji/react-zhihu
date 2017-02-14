import React from 'react';
import AddNewQuestion from './AddNewQuestion';
import NewQuestionForm from './NewQuestionForm';
import QuestionLists from './QuestionLists';

class AppComponent extends React.Component {
	constructor(props) {
		super(props);
		const questions = [
			{
				id:1,
				title:'产品经理与程序员矛盾的本质是什么？',
				description:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
				voteCount:10
			},
			{
				id:2,
				title:'热爱编程是一种怎样的体验？',
				description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
				voteCount:8
			},
			{
				id:3,
				title:'热爱编程是一种怎样的体验？',
				description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
				voteCount:5
			}
		];

		this.state = {
			questions,
			formDisplay: false
		};

		this.onVote = this.onVote.bind(this);
		this.onAdd = this.onAdd.bind(this);
		this.onToggleDisplay = this.onToggleDisplay.bind(this);
	}

	onToggleDisplay() {
		this.setState({
			formDisplay: !this.state.formDisplay
		})
	}

	onAdd(title, description) {
		const maxId = this.state.questions
			.map(q => q.id)
			.reverse()[0];
		const addQuestion = {
			id: maxId + 1,
			title,
			description,
			voteCount: 0
		};
		let changedQuestions = this.state.questions.concat(addQuestion);
		changedQuestions = this.sortQuestion(changedQuestions);
		this.setState({
			questions: changedQuestions
		});
	}
	
	sortQuestion(questions) {
		questions.sort((a, b) => {
			return b.voteCount - a.voteCount
		});
		return questions;
	}

	onVote(id, newCount) {
		const questions = this.state.questions;

		let index;
		for (let i = 0; i < questions.length; i++) {
			if (questions[i].id === id) {
				index = i;
				break;
			}
		}
		this.state.questions[index].voteCount = newCount;
		const newQuestions = this.sortQuestion(questions);
		this.setState({
			questions: newQuestions
		});
	}
	
  render() {
    return (
      <div className="contaier">
				<div className="Question--Header">
					<h1>React问答</h1>
					<AddNewQuestion onToggleDisplay={this.onToggleDisplay} />
				</div>
				<div className="Question--body">
					<NewQuestionForm
						onAdd={this.onAdd}
						formDisplay={this.state.formDisplay}
						onToggleDisplay={this.onToggleDisplay}
					/>
					<QuestionLists
						questions={this.state.questions}
						onVote={this.onVote}
					/>
				</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
