export const addNumber = (state, { min, max }) => {
    state.numbers.push(Math.floor(Math.random() * (max - min) + min));
};
