import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { BrowserRouter, NavLink } from 'react-router-dom'
import style from '../css/Navbar.module.css'
import { Menu } from 'antd';
import { UserOutlined, BookOutlined, RocketOutlined,BellOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
export default class Navbar extends Component {
    state = {
        current: 'rahbariyat',
      };
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
    
    render() {
        const { current } = this.state;
        return (
            <div>
                <nav className={style.nvb}>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="rahbariyat" icon={<UserOutlined />}>
        Rahbariyat
        </Menu.Item>  
        <Menu.Item key="yangiliklar" icon={<BookOutlined />}>
        Yangiliklar
        </Menu.Item>  
        <Menu.Item key="tadbirlar" icon={<BellOutlined />}>
        Tadbirlar
        </Menu.Item> 
         <Menu.Item key="alochilar" icon={<RocketOutlined  />}>
        Alochilar
        </Menu.Item>
       
       </Menu>
       </nav>
            </div>
        )
    }
}
