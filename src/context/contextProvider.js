import React, { Component } from "react";

export const RmmsPortalContext = React.createContext();

export default class RmmsPortalAppState extends Component {
  state = {
    category: { dirty: true },
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
          category: { ...category },
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
}
