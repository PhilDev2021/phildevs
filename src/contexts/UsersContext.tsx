// UsersContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  Dispatch,
} from "react";

type UserState = {
  users: any[];
  loading: boolean;
  error: string | null;
};

type UsersAction =
  | { type: "FETCH_USERS_REQUEST" }
  | { type: "FETCH_USERS_SUCCESS"; payload: any[] }
  | { type: "FETCH_USERS_FAILURE"; payload: string };

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

type UsersContextType = {
  state: UserState;
  dispatch: Dispatch<UsersAction>;
};

const UsersContext = createContext<UsersContextType | undefined>(undefined);

const reducer = (state: UserState, action: UsersAction): UserState => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

type UsersContextProviderProps = {
  children: React.ReactNode;
};

const UsersContextProvider = ({ children }: UsersContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchUsers() {
      dispatch({ type: "FETCH_USERS_REQUEST" });
      try {
        const response = await fetch(
          "https://api.github.com/search/users?q=location:%22Philippines%22"
        );
        const data = await response.json();
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: data.items });
      } catch (error: any) {
        dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
      }
    }

    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error(
      "useUsersContext must be used within a UsersContextProvider"
    );
  }
  return context;
};

export { UsersContextProvider, useUsersContext };
