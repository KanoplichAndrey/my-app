import { state } from '../redux/state';

export const getHeaderState = () => {
  return state.header.menuItems;
};
