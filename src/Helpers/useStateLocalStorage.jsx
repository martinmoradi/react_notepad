import React, { useState } from "react";

  const useStateLocalStorage = (localStorageKey) => {
    const [element, setElement] = useState(
      localStorage.getItem(localStorageKey) || ""
    );
    React.useEffect(() => {
      localStorage.setItem(localStorageKey, element);
    }, [element]);

    return [element, setElement];
  };
  
  export default useStateLocalStorage;