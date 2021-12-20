const url = "/wp-json/wc/v3/";

const PRODUCTS = url + "products";
const CUSTOMERS = url + "customers";
const ORDERS = url + "orders";
const CATEGORIES = PRODUCTS + "/categories";
const LOGIN_JWT = "wp-json/jwt-auth/v1/token";
const STATUS = { loading: "loading", success: "success", idle: "idle" };

export { url, PRODUCTS, CATEGORIES, CUSTOMERS, LOGIN_JWT, ORDERS, STATUS };
