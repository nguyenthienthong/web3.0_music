import { Col, Row } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import RankingContent from '../../../components/General/RankingContent';

function Home() {
    const topSearch = [
        {
            i: 1,
            title: 'Vài câu nói có khiến người thay đổi?',
            musician: 'Đoàn Thế Lân (Monstar Grey-D)',
            views: '4176',
        },
        {
            i: 2,
            title: 'Diễn Xưa',
            musician: 'Hồng Nhung, Khánh Ly, Lệ Quyên',
            views: '2292',
        },
        {
            i: 3,
            title: 'Ai chung tình được mãi',
            musician: 'Đinh Tùng Huy',
            views: '2106',
        },
        {
            i: 4,
            title: 'Có Ai Thương Em Như Anh (#Catena)',
            musician: 'Tóc Tiên, Avin Lu, Y Lux',
            views: '1971',
        },
        {
            i: 5,
            title: 'Tệ Thật, Anh Nhớ Em',
            musician: 'Thanh Hưng',
            views: '1799',
        },
        {
            i: 6,
            title: 'Ánh Sao Và Bầu Trời',
            musician: 'T.R.I',
            views: '1787',
        },
        {
            i: 7,
            title: 'Tình đắng như ly cà phê',
            musician: 'Ngơ, Nân',
            views: '1733',
        },
        {
            i: 8,
            title: 'Một Ngàn Nỗi Đau',
            musician: 'Văn Mai Hương',
            views: '1684',
        },
        {
            i: 9,
            title: 'Bước Qua Nhau',
            musician: 'Vũ.',
            views: '1415',
        },
        {
            i: 10,
            title: 'Tuổi Đá Buồn',
            musician: 'Quang Dũng, Khánh Ly',
            views: '1339',
        },
        {
            i: 11,
            title: 'Một Đêm Say',
            musician: 'Thịnh Suy, Anie Như Thuỳ',
            views: '1327',
        },
        {
            i: 12,
            title: 'Hong Kong 1',
            musician: 'Nguyễn Trọng Tài',
            views: '1200',
        },
        {
            i: 13,
            title: 'Bên Trên Tầng Lầu',
            musician: 'Tăng Duy Tân',
            views: '1149',
        },
        {
            i: 14,
            title: 'Nàng Thơ',
            musician: 'Nguyễn Hoàng Dũng',
            views: '1125',
        },
        {
            i: 15,
            title: 'Lạ Lùng',
            musician: 'Vũ',
            views: '1028',
        },
        {
            i: 16,
            title: 'Cánh Hồng Phai',
            musician: 'Trấn Thành, Hoàng Yến Chibi',
            views: '972',
        },
        {
            i: 17,
            title: 'Cảm Ơn Vì Tất Cả',
            musician: 'Anh Quân Idol',
            views: '946',
        },
        {
            i: 18,
            title: 'Tháng Tư Là Lời Nói Dối Của Em',
            musician: 'Hà Anh Tuấn, Bảo Uyên, Phạm Toàn Thắng',
            views: '912',
        },
        {
            i: 19,
            title: 'Hoa Nở Không Màu',
            musician: 'Hoài Lâm',
            views: '880',
        },
        {
            i: 20,
            title: 'Một Nhà',
            musician: 'Da Lab, Vicky Nhung',
            views: '847',
        },
        {
            i: 21,
            title: 'Đế Vương',
            musician: 'Đình Dũng',
            views: '843',
        },
        {
            i: 22,
            title: 'Đường Tôi Chở Em Về',
            musician: 'buitruonglinh',
            views: '842',
        },
        {
            i: 23,
            title: 'Ước Mơ Của Mẹ',
            musician: 'Văn Mai Hương , Cara',
            views: '792',
        },
        {
            i: 24,
            title: '2AM',
            musician: 'JustaTee, BigDaddy',
            views: '772',
        },
        {
            i: 25,
            title: 'Gió vẫn hát',
            musician: 'Long Phạm, Phương Dung Socola',
            views: '748',
        },
        {
            i: 26,
            title: 'Ba Kể Con Nghe',
            musician: 'Nguyễn Hải Phong, Dương Trần Nghĩa, Bập Bênh Team',
            views: '739',
        },
        {
            i: 27,
            title: 'Bao Tiền Một Mớ Bình Yên?',
            musician: '14 Casper, Bon',
            views: '699',
        },
        {
            i: 28,
            title: 'Còn Tuổi Nào Cho Em',
            musician: 'Miu Lê',
            views: '686',
        },
        {
            i: 29,
            title: 'Về Bên Anh',
            musician: 'Jack (GR5)',
            views: '673',
        },
        {
            i: 30,
            title: 'Có Chàng Trai Viết Lên Cây',
            musician: 'Phan Mạnh Quỳnh',
            views: '658',
        },
    ];
    return (
        <div className="home-container">
            <div className="home-content">
                <Row>
                    <Col className="main-content" span={17}>
                        <h1>Bài hát được tìm nhiều nhất</h1>
                        <div className="todayList">
                            {topSearch.map((song) => {
                                return (
                                    <div className="song" key={song.i}>
                                        <a href="/">
                                            {song.i}. {song.title}
                                        </a>
                                        <span>{song.musician}</span>
                                        <div className="chord-icon">
                                            <span>{song.views}</span>
                                            <EyeOutlined />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                    <Col span={7} className="home-right-content">
                        <RankingContent />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Home;
