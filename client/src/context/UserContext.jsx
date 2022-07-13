import { createContext, useContext } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { TOKEN_STORAGE_KEY } from '../constants';
import PropTypes from 'prop-types';
import UserService from '../services/UserService';

const CURRENT_USER = 'currentUser';

export const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const queryClient = useQueryClient();
  const userQuery = useQuery(CURRENT_USER, UserService.fetchCurrentUser);

  const logout = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    queryClient.setQueryData(CURRENT_USER, undefined);
  };

  const value = {
    ...userQuery,
    logout,
    token: localStorage.getItem(TOKEN_STORAGE_KEY),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
