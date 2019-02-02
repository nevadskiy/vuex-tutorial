import axios from 'axios';

export const fetchNumbers = (context, payload) => {
  axios.get(`http://localhost:8080/api/random?min=${payload.min}&max=${payload.max}`)
    .then((response) => context.commit('addNumber', response.data.number));
};
