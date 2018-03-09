import Link from 'next/link';
import Layout from './Layout';

const Grid = props => (
  <Layout>
    <div className="wrapper">
      {props.cocktails.map(({ idDrink, strDrink, strDrinkThumb }) => (
        <Link
          key={idDrink}
          as={`/cocktail/${idDrink}`}
          href={`/cocktail?id=${idDrink}`}
        >
          <div
            className="cocktail"
            style={{ backgroundImage: `url(${strDrinkThumb}` }}
          >
            <div className="cocktail-info">{strDrink}</div>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .wrapper {
          max-width: 1200px;
          margin: 70px auto;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .cocktail {
          width: 280px;
          height: 300px;
          background-size: cover;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          margin: 10px;
          border-radius: 4px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s;
        }
        .cocktail:hover {
          transform: scale(1.05);
        }
        .cocktail:hover .cocktail-info {
          background: rgba(255, 235, 59, 0.8);
        }
        .cocktail-info {
          transition: all 0.3s;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.8);
          color: #000000;
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  </Layout>
);

export default Grid;
