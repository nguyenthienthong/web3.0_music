import {
  AppstoreOutlined,
  ColumnHeightOutlined,
  PauseOutlined,
  TagsOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Image,
  Segmented,
  Select,
  Tooltip,
  TreeSelect,
} from "antd";
import React, { useEffect, useState, useRef } from "react";
import BlockChord from "../../../components/BlockChord/BlockChord";
import Comment from "../../../components/Comment/Comment";
import "./detail_items.scss";
import { Link, Element } from "react-scroll";
const Detail_items = () => {
  const [arrChordUsed, setArrChordUsed] = useState([]);
  const [showLyrics, setShowLyrics] = useState([]);
  const [tong, setTong] = useState(0);
  const [fontSizeText, setFontSizeText] = useState(15);
  const [turnOnLineHeight, setTurnOnLineHeight] = useState(false);
  const [value, setValue] = useState();
  const [scroll, setScroll] = useState(0);
  const { TreeNode } = TreeSelect;
  const { Option } = Select;

  const dataSong = `Em ơi đừng [Am]khóc bóng tối trước mắt sẽ bắt em [Em]đi.
	Em ơi đừng [Dm]lo em ơi đừng cho tương lai vụt [E7]tắt.
	Sâu trong màu [Am]mắt có chút tiếc nuối phút cuối chỉ [Em]vì.
	Em đâu hề [Dm]sai em đâu thể mãi để trái tim [E7]đau.
	 
	Không còn [Am]tương lai, em cũng chẳng còn [Em]thương ai.
	Sau bao niêm [Dm]đau em mong rằng con tim em dừng [E7]lại.
	Nỗi nhớ này [Am]lâu phai, nhốt em trong 1 [Em]lâu đài.
	Lâu đài của [Dm]những cơn đau bất [E7]tận.
	 
	Vì sao em phải [Am]khóc? Có đáng để buồn [Em]đâu.
	Tình yêu như cơn [Dm]lốc thoáng phút chốc lướt qua thật [E7]mau.
	Vì sao em phải [Am]khóc? Có đáng để buồn [Em]đâu.
	Rượu kề môi em [Dm]nốc, thoáng phút chốc đã vơi u [E7]sầu.
	 
	Verse 2:
	[Am]Buông bàn tay để chấm hết, [Em]tất cả thứ làm em buồn,
	[Dm]bao gồm cả cuộc đời của [E7]em.
	[Am]Em à cho dù có khóc, [Em]cũng sẽ đến ngày phải quên,
	[Dm]thiên đường vẫn chờ ngày em [E7]đến`;

  // handle function
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const onChangeCheckBox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleSetActive = (to) => {
    console.log(to);
  };
  // useEffect

  useEffect(() => {
    let format = dataSong;
    let arrchords = [];
    let arrlyrics = [];
    let isInChord = false;
    let checkSpace = "";
    let l = "",
      c = "";
    for (let i = 0; i <= format.length + 10; i++) {
      // dung regex xac dinh khoang trang giua 2 dau ngoac
      if (format[i] === "[") {
        checkSpace = "";
        isInChord = true;
        arrlyrics.push(l);
        l = "";
      } else if (format[i] === "]") {
        let text = checkSpace.trim().replace(/\s+/g, "");
        if (text !== "") {
          isInChord = false;
          arrchords.push(`[${c}]`);
          c = "";
        }
      } else {
        checkSpace += format[i];
        if (isInChord) c += format[i];
        else l += format[i];
      }
    }

    let newFormat = [];

    for (let i = 0; i < arrchords.length; i++) {
      newFormat = [
        ...newFormat,
        {
          arraychords: arrchords[i],
          arraylyrics: arrlyrics[i],
        },
      ];
    }
    let newArrChordsUsed = [...new Set(arrchords)];
    setArrChordUsed(newArrChordsUsed);
    setShowLyrics(newFormat);
  }, [dataSong]);

  return (
    <div>
      <div className="contentSpacing">
        <div className="back_color"></div>
        <div className="linear_gr"></div>
        <div className="img_content">
          <Image src="https://i.scdn.co/image/ab67616d0000b273c01aa2db25e66a26a4c6488b" />
        </div>

        <div className="content_body">
          <span className="content_body__title">
            <p className="type_element">Vì mẹ anh bắt chia tay</p>
          </span>
          <div className="tradeStation--price">
            <div className="tradeStation--price-container">
              <Tooltip title="ATH">
                <img
                  className="pointer"
                  src="	https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt=""
                ></img>
              </Tooltip>
              <div className="price--amount">0,1</div>
            </div>

            <div className="price--fiat-amount-secondary">($106,79)</div>
          </div>

          <div className="content_body__category">
            <button className="btn buy_now">Buy Now</button>
            <button className="btn make_offer">Make offer</button>
          </div>

          <div className="content_body__introduce">
            <span className="content_body__introduce__items">Miu Lê</span>
            <span className="dots"></span>
            <span className="content_body__introduce__items">Karik</span>
            <span className="dots"></span>
            <span className="content_body__introduce__items">
              Châu Đăng Khoa
            </span>
            <span className="dots"></span>
            <span className="content_body__introduce__items">2022</span>
          </div>
        </div>
      </div>
      <div className="song-main-content">
        <div className="info-poster">
          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            // onClick={handleSetActive}
          >
            Test 1
          </Link>
        </div>
        <div className="control">
          <ul>
            <li>
              <Button
                onClick={() => {
                  setTong(tong - 1);
                }}
              >
                -
              </Button>
              <Select
                defaultValue={tong < 0 ? setTong(0) : tong}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <Button
                onClick={() => {
                  setTong(tong + 1);
                }}
              >
                +
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  setFontSizeText(fontSizeText - 1);
                }}
              >
                -
              </Button>
              <Select
                defaultValue={
                  fontSizeText < 10 ? setFontSizeText(10) : fontSizeText + "pt"
                }
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <Button
                onClick={() => {
                  setFontSizeText(fontSizeText + 1);
                }}
              >
                +
              </Button>
            </li>
            <li>
              <Segmented
                onChange={() => setTurnOnLineHeight(!turnOnLineHeight)}
                options={[
                  {
                    label: "Gộp Dòng",
                    value: "List",
                    icon: <PauseOutlined />,
                  },
                  {
                    label: "Tách Dòng",
                    value: "Kanban",
                    icon: <ColumnHeightOutlined />,
                  },
                ]}
              />
            </li>
            <li>
              <TreeSelect
                showSearch
                value={value}
                dropdownStyle={{
                  maxHeight: 400,
                  overflow: "auto",
                }}
                className="cuontrang"
                placeholder="Cuộn trang"
                allowClear
                multiple
                treeDefaultExpandAll
                onChange={onChange}
              >
                <TreeNode value="parent 1" title="1pt"></TreeNode>
                <TreeNode value="parent 1" title="5pt"></TreeNode>
                <TreeNode value="parent 1" title="10pt"></TreeNode>
                <TreeNode value="parent 1" title="15pt"></TreeNode>
                <TreeNode value="parent 1" title="20pt"></TreeNode>
              </TreeSelect>
            </li>
            <li>
              <Segmented
                options={[
                  {
                    label: "Gộp Cột",
                    value: "gop",
                    icon: <UnorderedListOutlined />,
                  },
                  {
                    label: "Chia Cột",
                    value: "chia",
                    icon: <AppstoreOutlined />,
                  },
                ]}
              />
            </li>
            <li>
              <Checkbox onChange={onChangeCheckBox}>Hợp âm dễ</Checkbox>
            </li>
          </ul>
          <ul>
            <Button>Báo lỗi</Button>
            <Button>Chỉnh sửa hợp âm</Button>
          </ul>
        </div>
        <div className="song_lyric">
          <div className="lyric-page-divider">
            Trang 1<span className="total-page"> / 2</span>
          </div>
          <div className={turnOnLineHeight ? "pre" : "pre inline"}>
            <div className="song-lyric-note">
              <div className="chord_lyric_line text_only">Capo 3</div>
            </div>

            <div className="chord_lyric_line">
              {showLyrics?.map((item) => (
                <>
                  <span
                    className="hopamchuan_lyric"
                    style={{
                      fontSize: fontSizeText,
                      lineHeight: turnOnLineHeight ? "60px" : "30px",
                    }}
                  >
                    {item?.arraylyrics.replace(".", "." + <br />)}
                  </span>
                  <span className="hopamchuan_chord_inline">
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
                        className="hopamchuan_chord"
                        style={{ fontSize: fontSizeText }}
                      >
                        {item.arraychords}
                      </span>
                    </Tooltip>
                  </span>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="view-chord">
          <h3>
            <TagsOutlined />
            <span style={{ margin: "0 10px" }}>Danh sách hợp âm</span>
            <Button>Guitar</Button>
            <Button>Unkulele</Button>
            <Button>Piano</Button>
            <Button></Button>
          </h3>
          <div className="wrapper-blockchord">
            {arrChordUsed?.map((item) => (
              <BlockChord chord={item} />
            ))}
          </div>
        </div>
        <div className="container_comment">
          <h3>BÌNH LUẬN</h3>
          <Comment />
        </div>
      </div>
      <div className="foot"></div>
      <Element name="test1" className="element">
        test 1
      </Element>
    </div>
  );
};

export default Detail_items;
