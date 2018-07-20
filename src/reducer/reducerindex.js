const reminder = action => {
  return {
    text: action.text
  };
};

const reminders = (state = [], action) => {
  switch (action.type) {
    case "ADD_REMINDER":
      state = [...state, reminder(action)];
      console.log("reminders as state ", state);
      return state;
    default:
      return state;
  }
};

export default reminders;
