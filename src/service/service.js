// Company Admin
const COMPANY_ADMIN_STORE_SERVICE = "/company_admin/v1/store";

// Company Manager
const COMPANY_MANAGER_CATEGORY_SERVICE = "/company_manager/v1/category";
const COMPANY_MANAGER_COMPANY_CUSTOMISE =
  "/company_manager/v1/company_customise";
const COMPANY_MANAGER_ITEM_SERVICE = "/company_manager/v1/item";

// Company Employee
const COMPANY_EMPLOYEE_SERVICE = "/company_employee/v1/company";

// Public
const PUBLIC_COMPANY_CUSTOMISE = "/public/v1/company_customise";

// Auth
export const LOGIN = (username, password) => ({
  body: JSON.stringify({ username, password }),
  method: "POST",
  url: "/login/username_login",
});

// category
export const CREATE_CATEGORY = (category) => ({
  body: JSON.stringify(category),
  method: "POST",
  url: COMPANY_MANAGER_CATEGORY_SERVICE,
});

export const DELETE_CATEGORY = (category) => ({
  body: JSON.stringify(category),
  method: "DELETE",
  url: COMPANY_MANAGER_CATEGORY_SERVICE,
});

export const GET_CATEGORIES = () => ({
  method: "GET",
  url: COMPANY_MANAGER_CATEGORY_SERVICE + "/categories",
});

export const UPDATE_CATEGORY = (category) => ({
  body: JSON.stringify(category),
  method: "PUT",
  url: COMPANY_MANAGER_CATEGORY_SERVICE,
});

export const UPDATE_CATEGORIES_SEQUENCES = (category) => ({
  body: JSON.stringify(category),
  method: "PUT",
  url: COMPANY_MANAGER_CATEGORY_SERVICE + "/update_sequences",
});

// company
export const GET_COMPANY = () => ({
  method: "GET",
  url: COMPANY_EMPLOYEE_SERVICE,
});

// company customise
export const GET_COMPANY_CUSTOMISE = (companyId) => ({
  method: "GET",
  url: PUBLIC_COMPANY_CUSTOMISE + `?companyId=${companyId}`,
});

export const UPDATE_COMPANY_CUSTOMISE = (content) => ({
  body: JSON.stringify({
    content: JSON.stringify(content),
  }),
  method: "PUT",
  url: COMPANY_MANAGER_COMPANY_CUSTOMISE,
});

// item
export const CREATE_ITEM = (item) => ({
  body: JSON.stringify(item),
  method: "POST",
  url: COMPANY_MANAGER_ITEM_SERVICE,
});

export const DELETE_ITEM = (item) => ({
  body: JSON.stringify(item),
  method: "DELETE",
  url: COMPANY_MANAGER_ITEM_SERVICE,
});

export const GET_ITEMS = () => ({
  method: "GET",
  url: COMPANY_MANAGER_ITEM_SERVICE,
});

export const UPDATE_ITEM = (item) => ({
  body: JSON.stringify(item),
  method: "PUT",
  url: COMPANY_MANAGER_ITEM_SERVICE,
});

export const UPDATE_ITEMS_SEQUENCES = (items) => ({
  body: JSON.stringify(items),
  method: "PUT",
  url: COMPANY_MANAGER_ITEM_SERVICE + "/update_sequences",
});

// store
export const GET_STORES = () => ({
  method: "GET",
  url: COMPANY_ADMIN_STORE_SERVICE,
});
