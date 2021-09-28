import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddFruit, RemoveFruit } from "../../store/modules/fruits/action";

export default function FruitsPage() {
  const [fruitName, setFruitName] = useState("");
  const fruits = useSelector((state) => state.Fruit);
  const dispatch = useDispatch();

  const handleAddFruit = () => dispatch(AddFruit(fruitName));
  const handleRemoveFruit = () => dispatch(RemoveFruit(fruitName));

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setFruitName(e.target.value)} />
        <div>
          <button onClick={handleRemoveFruit}>Remover</button>
          <button onClick={handleAddFruit}>Adicionar</button>
        </div>
      </div>

      <ul>
        {fruits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
