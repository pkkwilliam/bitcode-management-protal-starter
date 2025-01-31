import React from "react";

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);
const Tables = React.lazy(() => import("./views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("./views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("./views/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("./views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("./views/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("./views/base/switches/Switches"));

const Tabs = React.lazy(() => import("./views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("./views/buttons/brand-buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("./views/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));

const CategoryDetail = React.lazy(() =>
  import("./component/companyManagement/categoryDetail/CategoryDetail")
);
const CategoryManagement = React.lazy(() =>
  import("./component/companyManagement/categoryManagement/CategoryManagement")
);
const CompanyCustomise = React.lazy(() =>
  import("./component/companyManagement/companyCustomise/CompanyCustomise")
);
const CompanyCustomiseBottomList = React.lazy(() =>
  import(
    "./component/companyManagement/companyCustomiseBottomList/companyCustomiseBottomList"
  )
);
const CompanyCustomiseImageUploader = React.lazy(() =>
  import(
    "./component/companyManagement/companyCustomiseImageUploader/CompanyCustomiseImageUploader"
  )
);
const CompanyCustomiseMainMenuButton = React.lazy(() =>
  import(
    "./component/companyManagement/companyCustomiseMainMenuButton/companyCustomiseMainMenuButton"
  )
);
const IconGenerator = React.lazy(() =>
  import("./component/companyManagement/iconGenerator/iconGenerator")
);
const ItemDetail = React.lazy(() =>
  import("./component/companyManagement/itemDetail/ItemDetail")
);
const ItemManagement = React.lazy(() =>
  import("./component/companyManagement/itemManagement/ItemManagement")
);
const StoreManagement = React.lazy(() =>
  import("./component/companyAdmin/storeManagement/StoreManagement")
);

const routes = [
  { path: "/", exact: true, name: "主頁" },
  { path: "/dashboard", name: "儀表板", component: Dashboard },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
  {
    path: "/company_admin/store_management",
    name: "StoreManagement",
    component: StoreManagement,
  },
  {
    path: "/company_manager/company_customise/image_uploader",
    name: "旋轉圖片",
    component: CompanyCustomiseImageUploader,
  },
  {
    path: "/company_manager/company_customise/main_menu_button",
    name: "主頁按鈕",
    component: CompanyCustomiseMainMenuButton,
  },
  {
    path: "/company_manager/company_customise/bottom_list",
    name: "主頁㡳表",
    component: CompanyCustomiseBottomList,
  },
  {
    path: "/company_manager/company_customise",
    name: "頁面定制",
    component: CompanyCustomise,
  },
  {
    path: "/company_manager/category_management/category_detail",
    name: "分類詳細",
    component: CategoryDetail,
  },
  {
    path: "/company_manager/category_management",
    name: "分類管理",
    component: CategoryManagement,
  },
  {
    path: "/company_manager/icon_generator",
    name: "圖標生成",
    component: IconGenerator,
  },
  {
    path: "/company_manager/item_management/item_detail",
    name: "產品詳細",
    component: ItemDetail,
  },
  {
    path: "/company_manager/item_management",
    name: "產品管理",
    component: ItemManagement,
  },
];

export default routes;
