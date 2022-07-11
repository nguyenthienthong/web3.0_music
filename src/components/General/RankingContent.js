import { StarOutlined } from '@ant-design/icons';

function RankingContent() {
    const top5 = [
        {
            id: 1,
            type: 'thành viên tích cực',
            content: [
                {
                    id: 1,
                    name: 'Đình Đạt',
                    totalSong: '30 songs',
                },
                {
                    id: 2,
                    name: 'Chí Hiếu',
                    totalSong: '23 songs',
                },
                {
                    id: 3,
                    name: 'Khánh Nhi',
                    totalSong: '20 songs',
                },
                {
                    id: 4,
                    name: 'Trà My',
                    totalSong: '17 songs',
                },
                {
                    id: 5,
                    name: 'Anh Kiệt',
                    totalSong: '15 songs',
                },
            ],
        },
        {
            id: '2',
            type: 'bài hát mới',
            content: [
                {
                    id: 1,
                    name: 'Em của quá khứ',
                },
                {
                    id: 2,
                    name: 'Nếu em còn tồn tại',
                },
                {
                    id: 3,
                    name: 'Em của ngày hôm qua',
                },
                {
                    id: 4,
                    name: 'Nắng ấm xa dần',
                },
                {
                    id: 5,
                    name: 'Thái Bình mồ hôi rơi',
                },
                {
                    id: 6,
                    name: 'Chúng ta không thuộc về nhau',
                },
                {
                    id: 7,
                    name: 'Nắng ấm xa dần',
                },
                {
                    id: 8,
                    name: 'Chắc ai đó sẽ về',
                },
                {
                    id: 9,
                    name: 'Hãy trao cho anh',
                },
                {
                    id: 10,
                    name: 'Có chắc yêu là đây',
                },
            ],
        },
    ];

    return (
        <div className="mt-50">
            {top5.map((a) => {
                return (
                    <div className="right-sub-content" key={a.id}>
                        <div className="top-rate-header">
                            <StarOutlined style={{ color: '#dda600' }} />
                            <span>Top {a.type}</span>
                        </div>
                        <div className="top-rate-content">
                            {a.content.map((b) => {
                                return (
                                    <div key={b.id}>
                                        <a href="/">
                                            {b.id}. {b.name}{' '}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default RankingContent;
