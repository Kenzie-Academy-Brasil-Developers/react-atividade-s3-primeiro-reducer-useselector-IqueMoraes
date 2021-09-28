const initialState = ["banana", "kiwi", "morango"];

const FruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, action.fruit];

    case "REMOVE_FRUIT":
      return (state = state.filter((item) => item !== action.fruit));

    default:
      return state;
  }
};

export default FruitsReducer;
