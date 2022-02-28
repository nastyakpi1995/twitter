import MenuComponent from "./MenuComponent";
import styled from "styled-components";
import MessagesComponent from "../layout/MessagesComponent";

const HomePage = () => {
    return (
        <Container>
            <MenuComponent />
            <MessagesComponent />
            <Block>
                third section
            </Block>
        </Container>
    )
}

export default HomePage;

const Container = styled.div`
  display: flex;
  max-width: 1600px;
  background: aliceblue;
  height: 80vh;
  margin: 0 auto;
`
const Block = styled.div`
  width: 33%;
  height: 100%;
`
