import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2, ({ min }) => `First Name must be at least ${min} characters`)
    .max(20, ({ max }) => `First Name must be at most ${max} characters`)
    .required("Please enter your first name.")
    .transform((value) => value && value.toUpperCase()) // This will transform the input to uppercase
    .matches(/^[A-Z]+$/, "First Name must be only uppercase letters."),
  lastName: Yup.string()
    .min(2, ({ min }) => `Last Name must be at least ${min} characters`)
    .max(20, ({ max }) => `Last Name must be at most ${max} characters`)
    .required("Please enter your last name.")
    .transform((value) => value && value.toUpperCase()) // This will transform the input to uppercase
    .matches(/^[A-Z]+$/, "Last Name must be only uppercase letters."),
  phone: Yup.string()
    // .matches(/^\+?(?:1|44|91)\d{10,14}$/, "Invalid phone number.")
    // .required("Please enter your phone number."),
    // .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Please enter your phone number."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  country: Yup.string().required("Please select your country."), //countries selection dropdown
  passengers: Yup.number() //number of passengers selection dropdown
    .typeError("Please select the number of passengers")
    .required("Please select the number of passengers")
    .min(1, "Please select at least 1 passenger"),
  departureCity: Yup.string().required("Please select your departure."),
  arrivalCity: Yup.string().required("Please select your arrival."),
  departureDate: Yup.date().required("Please select your departure date."), //departure datepicker for booking
  returnDate: Yup.date().required("Please select your return date."), //return datepicker
  preferredAircraft: Yup.string().required(
    "Please select your preferred aircraft."
  ), //choosing preferred aircraft dropdown
  flownBefore: Yup.string().required("Please select if you have flown before."), //yes/no dropdown
});
