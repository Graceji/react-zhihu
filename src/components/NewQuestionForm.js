import React, { Component } from 'react';

class NewQuestionForm extends Component {
	constructor(props) {
		super(props);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(e) {
		const { onAdd } = this.props;
		e.preventDefault();
		const title = this.input.value;
		const description = this.textarea.value;
		onAdd(title, description);
	}

	handleCancel(e) {
		e.preventDefault();
		this.props.onToggleDisplay();
	}

	render() {
		const { formDisplay } = this.props;
		const styleObj = {
			display: formDisplay ? 'block' : 'none'
		};

		return (
			<form style={styleObj}>
				<div className="form-group">
					<label htmlFor="questionTitle">
						问题
					</label>
					<input
						id="questionTitle"
						type="text"
						className="form-control"
						placeholder="您的问题的标题"
						ref={(input) => this.input = input}
					/>
				</div>
				<textarea
					className="form-control"
					rows="3"
					placeholder="问题的描述"
					ref={(textarea) => this.textarea = textarea}
					>
					</textarea>
				<div>
					<button
						className="btn btn-default"
						onClick={this.handleCancel}
					>
						取消
					</button>
					<button
						className="btn btn-success"
						onClick={this.handleAdd}
					>
						确定
					</button>
				</div>
			</form>
		)
	}
}

export default NewQuestionForm;