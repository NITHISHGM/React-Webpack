const initialState = {
  SideBarToggle: false,
};

export const SideBarToggle = (state = initialState, action) => {
  switch (action.type) {
    case "SideBarToggle":
      return { ...state, SideBarToggle: !state.SideBarToggle };
    default:
      return state;
  }
};
