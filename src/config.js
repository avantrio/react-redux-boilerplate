let API_BASE_URL = "http://localhost:3000";

if (process.env.NODE_ENV === "production") {
  API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
}

let APP_NAME = "REACT_BOILERPLATE_AVANTRIO.";

export { 
  API_BASE_URL,
  APP_NAME,
};
