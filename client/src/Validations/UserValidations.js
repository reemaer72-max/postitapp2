import * as yup from "yup"; //import all exports from the yup

export const userSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Not valid email format")
    .required("Email is required"),
  password: yup.string().min(4).max(20).required("Password is required"),

  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords Don't Match")
    .required(),
  /*
  age1: yup
    .number()
    .typeError("Value must be a number...")
    .integer("Value must an integer...")
    .required("Age is required...")
    .min(10)
    .max(18),

  salary: yup
    .string()
    .matches(/^\d+\.\d+$/, "Value must have a decimal value")
    .required("Salary is required...")
    .test("is-decimal", "Value must have a decimal value", (value) => {
      if (!value) return false;
      return /^\d+\.\d+$/.test(value); // Ensures it contains a decimal part
    }),
*/
});
