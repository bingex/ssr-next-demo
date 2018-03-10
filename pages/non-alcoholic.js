import fetch from 'isomorphic-unfetch';
import { getRandomItems } from './../helpers';
import Header from './../components/Header';
import Grid from './../components/Grid';
import RandomButton from './../components/RandomButton';

const Alcoholic = props => (
  <div>
    <Header />
    <Grid cocktails={props.cocktails} />
    <RandomButton cocktails={props.cocktails} />
  </div>
);

Alcoholic.getInitialProps = async function() {
  const res = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
  );
  const data = await res.json();

  return {
    cocktails: data.drinks ? getRandomItems(16, data.drinks) : []
  };
};

export default Alcoholic;
