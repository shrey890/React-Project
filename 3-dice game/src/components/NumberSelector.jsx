import styled from "styled-components";
function NumberSelector({selectedNum,setSelectedNum,err , setErr}) {
	const arrNum = [1, 2, 3, 4, 5, 6];
    const numSelectorHandle=(value)=>{
        setSelectedNum(value)
        setErr('')
    }
	return (
		<NumberSelectorContainer>
			<div className="flex">
                <p className="err" >{err}</p>
				{arrNum.map((value, i) => (
					<Box
						isSelected={value === selectedNum}
						key={i}
						onClick={()=>numSelectorHandle(value)}
					>
						{value}
					</Box>
				))}
			</div>
			<p>Select Number</p>
		</NumberSelectorContainer>
	);
}
export default NumberSelector;
const NumberSelectorContainer = styled.div`
	display: flex;
    flex-direction: column;
    align-items:end;
    .flex{
        display: flex;
        gap: 24px;
    }
    .err{
        color: red;
    }
   
`;
const Box = styled.div`
	height: 72px;
	width: 72px;
	border: 1px solid black;
	display: grid;
	place-items: center;
	font-size: 24px;
	font-weight: 700;
    border-radius: 13px;
    cursor: pointer;
	background-color: ${(props) => (props.isSelected ? "black" : "white")};
	color: ${(props) => (!props.isSelected ? "black" : "white")};
    &:hover{
        background-color: black;
        color: white;
        transition: 0.5s background ease-in-out;
    }
`;
