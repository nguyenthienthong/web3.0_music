import {
	DislikeFilled,
	DislikeOutlined,
	LikeFilled,
	LikeOutlined,
} from "@ant-design/icons";
import {
	Avatar,
	Button,
	Comment,
	Form,
	Input,
	List,
	Select,
	Tooltip,
} from "antd";
import moment from "moment";
import React, { createElement, useState } from "react";
const { TextArea } = Input;
const { Option } = Select;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
	<>
		<Form.Item>
			<TextArea
				rows={4}
				onChange={onChange}
				value={value}
				placeholder={"Bình luận ý kiến của bạn ..."}
			/>
		</Form.Item>
		<Form.Item>
			<Button
				htmlType="submit"
				loading={submitting}
				onClick={onSubmit}
				type="primary"
			>
				Đăng bình luận
			</Button>
		</Form.Item>
	</>
);

const App = () => {
	const [comments, setComments] = useState([]);
	const [submitting, setSubmitting] = useState(false);
	const [value, setValue] = useState("");
	const handleSubmit = () => {
		if (!value) return;
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			setValue("");
			setComments([
				...comments,
				{
					author: "Han Solo",
					avatar: "https://joeschmoe.io/api/v1/random",
					content: <p>{value}</p>,
					datetime: moment().fromNow(),
				},
			]);
		}, 1000);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<Comment
				avatar={
					<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
				}
				content={
					<Editor
						onChange={handleChange}
						onSubmit={handleSubmit}
						submitting={submitting}
						value={value}
					/>
				}
			/>

			<Select defaultValue={"Mới nhất"}>
				<Option value="Mới nhất"></Option>
				<Option value="Gần đây"></Option>
			</Select>
			{comments.length > 0 && <CommentList comments={comments} />}
			<ExampleComment>
				<ExampleComment>
					<ExampleComment />
					<ExampleComment />
				</ExampleComment>
			</ExampleComment>
		</>
	);
};
const ExampleComment = ({ children }) => (
	<Comment
		actions={[<span key="comment-nested-reply-to">Reply to</span>]}
		author={<a>Han Solo</a>}
		avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
		content={
			<p>
				We supply a series of design principles, practical patterns and high
				quality design resources (Sketch and Axure).
			</p>
		}
	>
		{children}
	</Comment>
);
const CommentList = ({ comments, setLikes, setDislikes }) => {
	const like = () => {
		setLikes(1);
		setDislikes(0);
	};

	const dislike = () => {
		setLikes(0);
		setDislikes(1);
	};
	const actions = [
		<Tooltip key="comment-basic-like" title="Like">
			<span onClick={like}>
				{createElement(comments.likes > 0 ? LikeFilled : LikeOutlined)}
				<span className="comment-action">{comments.likes}</span>
			</span>
		</Tooltip>,
		<Tooltip key="comment-basic-dislike" title="Dislike">
			<span onClick={dislike}>
				{React.createElement(
					comments.dislikes > 0 ? DislikeFilled : DislikeOutlined
				)}
				<span className="comment-action">{comments.dislikes}</span>
			</span>
		</Tooltip>,
		<span key="comment-basic-reply-to">Reply to</span>,
	];
	return (
		<List
			className="comment-list"
			header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
			itemLayout="horizontal"
			dataSource={comments}
			renderItem={(comments) => (
				<Comment
					actions={actions}
					author={<a href="/">{comments.author}</a>}
					avatar={<Avatar src={comments.avatar} alt="Han Solo" />}
					content={<p>{comments.content}</p>}
					datetime={
						<Tooltip title={comments.datetime}>
							<span>{comments.datetime}</span>
						</Tooltip>
					}
				/>
			)}
		/>
	);
};
export default App;
