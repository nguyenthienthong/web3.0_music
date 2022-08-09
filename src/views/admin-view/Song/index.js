import { Button, Col, Row, message, Table, Tag, Space, Modal, Descriptions, Popconfirm } from 'antd';
import React, { useEffect, useState } from 'react';
import '../User/user.scss';
import songService from '../../../services/song.service';
const switchColorByStatus = (status) => {
    switch (status) {
        case 'OK':
            return 'magenta';
        case 'PENDING':
            return 'cyan';

        default:
            return 'cyan';
    }
};

const Song = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState({
        data: false,
        updateRole: false,
    });
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentSong, setCurrentSong] = useState({});
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        setLoading({
            ...loading,
            data: true,
        });
        (async () => {
            try {
                let rs = await Promise.all([songService.getAll()]);
                let dataNew = rs[0].data;
                setData(dataNew);
                setLoading({ ...loading, data: false });
            } catch (error) {
                message.error('error');
                console.log(error);
            }
        })();
    };
    const openModel = (song) => {
        setIsModalVisible(true);
        setCurrentSong(song);
    };
    const columns = [
        {
            title: 'Tên bài hát',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
            sorter: (a, b) => (a?.name > b?.name ? 1 : -1),
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            filters: [
                {
                    text: 'PENDING',
                    value: 'PENDING',
                },
                {
                    text: 'OK',
                    value: 'OK',
                },
            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
            render: (status) => (
                <>
                    <Tag color={switchColorByStatus(status)}>{status.toUpperCase()}</Tag>
                </>
            ),
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Button type="primary" onClick={() => openModel(record)}>
                        Chi tiết
                    </Button>
                </Space>
            ),
        },
    ];

    // const handleChangeRole = async () => {
    //     if (!currentUser || !currentUser?._id || !currentUser?.newRole)
    //         return message.error('Bạn không có thay đổi gì!');
    //     try {
    //         const rs = await userService.update(currentUser?._id, {
    //             role: currentUser.newRole,
    //         });
    //         getData();
    //         setIsModalVisible(false);
    //         setCurrentUser({});
    //     } catch (error) {
    //         message.error('Có lỗi xảy ra, vui lòng thử lại sau!');
    //     }
    // };
    return (
        <Row className="list-point">
            <Col className="list-point__content">
                <div className="list-point__content__heading">
                    <div className="content__heading-title">
                        <h1>Danh sách bài hát</h1>
                    </div>
                </div>
            </Col>
            <Col span={24}>
                <Table dataSource={data} rowKey="_id" columns={columns} loading={loading.data} />
            </Col>
            <Modal
                title="Chi tiết bài hát"
                footer={null}
                onCancel={() => setIsModalVisible(false)}
                visible={isModalVisible}
            >
                <Descriptions bordered>
                    <Descriptions.Item label="Tên bài hát" span={3}>
                        {currentSong?.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Lyrics" span={3}>
                        {currentSong?.lyric}
                    </Descriptions.Item>
                    <Descriptions.Item label="Render lyrics" span={3}>
                        {currentSong?.lyricRendered}
                    </Descriptions.Item>
                    <Descriptions.Item label="Nhạc sĩ" span={3}>
                        {currentSong?.musician}
                    </Descriptions.Item>
                    <Descriptions.Item label="Ca sĩ" span={3}>
                        {currentSong?.singer}
                    </Descriptions.Item>
                    <Descriptions.Item label="Tone" span={3}>
                        {currentSong?.tone}
                    </Descriptions.Item>
                </Descriptions>
                <div className="text-center mt-2">
                    <Popconfirm
                        title="Bạn có chắc muốn phê duyệt ?"
                        // onConfirm={handleChangeRole}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button type="primary">Phê duyệt</Button>
                    </Popconfirm>
                </div>
                <div className="text-center mt-2">
                    <Popconfirm
                        title="Bạn có chắc muốn từ chối ?"
                        // onConfirm={handleChangeRole}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button type="primary" danger>
                            Từ chối
                        </Button>
                    </Popconfirm>
                </div>
            </Modal>
        </Row>
    );
};

export default Song;
