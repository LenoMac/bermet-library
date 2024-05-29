import { DownOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css"
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Profile({ username, userProfile }) {

    const handleLogout = async() => {
        try{
            await signOut(auth);
            localStorage.clear();
            window.location.reload();
        }
        catch(e){
            console.log(e);
        }
    }

    const items = [
        {
            label: <Link style={{ fontSize: 17 }} to={""}>Профиль</Link>,
            key: '0',
        },
        {
            label: <Link style={{ fontSize: 17 }} to={"my"}>Моя библиотека</Link>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: <Link onClick={handleLogout} style={{ fontSize: 18, color: 'red' }} to="/">Выйти</Link>,
            key: '3',
        },
    ];

    return (
        <Dropdown
            menu={{
                items,
            }}
            trigger={["click"]}>
            <Space>
                <Avatar src={userProfile} />
                <p style={{cursor: 'pointer', userSelect: 'none'}}>{username}</p>
                <DownOutlined />
            </Space>
        </Dropdown>
    )
}
