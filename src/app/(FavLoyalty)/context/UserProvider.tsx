import { useState } from "react";
import { UserContext } from "./UserContext";

const UserContextPovider = ({ children }: any) => {
  const [isBoxVisible, setBoxVisibility] = useState(false);
  const [user, setUser] = useState(null);
  const [shopdata, setShopData]: any = useState(null);
  const toggleFavWidget = () => {
    console.log("hello");
    setBoxVisibility(!isBoxVisible);
    return "lorem ipsum dolor sit amet";
  };

  const exportValue = {
    isBoxVisible: isBoxVisible,
    setBoxVisibility: setBoxVisibility,
    toggleFavWidget: toggleFavWidget,
    user,
    setUser,
    shopdata,
    setShopData,
  };
  return (
    <UserContext.Provider value={exportValue}>{children}</UserContext.Provider>
  );
};

export default UserContextPovider;
