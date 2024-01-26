import styled from "styled-components"
import { Button } from "./style/Button"
function StartGame({toggle}) {
    return (
        <Container>
            <div>
                <img src="images/dices 1.png" alt="dice" />
            </div>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}
export default StartGame
const Container = styled.div`
max-width: 1182px;
height: 100vh;
display: flex;  
margin: 0 auto;
align-items: center;
.content{
    h1{
        font-size:96px;
        white-space:nowrap;
        font-weight: 700;
        margin-bottom: 0%;
    }
}
`
