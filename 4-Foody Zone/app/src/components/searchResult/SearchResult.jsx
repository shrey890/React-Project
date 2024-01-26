import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

function SearchResult({ data, loading, err }) {
	return (
		<FoodCardsContainer>
			<Container>
				<FoodCards>
					{loading && <div className="load">it is Loading... 	or maybe </div>}
				
					{err && <div className="load">{err}</div>}
					{data?.map(({ name, text, image, price }) => (
						<FoodCard key={name}>
							<div className="food_img">
								<img src={BASE_URL + image} alt="" />
							</div>
							<div className="food-info">
								<div className="info">
									<h1>{name}</h1>
									<p>{text}</p>
								</div>
								<Button>${price.toFixed(2)}</Button>
							</div>
						</FoodCard>
					))}
				</FoodCards>
			</Container>
		</FoodCardsContainer>
	);
}

export default SearchResult;
const FoodCardsContainer = styled.section`
	min-height: calc(100vh - 210px);
	background: url("../public/bg.jpeg");
	background-size: cover;
`;
const FoodCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	row-gap: 32px;
	column-gap: 20px;
	padding-top: 80px;
    .load{
        font-size: x-large;
        color: #00ffea;
        background-color: black;
       font-weight: bolder;
       padding: 13px;
       border-radius: 5px;
    }
`;
const FoodCard = styled.div`
	border-radius: 19.447px;
	border: 0.659px solid #98f9ff;
	background: url(<path-to-image>),
		lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
		radial-gradient(
			151.92% 127.02% at 15.32% 21.04%,
			rgba(165, 239, 255, 0.2) 0%,
			rgba(110, 191, 244, 0.04) 77.08%,
			rgba(70, 144, 212, 0) 100%
		);
	background-blend-mode: overlay, normal;
	backdrop-filter: blur(13.184196472167969px);
	width: 340px;
	height: 167px;
	display: flex;
	padding: 8px;

	.food-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: end;
	}

	h1 {
		color: #fff;
		font-family: Inter;
		font-size: 16px;
		font-weight: 600;
		margin-top: 10px;
	}
	p {
		color: #fff;
		font-family: Inter;
		font-size: 12px;
		font-weight: 400;
		margin-top: 10px;
	}
`;
