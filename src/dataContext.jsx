// DataContext.js
import React, { createContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    { name: 'Tab 1', icon: 'icon1', id: 1 },
    
  ]);

  const addItem = newItem => {
    setData(prevData => [...prevData, newItem]);
  };

  const deleteItem = itemId => {
    setData(prevData => prevData.filter(item => item.id !== itemId));
  };

  const contextValue = {
    data,
    addItem,
    deleteItem,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
