import fetch from 'isomorphic-unfetch';
import Layout from './../components/Layout';

const Cocktail = ({ cocktail, nums }) => (
	<Layout>
		<div className="wrapper">
			<div
				className="image"
				style={{ backgroundImage: `url(${cocktail.strDrinkThumb})` }}
			/>
			<div className="info">
				<h6 className="info-title">name</h6>
				<p className="info-text">{cocktail.strDrink}</p>

				<h6 className="info-title">category</h6>
				<p className="info-text">{cocktail.strCategory}</p>

				<h6 className="info-title">ingredients</h6>
				<div className="info-ingredients">
					{nums.map(item => {
						const ingredient = cocktail[`strIngredient${item}`];
						const measure = cocktail[`strMeasure${item}`];
						if (ingredient) {
							return (
								<span key={item}>
									&bull; {ingredient}{' '}
									<span className="measure">( {measure})</span>
								</span>
							);
						} else {
							return null;
						}
					})}
				</div>

				<h6 className="info-title">instructions</h6>
				<p className="info-text">{cocktail.strInstructions}</p>
			</div>
		</div>
		<style jsx>{`
			.wrapper {
				padding: 40px;
				max-width: 1200px;
				margin: 0 auto;
				display: flex;
			}
			.image {
				width: 600px;
				height: 600px;
				background-size: cover;
				border-radius: 4px;
			}
			.info-title {
				margin: 0px 40px;
				color: #8585a7;
				font-size: 12px;
			}
			.info-text {
				margin: 8px 0 30px 40px;
				color: #84c2e2;
				line-height: 1.5em;
				max-width: 400px;
			}
			.info-ingredients {
				margin: 10px 0 30px 40px;
				color: #84c2e2;
				display: flex;
				flex-direction: column;
			}
			.info-ingredients span {
				margin-bottom: 7px;
			}
			.measure {
				color: #5d8ba2;
			}
		`}</style>
	</Layout>
);

Cocktail.getInitialProps = async function(context) {
	const { id } = context.query;
	const res = await fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
	);
	const cocktail = await res.json();

	return {
		cocktail: cocktail.drinks ? cocktail.drinks[0] : {},
		nums: Array.from(Array(15).keys())
	};
};

export default Cocktail;
