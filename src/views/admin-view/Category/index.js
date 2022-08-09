import { Button, Col, Row, message, Table, Space, Modal, Descriptions, Popconfirm, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import '../User/user.scss';
import cateService from '../../../services/cate.service';
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

const Category = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState({
        data: false,
        updateRole: false,
    });
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [currentCate, setCurrentCate] = useState({});
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
                let rs = await Promise.all([cateService.getAll()]);
                let dataNew = rs[0].data.data;
                setData(dataNew);
                setLoading({ ...loading, data: false });
            } catch (error) {
                message.error('error');
                console.log(error);
            }
        })();
    };
    const openModel = (cate) => {
        setIsModalVisible(true);
        setCurrentCate(cate);
    };
    const openModelAdd = () => {
        setIsModalVisible2(true);
    };
    const columns = [
        {
            title: 'Tên thể loại',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
            sorter: (a, b) => (a?.name > b?.name ? 1 : -1),
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
                        <h1>Danh sách thể loại</h1>
                    </div>
                    <div className="content__heading-btn-control">
                        <Button className="btn-add" type="success" onClick={() => openModelAdd()}>
                            Thêm mới
                        </Button>
                    </div>
                </div>
            </Col>
            <Col span={24}>
                <Table dataSource={data} rowKey="_id" columns={columns} loading={loading.data} />
            </Col>
            <Modal
                title="Chi tiết thể loại"
                footer={null}
                onCancel={() => setIsModalVisible(false)}
                visible={isModalVisible}
            >
                <Descriptions bordered>
                    <Descriptions.Item label="Tên thể loại" span={3}>
                        <Input value={currentCate?.name} />
                    </Descriptions.Item>
                </Descriptions>
                <div className="text-center mt-2">
                    <Popconfirm
                        title="Bạn có chắc muốn lữu thay đổi ?"
                        // onConfirm={handleChangeRole}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button type="primary">Thay đổi</Button>
                    </Popconfirm>
                </div>
                <div className="text-center mt-2">
                    <Popconfirm
                        title="Bạn có chắc muốn xóa thể loại này ?"
                        // onConfirm={handleChangeRole}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button type="primary" danger>
                            Xóa
                        </Button>
                    </Popconfirm>
                </div>
            </Modal>
            <Modal
                title="Chi tiết thể loại"
                footer={null}
                onCancel={() => setIsModalVisible2(false)}
                visible={isModalVisible2}
            >
                <Descriptions bordered>
                    <Descriptions.Item label="Tên thể loại" span={3}>
                        <Input />
                    </Descriptions.Item>
                </Descriptions>
                <div className="text-center mt-2">
                    <Popconfirm
                        title="Bạn có chắc muốn lữu thay đổi ?"
                        // onConfirm={handleChangeRole}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button type="primary">Thêm mới</Button>
                    </Popconfirm>
                </div>
            </Modal>
        </Row>
    );
};

export default Category;
