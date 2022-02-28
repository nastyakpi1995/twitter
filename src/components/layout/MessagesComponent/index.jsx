import styled from "styled-components";
import CreateNewPoster from "./CreateNewPoster";

const exampleData = {
    picture: 'https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=',

}
const MessagesComponent = () => {
    return (
        <Container>
            <HomeDiv>
                <Title>Home</Title>
            </HomeDiv>
            <div>
                <CreateNewPoster user={exampleData} />

                <div>
                    text
                </div>
            </div>

        </Container>

    )
}

export default MessagesComponent;


const Container = styled.div`
  width: 70%;
    //background: rgb(0, 136, 204);
  padding: 0 30px;
  border: 1px solid #aca6a6;
`
const Title = styled.div`
  
`
const HomeDiv = styled.div`
  display: flex;
  height: 30px;
  border-bottom: 1px solid #aca6a6;
`
