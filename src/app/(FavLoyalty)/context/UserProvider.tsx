import { useState } from "react";
import { UserContext } from "./UserContext";


const UserContextPovider=({children}:any)=>{
    const [isBoxVisible, setBoxVisibility] = useState(false);
    const toggleFavWidget = () => {
        console.log("hello")
        setBoxVisibility(!isBoxVisible);
        return ("lorem ipsum dolor sit amet")
    };

    const exportValue={
        isBoxVisible:isBoxVisible,
        setBoxVisibility:setBoxVisibility,
        toggleFavWidget:toggleFavWidget
    }
    return (
        <UserContext.Provider value={exportValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextPovider