import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/searchResult/SearchResult";
export const BASE_URL = "http://localhost:9000";
const App = () => {
	const [data, setData] = useState(null);
	const [filteredData, setFilteredData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState(null);
	const [selectedBtn, setSelectedBtn] = useState("all");
	const filterBtns = [
		{
			name: "All",
			type: "all",
		},
		{
			name: "Breakfast",
			type: "breakfast",
		},
		{
			name: "Lunch",
			type: "lunch",
		},
		{
			name: "Dinner",
			type: "dinner",
		},
	];
	useEffect(() => {
		const fetchFoodData = async () => {
			setLoading(true);
			try {
				const response = await fetch(BASE_URL);
				const json = await response.json();
				setData(json);
				setFilteredData(json);
				setLoading(false);
			} catch (error) {
				setErr("unable to fetch data");
			}
		};
		fetchFoodData();
	}, []);
	const searchFood = (e) => {
		const searchValue = e.target.value.toLowerCase();
		const filtered = data?.filter(
			(food) =>
				(selectedBtn === "all" || food.name === selectedBtn) &&
				food.name.toLowerCase().includes(searchValue)
		);
		setFilteredData(filtered);
	};
	const handleFilterClick = (type) => {
		setSelectedBtn(type);
		if (type === "all") {
			setFilteredData(data);
		} else {
			const filter = data?.filter((food) => food.type === type);
			setFilteredData(filter);
		}
	};
	// if (err) return <div>{err}</div>;
	// if (loading) return <div>Loading...</div>;
	return (
		<>
			<Container>
				<TopContainer>
					<div>
						<img src="Foody Zone.svg" alt="logo" />
					</div>
					<div className="search">
						<input
							type="search"
							onChange={searchFood}
							placeholder="Search Food..."
						/>
					</div>
				</TopContainer>
				<FilterContainer>
					{filterBtns.map((value) => (
						<Button
							key={value.name}
							onClick={() => handleFilterClick(value.type)}
							active={selectedBtn === value.type}
						>
							{value.name}
						</Button>
					))}
				</FilterContainer>
			</Container>
			<SearchResult loading={loading} err={err} data={filteredData} />
		</>
	);
};
export default App;
export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;
const TopContainer = styled.div`
	min-height: 140px;
	display: flex;
	justify-content: space-between;
	padding: 16px;
	align-items: center;
	.search {
		input {
			background: transparent;
			border: 1px solid red;
			color: wheat;
			border-radius: 5px;
			padding: 10px;
			font-size: x-large;
		}
	}
	@media (0 < width < 600px) {
		flex-direction: column;
	}
`;
const FilterContainer = styled.section`
	display: flex;
	justify-content: center;
	gap: 14px;
	padding-bottom: 40px;
`;
export const Button = styled.button`
	border-radius: 5px;
	background: #ff4343;
	padding: 6px 12px;
	border: none;
	cursor: pointer;
	color: white;
	&:hover {
		background-color: #ff1b1b;
	}
`;
