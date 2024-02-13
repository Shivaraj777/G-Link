// action types
export const TOGGLE_TAB = 'TOGGLE_TAB';


// action creator to toggle chat menu tab
export const toggleTab = (tabIndex) => {
  return {
    type: TOGGLE_TAB,
    payload: tabIndex
  }
}