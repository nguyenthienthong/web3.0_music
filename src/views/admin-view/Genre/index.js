import { Button, Col, Row, message, Avatar, Table, Tag, Space, Modal, Descriptions, Select, Popconfirm } from 'antd';
import React, { useEffect, useState } from 'react';
import userService from '../../../services/user.service';
import '../User/user.scss';
import { getSortName } from '../../../utils/utils';
import { Link } from 'react-router-dom';
const { Option } = Select;
const switchColorbyRole = (role) => {
    switch (role) {
        case 'ADMIN':
            return 'magenta';
        case 'USER':
            return 'cyan';

        default:
            return 'cyan';
    }
};

const Genre = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState({
        data: false,
        updateRole: false,
    });
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
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
                let rs = await Promise.all([userService.getAll()]);
                let dataNew = rs[0].data;
                setData(dataNew);
                setLoading({ ...loading, data: false });
            } catch (error) {
                message.error('error');
                console.log(error);
            }
        })();
    };
    const openModel = (user) => {
        setIsModalVisible(true);
        setCurrentUser(user);
    };
    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'avatarUrl',
            key: 'avatarUrl',
            render: (avatar, record) => (
                <>
                    <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="default">
                        {getSortName(record?.fullName)}
                    </Avatar>
                </>
            ),
        },
        {
            title: 'Mã ',
            dataIndex: 'googleId',
            key: 'googleId',
            sorter: true,
            sorter: (a, b) => (a?.googleId > b?.name ? 1 : -1),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: true,
            sorter: (a, b) => (a.email > b.email ? 1 : -1),
        },
        {
            title: 'Họ Tên',
            dataIndex: 'fullName',
            key: 'fullName',
            sorter: true,
            sorter: (a, b) => (a?.fullName > b.fullName ? 1 : -1),
        },
        {
            title: 'Chức vụ',
            dataIndex: 'role',
            key: 'role',
            filters: [
                {
                    text: 'USER',
                    value: 'USER',
                },
                {
                    text: 'ADMIN',
                    value: 'ADMIN',
                },
            ],
            onFilter: (value, record) => record.role.indexOf(value) === 0,
            render: (role) => (
                <>
                    <Tag color={switchColorbyRole(role)}>{role.toUpperCase()}</Tag>
                </>
            ),
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Link to="">
                        <Button type="primary">Chi tiết</Button>
                    </Link>
                    <Button type="primary" danger onClick={() => openModel(record)}>
                        Thay đổi quyền
                    </Button>
                </Space>
            ),
        },
    ];

    const handleChangeRole = async () => {
        if (!currentUser || !currentUser?._id || !currentUser?.newRole)
            return message.error('Bạn không có thay đổi gì!');
        try {
            const rs = await userService.update(currentUser?._id, {
                role: currentUser.newRole,
            });
            getData();
            setIsModalVisible(false);
            setCurrentUser({});
        } catch (error) {
            message.error('Có lỗi xảy ra, vui lòng thử lại sau!');
        }
    };
    return (
        <Row className="list-point">
            <Col className="list-point__content">
                <div className="list-point__content__heading">
                    <div className="content__heading-title">
                        <h1>Danh sách người dùng</h1>
                    </div>
                    <div className="content__heading-btn-control">
                        <Button className="btn-add" type="success">
                            Thêm mới
                        </Button>
                    </div>
                </div>
            </Col>
            <Col span={24}>
                <Table dataSource={data} rowKey="_id" columns={columns} loading={loading.data} />
            </Col>
            <Modal
                title="Thay đổi quền"
                footer={null}
                onCancel={() => setIsModalVisible(false)}
                visible={isModalVisible}
            >
                <Descriptions bordered>
                    <Descriptions.Item label="Họ tên" span={3}>
                        {currentUser?.fullName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Mã người dùng" span={3}>
                        {currentUser?._id}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email" span={3}>
                        {currentUser?.email}
                    </Descriptions.Item>
                    <Descriptions.Item label="Chức vụ hiện tại" span={3}>
                        {currentUser?.role}
                    </Descriptions.Item>
                    <Descriptions.Item label="Thay đổi ">
                        <Select
                            value={currentUser?.newRole ? currentUser?.newRole : currentUser?.role}
                            onChange={(e) => {
                                const newU = { ...currentUser, newRole: e };
                                setCurrentUser(newU);
                            }}
                        >
                            <Option value="ADMIN">ADMIN</Option>
                            <Option value="USER"> USER</Option>
                        </Select>
                    </Descriptions.Item>
                </Descriptions>
                <div className="text-center mt-2">
                    <Popconfirm
                        title="Bạn có chắc muốn thay đổi quyền?"
                        onConfirm={handleChangeRole}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button type="primary">Lưu</Button>
                    </Popconfirm>
                </div>
            </Modal>
        </Row>
    );
};

export default Genre;
