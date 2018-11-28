export default function(state, action) {
  if (state === undefined) {
    return ['general', 'react', 'paris'];
  }

  switch (action.type) {
    default:
      return state;
  }
}
