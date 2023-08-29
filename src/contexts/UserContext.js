import { createContext, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = (props) => {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )

}

export { UserContext, UserContextProvider };