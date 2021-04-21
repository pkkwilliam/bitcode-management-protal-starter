import React, { Component } from "react";

export const RmmsPortalContext = React.createContext();

export default class RmmsPortalAppState extends Component {
  state = {
    category: { categories: [], dirty: true },
    company: { dirty: true },
    item: { dirty: true },
    store: { dirty: true },
    user: { dirty: true },
  };

  RmmsPortalAppStateWrapper = ({ children }) => {
    const { category, company, item, store, user } = this.state;
    return (
      <RmmsPortalContext.Provider
        value={{
          category: {
            ...category,
            setCategories: this.setCategories,
            setCategoryDirty: this.setCategoryDirty,
          },
          company: { ...company },
          item: { ...item },
          store: { ...store },
          user: { ...user },
        }}
      >
        {children}
      </RmmsPortalContext.Provider>
    );
  };

  setCategories = (categories) => {
    this.setState((state) => ({
      category: {
        categories,
        dirty: false,
      },
    }));
  };

  setCategoryDirty = () => {
    this.setState((state) => ({
      category: {
        ...state.category,
        dirty: true,
      },
    }));
  };
}
