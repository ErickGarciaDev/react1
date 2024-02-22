import { Cards } from './styles';

export const GameCards = ({ props }: any) => {
  return (
    <Cards>
      <img src={props.img} alt="" />
      <h4>{props.name}</h4>
      <p>
        <span>Descrição:</span> {props.description}
      </p>
      <p>
        <span>Categoria:</span>
        {props.category}
      </p>
    </Cards>
  );
};
