import "./style.css";

import ChardCard from "../CharCard";

const Characters = ({ characterList }) => {
  return (
    <div className="page">
      <div>
        <h2>Meus personagens</h2>
      </div>
      <div className="listaPersonagens">
        {characterList.map((item) => (
          <div key={item.id}>
            <ChardCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
