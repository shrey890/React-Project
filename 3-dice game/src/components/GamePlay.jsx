import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button , OutLineButton } from "./style/Button";
import Rules from "./Rules";
function GamePlay() {
	const [selectedNum, setSelectedNum] = useState();
	const [curDice, setCurDice] = useState(1);
	const [score, setScore] = useState(0);
	const [err, setErr] = useState("");
    const [showRules, setShowRules]=useState(false)
	const generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};
	const rollDice = () => {
		if (!selectedNum) {
			setErr("You have not selected any number");
			return;
		}
		setErr("");
		const randomDice = generateRandomNumber(1, 7);
		setCurDice((prev) => randomDice);
		if (selectedNum === randomDice) {
			setScore((prev) => prev + randomDice);
		} else {
			setScore((prev) => prev - 2);
		}
		setSelectedNum(undefined);
	};
    const resetScore = ()=>{
        setScore(0)
    }
	return (
		<MainContainer>
			<div className="top_section">
				<TotalScore score={score} />
				<NumberSelector
					err={err}
					setErr={setErr}
					selectedNum={selectedNum}
					setSelectedNum={setSelectedNum}
				/>
			</div>
			<RollDice curDice={curDice} rollDice={rollDice} />
			<div className="btns">
				<OutLineButton onClick={resetScore}>Reset Score</OutLineButton>
				<Button onClick={()=>setShowRules(prev=>(!prev))}>{ showRules  ? 'Hide Rules' : 'show Rules'}</Button>
			</div>
       {    showRules && <Rules/>}
		</MainContainer>
	);
}
export default GamePlay;
const MainContainer = styled.main`
	.top_section {
		display: flex;
		justify-content: space-between;
	}
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;
