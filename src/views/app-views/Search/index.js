import { Col, Row } from 'antd/lib/grid';
import RankingContent from '../../../components/General/RankingContent';

function Search() {
    const searchSong = [
        {
            id: 1,
            title: 'Chia tay',
            singer: 'Mỹ Tâm',
            lyrics: 'Đêm nay em mơ những giấc mơ xa vời Trong cơn mơ hoang được thấy môi anh cười Anh ơi nơi đâu có biết em luôn nhớ anh Em chờ mong tình sẽ quay về Nhưng làm sao để có nhau anh đã xa rồi Lang thang em đi tìm dĩ vãng xưa hôm nào Ta chia tay nhau dù biết không bao giờ Mang con tim đau nước mắt rớt rơi vào đêm Thời gian ơi xin hãy quay lại Em ngồi đây nhìn nắng phai, hoàng hôn đã tắt Cuộc tình ngày đó đã mãi xa rồi Cuộc tình ngày đó khuất lấp chân trời Để mình em làm cánh chim bay giữa miền giông bão Chỉ còn lại nỗi nhớ giữa tim này Từng lời người nói vẫn mãi đong đầy Người ra đi mà vẫn tin anh sẽ quay về Đêm nay em mơ những giấc mơ xa vời Trong cơn mơ hoang được thấy môi anh cười Anh ơi nơi đâu có biết em luôn nhớ anh Em chờ mong tình sẽ quay về Nhưng làm sao để có nhau anh đã xa rồi Lang thang em đi tìm dĩ vãng xưa hôm nào Ta chia tay nhau dù biết không bao giờ Mang con tim đau nước mắt rớt rơi vào đêm Thời gian ơi xin hãy quay lại Em ngồi đây nhìn nắng phai, hoàng hôn đã tắt Cuộc tình ngày đó đã mãi xa rồi Cuộc tình ngày đó khuất lấp chân trời Để mình em làm cánh chim bay giữa miền giông bão Chỉ còn lại nỗi nhớ giữa tim này Từng lời người nói vẫn mãi đong đầy Người ra đi mà vẫn tin anh sẽ quay về Cuộc tình ngày đó đã mãi xa rồi Cuộc tình ngày đó khuất lấp (trái tim này đau) Để mình em làm cánh chim bay giữa miền bão giông Chỉ còn lại nỗi nhớ giữa tim này Từng lời người nói vẫn mãi quanh đây Người ra đi, giờ mất nhau anh ơi người biết Cuộc tình ngày đó đã mãi xa rồi Cuộc tình ngày đó khuất lấp (trái tim này đau) Để mình em làm cánh chim bay giữa miền giông bão Chỉ còn lại nỗi nhớ giữa tim này Từng lời người nói vẫn mãi quanh đây Người ra đi, giờ mất nhau anh ơi người biết Anh hãy quay về',
            contributor: 'Duy Võ',
            date: '1/12/2019',
        },
        {
            id: 2,
            title: 'Chia tay',
            singer: 'Hoàng Dũng',
            lyrics: 'Điều em lo lắng anh cũng thầm biết Ngay từ phút đầu tiên Ta đều sai khi cố tin rằng mình đã yêu Chỉ là nếu lỡ đặt dấu gạch hết như những câu chuyện khác Cuộc đời sẽ giống một trang sách thật buồn',
            contributor: 'Triệu Quang Minh',
            date: '17/12/2020',
        },
        {
            id: 3,
            title: 'Chia tay',
            singer: 'Bùi Anh Tuấn',
            lyrics: 'Chia tay có như là mình vô tâm chẳng nhớ nhung gì Chia tay có giống ánh mắt em khi không còn yêu anh nữa Vậy thì ta nên chia tay, chia tay nhau nhé Vì là có lẽ nếu chúng mình mai đây sẽ, sẽ yêu rất nhiều',
            contributor: 'Vương Thiện',
            date: '26/9/2017',
        },
    ];

    return (
        <div className="home-container">
            <div className="home-content">
                <Row>
                    <Col span={17}>
                        <div className="result">Kết quả tìm kiếm "chia tay"</div>
                        <div className="result-search-content">
                            {searchSong.map((a) => {
                                return (
                                    <div className="search-song">
                                        <div className="search-song-title">
                                            <a href="/">{a.title}</a> - {a.singer}
                                        </div>
                                        <p className="search-song-lyrics">{a.lyrics}</p>
                                        <div className="user-contribute">
                                            <span>{a.contributor}</span> • <span>{a.date}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                    <Col span={7}>
                        <RankingContent></RankingContent>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Search;
