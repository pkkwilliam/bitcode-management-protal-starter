import React, { Component } from "react";

export const RmmsPortalContext = React.createContext();

export default class RmmsPortalAppState extends Component {
  state = {
    category: { categories: [], dirty: true },
    company: { companyInfo: {}, dirty: true },
    companyCustomise: {
      companyCustomiseInfo: {
        landingPage: { carousel: [] },
        style: {
          primary: "",
          secondary: "",
        },
        mainMenuButtons: [],
      },
      dirty: true,
    },
    item: { dirty: true, items: [] },
    store: { dirty: true },
    user: { dirty: true },
  };

  RmmsPortalAppStateWrapper = ({ children }) => {
    const {
      category,
      company,
      companyCustomise,
      item,
      store,
      user,
    } = this.state;
    return (
      <RmmsPortalContext.Provider
        value={{
          category: {
            ...category,
            setCategories: this.setCategories,
            setCategoryDirty: this.setCategoryDirty,
          },
          company: { ...company, setCompany: this.setCompany },
          companyCustomise: {
            ...companyCustomise,
            setCompanyCustomise: this.setCompanyCustomise,
            setCompanyCustomiseDirty: this.setCompanyCustomiseDirty,
          },
          item: {
            ...item,
            setItems: this.setItems,
            setItemDirty: this.setItemDirty,
          },
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

  setCompany = (companyInfo) => {
    this.setState({
      company: {
        companyInfo,
        dirty: false,
      },
    });
  };

  setCompanyCustomise = (companyCustomiseInfo) => {
    this.setState({
      companyCustomise: {
        companyCustomiseInfo,
        dirty: false,
      },
    });
  };

  setCompanyCustomiseDirty = () => {
    this.setState((state) => ({
      companyCustomise: {
        ...state.companyCustomise,
        dirty: true,
      },
    }));
  };

  setItems = (items) => {
    this.setState((state) => ({
      item: {
        dirty: false,
        items,
      },
    }));
  };

  setItemDirty = () => {
    this.setState((state) => ({
      item: {
        ...state.item,
        dirty: true,
      },
    }));
  };
}
