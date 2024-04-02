import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";


function GoogleApi({callbacks}){


    const [user, setUser] = useState({});
    
    function handleCallbackResponse(response){
        callbacks()       
        const userObject = jwtDecode(response.credential)
        setUser(userObject);
        localStorage.setItem("usuario", userObject.name)
        localStorage.setItem("usuarioImg", userObject.picture)
        document.getElementById("signInDiv").hidden=true;
    }
    function handleSignOut (event){
        setUser({});
        document.getElementById("signInDiv").hidden=false;
    }

    

    useEffect(() =>{
        const initializeGoogleAccount = async () => {
            /* google global   */
            const clientID = `${import.meta.env.VITE_GOOGLE_API}`;
            
            await google.accounts.id.initialize({        
                client_id: clientID,
                callback: handleCallbackResponse,
            });
    
            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: "outline", size: "large" }
            );
            google.accounts.id.prompt();
        }
    
        initializeGoogleAccount();
    }, []);

    return(
        <div>
            <div id="signInDiv"> </div>
            
        </div>
    )
}
export default GoogleApi;