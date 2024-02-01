export const checkValidDate = (email, password) => {
  // we got this validaters from regex

  const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const ispassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmail) return "Email Not vaild!";
  if (!ispassword) return "Password Not vaild!";

  return null;
};
// checkValidate();
