const ErrorTypes = {
  GENERAL_ERROR: { errorNumber: 600, errorMessage: "There seems to be a problem, please try again later", isShowStackTrace: true },
  INVALID_PRICE: { errorNumber: 601, errorMessage: "Invalid price, please try another one", isShowStackTrace: false },
  INVALID_START_DATE: { errorNumber: 602, errorMessage: "The start date of the promotion after is end", isShowStackTrace: false },
  INVALID_PASSWORD: { errorNumber: 603, errorMessage: "Invalid password, please try another one", isShowStackTrace: false },
  PASSWORD_IS_NULL: { errorNumber: 604, errorMessage: "The password is null, please try another one", isShowStackTrace: false },
  INVALID_USER_NAME: { errorNumber: 605, errorMessage: "Invalid user name, please try another one", isShowStackTrace: false },
  USER_NAME_IS_NULL: { errorNumber: 606, errorMessage: "The user name is null, please try another one", isShowStackTrace: false },
  INVALID_PHONE_NUMBER: { errorNumber: 607, errorMessage: "Invalid phone number, please try another one", isShowStackTrace: false },
  COMPANY_NAME_ALREADY_EXIST: { errorNumber: 609, errorMessage: "The company name already exists, please enter another name", isShowStackTrace: false },
  USER_ALREADY_EXIST: { errorNumber: 610, errorMessage: "The user name already exists, please enter another user name", isShowStackTrace: false },
  USER_NAME_ALREADY_EXIST: { errorNumber: 611, errorMessage: "The user name already exists", isShowStackTrace: false },
  INVALID_ADDRESS: { errorNumber: 612, errorMessage: "Invalid address, please try another one", isShowStackTrace: false },
  ADDRESS_IS_NULL: { errorNumber: 613, errorMessage: "The address is null, please try another one", isShowStackTrace: false },
  LOGIN_FAILURE: { errorNumber: 614, errorMessage: "Login failure, user name or password wrong", isShowStackTrace: false },
  INVALID_CATEGORY_NAME: { errorNumber: 615, errorMessage: "Invalid name, please try another one", isShowStackTrace: false },
  PHONE_NUMBER_IS_NULL: { errorNumber: 616, errorMessage: "The phone number is null, please try another one", isShowStackTrace: false },
  COMPANY_NAME_IS_NULL: { errorNumber: 617, errorMessage: "The company name is null", isShowStackTrace: false },
  CATEGORY_NAME_IS_NULL: { errorNumber: 618, errorMessage: "The category name is null", isShowStackTrace: false },
  COUPON_NAME_ALREADY_EXIST: { errorNumber: 619, errorMessage: "The coupon name already exists, please enter another name", isShowStackTrace: false },
};

module.exports = ErrorTypes;
