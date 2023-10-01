import { gql, useQuery } from '@apollo/client';
import { useUser } from '@clerk/clerk-expo';
import { createContext, useContext } from 'react';

const getUserQuery = gql`
  query MyQuery($authid: String!) {
    profileUsingprofile_authid_key(authid: $authid) {
      about
      authid
      backimage
      id
      name
      image
      position
    }
  }
`;

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const { user: authUser, isLoaded: isAuthLoaded } = useUser();

  const {
    data,
    loading: isDbLoading,
    refetch,
  } = useQuery(getUserQuery, {
    variables: { authid: authUser?.id },
  });

  const loading = isDbLoading || !isAuthLoaded;
  console.log(isDbLoading);

  const dbUser = data?.profileUsingprofile_authid_key;

  return (
    <UserContext.Provider
      value={{ dbUser: dbUser, authUser, loading, reloadDbUser: refetch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const useUserContext = () => useContext(UserContext);
