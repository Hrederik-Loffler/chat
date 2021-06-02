import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
}

export default function User(props) {
    const [currentUser, setCurrentUser] = useState()
    // const [loading, setLoading] = useState(true)

    async function signup(options) {
        try {
            const signupResp = await axios.post("/api/register", options)
            setCurrentUser({ name: options.name, room: options.room })
            window.location.reload()
            return signupResp
        } catch (e) {
            return e.response
        }
    }

    // useEffect(() => {
    //     async function fetch() {
    //         try {
    //             const user = await axios.get("/profile");
    //             console.log(user);
    //             setCurrentUser(user.data);
    //         } catch (e) {
    //             // Leave it empty
    //         }
    //
    //         setLoading(false);
    //     }
    //
    //     fetch();
    // }, []);

    const value = {
        currentUser,
        signup
    }

    return (
        <UserContext.Provider value={value}>
            {!loading && props.children}
        </UserContext.Provider>
    );
}
