import { SoundOutlined } from "@ant-design/icons";
import React from "react";
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

export default BlockChord;
