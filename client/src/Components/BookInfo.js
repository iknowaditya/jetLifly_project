import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Country } from "country-state-city";
import "react-datepicker/dist/react-datepicker.css";
import { signUpSchema } from "../Schemas";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { useFormik } from "formik";

const initialValues = {
  // Define initial form values..
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  country: "",
  passengers: "",
  departureCity: "",
  arrivalCity: "",
  departureDate: null, // Set initial value as null
  returnDate: null, // Set initial value as null
  preferredAircraft: "",
  flownBefore: "Yes",
};

function BookInfo() {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false); // when form submitted..
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, action) => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        if (!apiUrl) {
          throw new Error("API URL is not defined in environment variables.");
        }

        // Correct URL construction
        const response = await axios.post(`${apiUrl}/api/reqData`, values);
        action.resetForm();
        setFormSubmitted(true); // Set formSubmitted to true after successful submission
        toast.success("Your response has been successfully submitted.");
        // Clear the form fields
        setDepartureDate(null);
        setReturnDate(null);
        console.log(response.data);
      } catch (error) {
        toast.error("An error occurred while submitting the form.");
        console.log(error);
      }

      // Handle form submission..
      console.log(values);
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  console.log(errors);

  const countryList = Country.getAllCountries().map((country) => country.name);

  const aircraftOptions = [
    "Very Light Jets",
    "Small Light Jets",
    "Super Light Jets",
    "Midsize Cabin Jets",
    "Super Midsize Cabin Jets",
    "Heavy Jets",
    "Executive Liners/Bizliners",
    "Business Jets",
  ];

  const aircraftOptionsList = aircraftOptions.map((option, index) => (
    <option className="text-gray-700" key={index} value={option}>
      {option}
    </option>
  ));

  return (
    <section className="bg-white ">
      <Toaster />
      <div className="flex justify-center min-h-fit">
        <div className="flex items-center w-full max-w-3xl  mx-auto lg:px- lg:w-3/4">
          <div className="">
            <div className="items-center justify-center flex ">
              <h1 className="text-3xl font-bold  tracking-normal text-gray-800 capitalize ">
                Request A Quote For A{" "}
                <span className="relative whitespace-nowrap text-teal-500">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-2/3 left-0 h-[0.58em] w-full fill-teal-300/70"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span className="relative">Charter</span>
                </span>{" "}
                Jet Rental.
              </h1>
            </div>

            <p className="mt-12 text-gray-500">
              Please fill out the form below and a Charter Jet One
              representative will follow up shortly regarding your custom
              private jet charter request.
            </p>

            <div className="border border-neutral-800 p-9 mt-12">
              <div className="flex items-center justify-center">
                <h1 className="text-3xl font-bold text-neutral-700">
                  Request Information
                </h1>
              </div>
              {formSubmitted && (
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-6"
                  role="alert"
                >
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline">
                    {" "}
                    Your response has been successfully submitted.
                  </span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <svg
                        className="fill-current h-6 w-6"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"></path>
                      </svg>
                    </button>
                  </span>
                </div>
              )}
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8"
              >
                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-semibold text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="firstName"
                    autoComplete="off"
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Text Here.."
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.firstName && touched.firstName ? (
                    <p className="form error text-sm mt-1  text-red-600">
                      {errors.firstName}
                    </p>
                  ) : null}
                </div>

                <div className="relative">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-semibold text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="lastName"
                    autoComplete="off"
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Text Here.."
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors?.lastName && touched.lastName ? (
                    <p className="form error text-sm mt-1  text-red-600">
                      {errors.lastName}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-semibold text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    autoComplete="off"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Text Here.."
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors?.phone && touched.phone ? (
                    <p className="form error text-sm mt-1  text-red-600">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Text Here.."
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors?.email && touched.email ? (
                    <p className="form error text-sm mt-1  text-red-600">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-600">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="off"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-teal-400 focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={values.country} // Update the value attribute
                    onChange={handleChange} // Use handleChange to update formik state
                    onBlur={handleBlur} // Use handleBlur to update formik state
                    style={{ color: "#4b5563" }}
                  >
                    <option value="">Select your country</option>
                    {countryList.map((country, index) => (
                      <option
                        className="text-gray-700"
                        key={index}
                        value={country}
                        label={country}
                      >
                        {country.name}
                      </option>
                    ))}
                  </select>
                  {errors?.country && touched.country ? (
                    <p className="form error text-sm mt-1  text-red-600">
                      {errors.country}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="passengers"
                    className="block mb-2 text-sm font-semibold text-gray-600"
                  >
                    Number of Passengers
                  </label>
                  <select
                    autoComplete="off"
                    id="passengers"
                    name="passengers"
                    value={values.passengers}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    {[...Array(20).keys()].map((i) => (
                      <option key={i + 1} className="text-gray-700">
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  {errors?.passengers && touched.passengers ? (
                    <p className="form error text-sm mt-1  text-red-600">
                      {errors.passengers}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="block mb-4 text-sm font-semibold text-gray-600 ">
                    Departure City
                  </label>
                  <input
                    autoComplete="off"
                    id="departureCity"
                    name="departureCity"
                    value={values.departureCity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Text Here.."
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors?.departureCity && touched.departureCity ? (
                    <p className="form error text-sm mt-1  text-red-600">
                      {errors.departureCity}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="block mb-4 text-sm font-semibold text-gray-600">
                    Arrival City
                  </label>
                  <input
                    autoComplete="off"
                    id="arrivalCity"
                    name="arrivalCity"
                    value={values.arrivalCity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Text Here.."
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors?.arrivalCity && touched.arrivalCity ? (
                    <p className="form error text-sm mt-1  text-red-600">
                      {errors.arrivalCity}
                    </p>
                  ) : null}
                </div>

                <div className="flex">
                  <div className="w-1/2 pr-2">
                    <label className="block mb-2 text-sm font-semibold text-gray-600">
                      Departure Date
                    </label>
                    <DatePicker
                      name="departureDate"
                      id="departureDate"
                      selected={departureDate}
                      onChange={(date) => {
                        setDepartureDate(date);
                        handleChange({
                          target: {
                            name: "departureDate",
                            value: date,
                          },
                        });
                      }}
                      onBlur={handleBlur}
                      placeholderText="Select Date"
                      dateFormat="MM/dd/yyyy"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors?.departureDate && touched.departureDate ? (
                      <p className="form error text-sm mt-1  text-red-600">
                        {errors.departureDate}
                      </p>
                    ) : null}
                  </div>

                  <div className="w-1/2 pl-2">
                    <label className="block mb-2 text-sm font-semibold text-gray-600">
                      Return Date
                    </label>
                    <DatePicker
                      name="returnDate"
                      id="returnDate"
                      selected={returnDate}
                      onChange={(date) => {
                        setReturnDate(date);
                        handleChange({
                          target: {
                            name: "returnDate",
                            value: date,
                          },
                        });
                      }}
                      onBlur={handleBlur}
                      placeholderText="Select Date"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-teal-400 focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors?.returnDate && touched.returnDate ? (
                      <p className="form error text-sm mt-1  text-red-600">
                        {errors.returnDate}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="block mb-4 text-sm font-semibold text-gray-600">
                    Preferred Aircraft
                  </label>
                  <select
                    id="preferredAircraft"
                    name="preferredAircraft"
                    value={values.preferredAircraft}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    {aircraftOptionsList}
                  </select>
                  {errors?.preferredAircraft && touched.preferredAircraft ? (
                    <p className="form error text-sm mt-1  text-red-600">
                      {errors.preferredAircraft}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-600">
                    Have You Flown Privately Before?
                  </label>
                  <select
                    id="flownBefore"
                    name="flownBefore"
                    value={values.flownBefore}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-teal-400  focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option className="text-gray-700">Yes</option>
                    <option className="text-gray-700">No</option>
                  </select>
                  {errors?.flownBefore && touched.flownBefore ? (
                    <p className="form error text-sm mt-1  text-red-600">
                      {errors.flownBefore}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="text-white mt-6 my-2 py-3 items-center justify-center bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-base   focus:outline-none dark:focus:ring-teal-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookInfo;
