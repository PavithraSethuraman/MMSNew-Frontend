import { createContext } from "react";

let UserContext = createContext();
const UserProvider = UserContext.Provider;

export { UserProvider };

export default UserContext;
