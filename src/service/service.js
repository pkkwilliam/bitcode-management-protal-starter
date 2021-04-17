// Company Admin
const COMPANY_ADMIN_STORE_SERVICE = "/company_admin/v1store/";

// Company Manager
const COMPANY_MANAGER_CATEGORY_SERVICE = "/company_manager/v1/category";
const COMPANY_MANAGER_ITEM_SERVICE = "/company_manager/v1/category";

// category
export const GET_CATEGORIES = () => ({
  method: "GET",
  url: COMPANY_MANAGER_CATEGORY_SERVICE,
});

// item
export const GET_ITEMS = () => ({
  method: "GET",
  url: COMPANY_MANAGER_ITEM_SERVICE,
});

// store
export const GET_STORES = () => ({
  method: "GET",
  url: COMPANY_ADMIN_STORE_SERVICE,
});
