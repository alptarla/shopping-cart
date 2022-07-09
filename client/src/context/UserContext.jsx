import { createContext, useContext } from 'react';
import { useQuery } from 'react-query';
import { TOKEN_STORAGE_KEY } from '../constants';
import PropTypes from 'prop-types';
import StorageService from '../services/StorageService';
import UserService from '../services/UserService';

export const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const userQuery = useQuery('currentUser', UserService.fetchCurrentUser);

  const value = {
    ...userQuery,
    token: StorageService.get(TOKEN_STORAGE_KEY),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
