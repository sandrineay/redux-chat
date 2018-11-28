export default function(state, action) {
  if (state === undefined) {
    return (prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`);
  }

  switch (action.type) {
    default:
      return state;
  }
}
