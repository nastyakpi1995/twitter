import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";

import {
    HomeOutlined,
    MessageOutlined,
    LogoutOutlined,
    NotificationOutlined,
    SearchOutlined,
    UserOutlined,
    TwitterOutlined
} from "@ant-design/icons";
import {links} from "../../utils/constants";


const MenuComponent = () => {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('user')
        navigate(links.LOGIN)
    }

    return (
            <Container>
                <MyLink to={'/'}><TwitterOutlined style={{ fontSize: '35px', color: '#08c' }} /></MyLink>
                <MyLink to={'/'}><HomeOutlined style={{ fontSize: '35px', color: '#08c' }} /></MyLink>
                <MyLink to={'/'}><SearchOutlined style={{ fontSize: '35px', color: '#08c' }} /></MyLink>
                <MyLink to={'/'}><NotificationOutlined style={{ fontSize: '35px', color: '#08c' }} /></MyLink>
                <MyLink to={'/'}><MessageOutlined style={{ fontSize: '35px', color: '#08c' }} /></MyLink>
                <MyLink to={'/'}><UserOutlined style={{ fontSize: '35px', color: '#08c' }} /></MyLink>
                <LogoutButton onClick={handleLogOut}>
                    <LogoutOutlined style={{ fontSize: '35px', color: '#08c' }} />
                </LogoutButton>
            </Container>
    )
}

export default MenuComponent;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const MyLink = styled(Link)`
  margin-bottom: 20px;
`
const LogoutButton = styled.div`
  cursor: pointer;
`
