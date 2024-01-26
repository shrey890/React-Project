import styled from "styled-components";
function TotalScore({score}) {
	return (
		<ScoreContainer>
			<h1>{score}</h1>
			<p>Total Score</p>
		</ScoreContainer>
	);
}
export default TotalScore;
const ScoreContainer = styled.div`
	text-align: center;
	max-width: 100px;
	h1 {
		color: #000;
		font-size: 100px;
		font-weight: 500;
		margin: 0px ;
	}
	p {
		font-size: 24px;
		font-weight: 500;
		margin: 0px;
	}
`;
