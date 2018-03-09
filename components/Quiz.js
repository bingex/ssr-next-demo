import Link from 'next/link';

const Quiz = () => (
  <div className="start-wrapper">
    <h4 className="start-title">Which cocktail do you want?</h4>
    <div>
      <Link href="/alcoholic">
        <button className="start-type start-type--alcoholic">Alcoholic</button>
      </Link>
      <Link href="/non-alcoholic">
        <button className="start-type start-type--nonalcoholic">
          Non alcoholic
        </button>
      </Link>
    </div>
    <style jsx>{`
      .start-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
      }
      .start-title {
        color: #8585a7;
        font-size: 16px;
        margin-bottom: 30px;
      }
      .start-type {
        height: 120px;
        font-size: 14px;
        width: 120px;
        border-radius: 50%;
        margin: 0 20px;
        cursor: pointer;
        border: none;
        color: #31313c;
        box-shadow: 0 0 0 transparent;
        transition: all 0.3s;
        text-transform: lowercase;
        outline: none;
      }
      .start-type:hover {
        box-shadow: 0px 0px 20px 10px rgba(255, 255, 255, 0.8);
        color: #f4f4f4;
      }
      .start-type--alcoholic {
        background: #3ad4c3;
      }
      .start-type--nonalcoholic {
        background: #84c2e2;
      }
    `}</style>
  </div>
);

export default Quiz;
