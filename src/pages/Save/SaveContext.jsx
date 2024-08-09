import { createContext, useContext, useState, useEffect } from "react";

const SaveContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSave = () => {
  return useContext(SaveContext);
};

// eslint-disable-next-line react/prop-types
export const SaveProvider = ({ children }) => {
  const [saveItems, setSaveItems] = useState(() => {
    const savedSaveItems = localStorage.getItem("saveItems");
    return savedSaveItems ? JSON.parse(savedSaveItems) : [];
  });

  const addToSave = (item) => {
    setSaveItems((prevItems) => {
      // Check if the item is already in the saved list
      const existingItemIndex = prevItems.findIndex(
        (savedItem) => savedItem.id === item.id
      );

      let newSaveItems = [];
      if (existingItemIndex >= 0) {
        // Item already saved, return the previous list without adding again
        newSaveItems = [...prevItems];
      } else {
        // Item not saved, add it to the list
        newSaveItems = [...prevItems, item];
      }

      localStorage.setItem("saveItems", JSON.stringify(newSaveItems));
      return newSaveItems;
    });
  };

  const removeFromSave = (item) => {
    setSaveItems((prevItems) => {
      const newSaveItems = prevItems.filter(
        (savedItem) => savedItem.id !== item.id // Exclude the item with the given ID
      );
      localStorage.setItem("saveItems", JSON.stringify(newSaveItems));
      return newSaveItems;
    });
  };

  useEffect(() => {
    localStorage.setItem("saveItems", JSON.stringify(saveItems));
  }, [saveItems]);

  return (
    <SaveContext.Provider
      value={{
        saveItems,
        addToSave,
        removeFromSave,
      }}
    >
      {children}
    </SaveContext.Provider>
  );
};
