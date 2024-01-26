import styled from "styled-components";

function RollDice({ curDice, rollDice }) {
	return (
		<DiceContainer>
			<div className="dice" onClick={rollDice}>
				<img src={`images/dice/dice_${curDice}.png`} alt={curDice} />
			</div>
			<p>Click on Dice to roll</p>
		</DiceContainer>
	);
}

export default RollDice;

const DiceContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
`;
