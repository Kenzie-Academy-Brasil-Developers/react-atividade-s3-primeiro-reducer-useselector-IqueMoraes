export const AddFruit = (fruit) => {
  return {
    type: "ADD_FRUIT",
    fruit,
  };
};

export const RemoveFruit = (fruit) => {
  return {
    type: "REMOVE_FRUIT",
    fruit,
  };
};
