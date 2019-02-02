export const addRandomNumber = (state, { min, max }) => {
    state.numbers.push(Math.floor(Math.random() * (max - min) + min));
};

export const addNumber = (state, number) => {
    state.numbers.push(number);
};
