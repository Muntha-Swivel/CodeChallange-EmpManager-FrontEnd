import * as yup from "yup";

const onlyAlphabetsRegex = /^[A-Za-z]+$/;
const phoneNumberRegex =
  /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is Required")
    .min(6, "Should have minimum 6 characters")
    .max(10, "Maximum number of characters is 10")
    .matches(onlyAlphabetsRegex, "Should be only alphabets"),
  lastName: yup
    .string()
    .required("Last Name is Required")
    .min(6, "Should have minimum 6 characters")
    .max(10, "Maximum number of characters is 10")
    .matches(onlyAlphabetsRegex, "Should be only alphabets"),
  email: yup.string().email().required("Email is Required"),
  phone: yup
    .string()
    .required("Please Provide  a Phone Number")
    .matches(phoneNumberRegex, "Please enter a valid phone number"),
  gender: yup.string().required("Please select a gender").min(1).max(1),
});

export default userSchema;
