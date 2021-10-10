import { useContext } from "react"
import AuthContext from "./context"
import storage from "./storage"
import jwtDecode from 'jwt-decode'

export default userAuth = () => {
    const {user , setUser} = useContext(AuthContext)

    const logOut = () =>{
        setUser(null);
        storage.removeToken();
    };

    const logIn = (authToken) => {
        const user = jwtDecode(authToken)
		setUser(user);
        console.log(user);
		storage.storeToken(authToken);
    }

    return {user, logOut, logIn};
}
