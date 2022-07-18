import {
	ArrowDownOutlined,
	ArrowUpOutlined,
	ClearOutlined,
	ExclamationCircleOutlined,
	SoundOutlined,
	UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Image, Input, Modal, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import "./_post.scss";
function Post(props) {
	const [form] = Form.useForm();
	const [requiredMark, setRequiredMarkType] = useState("optional");
	const [chords, setChords] = useState("");
	const [readMore, setReadMore] = useState(true);
	const [dataSinger, setDataSinger] = useState([
		{
			singser: "",
			tong: "",
			link: "",
		},
	]);
	const [chordFormat, setChordsFormat] = useState(chords);
	const [showLyrics, setShowLyrics] = useState([]);
	const [arrChordsUsed, setArrChordUsed] = useState([]);
	const { confirm } = Modal;

	// handle function
	const onRequiredTypeChange = ({ requiredMarkValue }) => {
		setRequiredMarkType(requiredMarkValue);
	};

	const addChords = () => {
		setChords(chords + " [] ");
	};
	const deleteText = () => {
		setChords("");
	};

	const setTextInTextArea = (e) => {
		setChords(e.target.value);
	};

	const handleReadMore = () => {
		setReadMore(!readMore);
	};

	const handleAddSinger = () => {
		setDataSinger([...dataSinger, { singer: "", tong: "", link: "" }]);
	};

	useEffect(() => {
		let format = chords;
		let arrchords = [];
		let arrlyrics = [];
		let isInChord = false;
		let l = "",
			c = "";
		for (let i = 0; i < format.length; i++) {
			// dung regex xac dinh khoang trang giua 2 dau ngoac
			if (format[i] === "[") {
				isInChord = true;
				console.log(l);
				arrlyrics.push(l);
				l = "";
			} else if (format[i] === "]") {
				isInChord = false;
				console.log(c);
				arrchords.push(c);
				c = "";
			} else {
				if (isInChord) c += format[i];
				else l += format[i];
			}
		}

		let newFormat = [];

		for (let i = 0; i < arrchords.length; i++) {
			newFormat = [
				...newFormat,
				{ arraychords: arrchords[i], arraylyrics: arrlyrics[i] },
			];
		}
		setArrChordUsed(arrchords);
		setShowLyrics(newFormat);
		setChordsFormat(format);
	}, [chords]);

	const handleDeleteSinger = (index) => {
		console.log(index);
		let newArrCPN = dataSinger.filter();
		setDataSinger(newArrCPN);
	};

	useEffect(() => {
		let newArrChordsUsed = [...new Set(arrChordsUsed)];
		// console.log(arrChordsUsed);
		setTimeout(() => {
			setArrChordUsed(newArrChordsUsed);
		}, 1000);
	}, [arrChordsUsed]);
	// confirm
	const showConfirm = () => {
		confirm({
			title: "Bạn chắc chắn muốn xóa hết nội dung ?",
			icon: <ExclamationCircleOutlined />,
			content: "Some descriptions",

			onOk() {
				deleteText();
			},

			onCancel() {
				console.log("Cancel");
			},
		});
	};

	return (
		<div className="post_container">
			<h2>
				Đăng bài hát <UploadOutlined />
			</h2>
			<div className="wrapper-layout">
				<div className="form">
					<Form
						form={form}
						layout="vertical"
						initialValues={{
							requiredMarkValue: requiredMark,
						}}
						onValuesChange={onRequiredTypeChange}
						requiredMark={requiredMark}
					>
						<Form.Item label="Tên bài hát:" required>
							<Input placeholder="Ví dụ: Cát Bụi" />
						</Form.Item>
						<Form.Item label="Lời bài hát và hợp âm:" required>
							<div className="format">
								<Button>Định dạng</Button>
								<Button>Nhập dòng</Button>
								<Tooltip title="Nâng tông">
									<Button>
										<ArrowUpOutlined />
									</Button>
								</Tooltip>
								<Tooltip title="Hạ tông">
									<Button>
										<ArrowDownOutlined />
									</Button>
								</Tooltip>
								<Tooltip title="Xóa hết">
									<Button onClick={showConfirm}>
										<ClearOutlined />
									</Button>
								</Tooltip>
								<Tooltip title="Chèn hợp âm">
									<Button onClick={addChords}>[ ]</Button>
								</Tooltip>
								<Button>Default Button</Button>
							</div>
							<Input.TextArea
								size={"large"}
								style={{ height: "400px", minHeight: "400px" }}
								placeholder="Lời và hợp âm..."
								value={chords}
								onChange={setTextInTextArea}
							/>
						</Form.Item>
					</Form>
					<div className="view-chord">
						<p>Xem trước</p>
						<div>
							{/* <Input.TextArea
								size={"large"}
								// style={{ height: "400px", minHeight: "400px" }}
								placeholder="Xem trước..."
								value={chordFormat}
								onChange={setTextInTextArea}
								disabled
							/> */}
							{showLyrics?.map((item) => (
								<>
									<Tooltip
										title={
											// eslint-disable-next-line jsx-a11y/alt-text
											<img
												style={{ maxWidth: "100px", margin: "20px" }}
												src="https://80-20agency.com/wp-content/uploads/2021/07/spotify-logo-vector.png"
											/>
										}
									>
										<span
											style={{
												color: "red",
												padding: "0px 4px 0px 4px",
												verticalAlign: "middle",
											}}
										>
											[{item.arraychords}]
										</span>
									</Tooltip>

									<p> {item.arraylyrics} </p>
								</>
							))}
						</div>
					</div>

					<div className="form-info">
						<Form
							form={form}
							layout="vertical"
							initialValues={{
								requiredMarkValue: requiredMark,
							}}
							onValuesChange={onRequiredTypeChange}
							requiredMark={requiredMark}
						>
							<div className="info-cre">
								<Form.Item label="Tác giả:" required>
									<Input placeholder="Ví dụ: Trịnh Công Sơn..." />
								</Form.Item>
								<Form.Item label="Thể loại:" required>
									<Input placeholder="Ví dụ: Nhạc trữ tình..." />
								</Form.Item>
							</div>
							{dataSinger?.map((item, index) => (
								<div key={index}>
									<FormSinger
										handleDeleteSinger={() => handleDeleteSinger(index)}
										dataSinger={item}
									/>
								</div>
							))}
							<Form.Item>
								<Button onClick={handleAddSinger}>Thêm ca sĩ</Button>
							</Form.Item>
						</Form>
					</div>

					<div className="avatar-song">
						<label>Ảnh nền: </label>
						<Image
							src="https://80-20agency.com/wp-content/uploads/2021/07/spotify-logo-vector.png"
							width={"250px"}
						/>
					</div>

					<Button
						style={{
							margin: "50px auto",
							background: "blue",
							color: "white",
							borderRadius: "4px",
						}}
					>
						Đăng Bài Hát
					</Button>
				</div>

				<div className="chords-used">
					<p style={{ marginBottom: "6px" }}>Quy định chung:</p>
					<div className="role">
						{readMore
							? `Cảm ơn bạn rất nhiều ^_^ ...vì đã đăng hợp âm của bạn lên Hợp Âm
						Chuẩn! Cộng đồng Guitar Việt Nam cần những người như bạn. Để có chất
						lượng hợp âm tốt hơn, bạn vui lòng... Viết đủ hợp âm, đừng dùng
						"tương tự", "như trên"... vì nhiều người mới tập chơi họ không
						rành...`
							: `Cảm ơn bạn rất nhiều ^_^ ...vì đã đăng hợp âm của bạn lên Hợp Âm
						Chuẩn! Cộng đồng Guitar Việt Nam cần những người như bạn. Để có chất
						lượng hợp âm tốt hơn, bạn vui lòng... Viết đủ hợp âm, đừng dùng
						"tương tự", "như trên"... vì nhiều người mới tập chơi họ không
						rành...Cảm ơn bạn rất nhiều ^_^ ...vì đã đăng hợp âm của bạn lên Hợp Âm
						Chuẩn! Cộng đồng Guitar Việt Nam cần những người như bạn. Để có chất
						lượng hợp âm tốt hơn, bạn vui lòng... Viết đủ hợp âm, đừng dùng
						"tương tự", "như trên"... vì nhiều người mới tập chơi họ không
						rành...`}

						<Button
							style={{
								border: "none",
								background: "transparent",
								outline: "none",
								boxShadow: "none",
							}}
							onClick={handleReadMore}
						>
							{readMore ? "Xem thêm" : "Ẩn bớt"}
						</Button>
					</div>
					<p style={{ padding: "7px 0px" }}>Hợp âm sử dụng: </p>
					<div className="chords-table">
						<div className="array-chords">
							<p>Hợp âm: {arrChordsUsed?.map((item) => item + ",")}</p>
						</div>
						<div className="wrapper-blockchord">
							{arrChordsUsed?.map((item) => (
								<BlockChord chord={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const BlockChord = ({ chord }) => {
	return (
		<div className="blockChord">
			<div>
				<p>
					{chord} <SoundOutlined />
				</p>
			</div>
		</div>
	);
};

const FormSinger = ({ handleDeleteSinger }) => {
	return (
		<div className="info-singer">
			<Form.Item label="Ca sĩ: " required>
				<span onClick={handleDeleteSinger}>( Xóa )</span>
				<Input placeholder="Ví dụ: Đan Trường..." />
			</Form.Item>
			<Form.Item label="Tông:" required>
				<Input placeholder="Ví dụ: Am" />
			</Form.Item>
			<Form.Item label="Link nhạc:" required>
				<Input placeholder="Ví dụ: https://mp3.zing.vn/..." />
			</Form.Item>
		</div>
	);
};

export default Post;
