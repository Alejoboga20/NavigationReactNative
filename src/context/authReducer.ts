import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'changeFavIcon'; payload: string }
  | { type: 'changeUserName'; payload: string };

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        favoriteIcon: undefined,
        userName: undefined,
      };
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'changeUserName':
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
