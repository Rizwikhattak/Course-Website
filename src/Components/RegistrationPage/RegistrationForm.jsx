import React, { useState } from "react";
import emailjs from "emailjs-com";
import ModalRegistration from "./ModalRegistration.jsx";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    phone: "",
    education: "",
    course: "",
    gender: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const checkAllFields = () => {
    const {
      firstName,
      lastName,
      city,
      email,
      phone,
      education,
      course,
      gender,
    } = formData;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      city.length > 0 &&
      email.match(emailPattern) &&
      phone.length >= 11 &&
      education.length > 0 &&
      course.length > 0 &&
      gender.length > 0
    ) {
      toggleModal();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_abel4tc", // replace with your EmailJS service ID
        "template_zr3fujg", // replace with your EmailJS template ID
        formData,
        "HVoAjmeGyDA39Aytg" // replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://programmersmarathon.wuaze.com/?i=1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.success) {
        // alert("Form submitted successfully!");
        // Send email on successful form submission
      } else {
        // alert("Error submitting form." + result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="registration-form-page bg-[#242424] h-screen w-full flex justify-center items-center p-5">
      <div className="form-section w-full h-full lgmd:w-[60%] flex justify-between bg-white shadow-custom rounded-2xl">
        <div className="form-nav-btns w-[40%] rounded-l-xl flex flex-col gap-y-5 text-white bg-custom-gradient p-5 h-full">
          <h1 className="lgmd:text-xl font-semibold">
            Welcome to Programmers Marathon
          </h1>
          <h2>Please Fill this form to ensure your enrollment</h2>
        </div>
        <div className="w-full h-full">
          <form
            className="max-w-md mx-auto h-full w-full p-5 lgmd:p-8 rounded-r-xl"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 md:gap-6 rounded-r-xl">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
                <label
                  htmlFor="firstName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
                <label
                  htmlFor="lastName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="city"
                id="city"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label
                htmlFor="city"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your City
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone No
              </label>
            </div>
            <div className="education pb-3">
              <label
                htmlFor="education"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Select your Education level
              </label>
              <select
                id="education"
                name="education"
                className="bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}
              >
                <option value="" disabled selected hidden></option>
                <option value="Secondary Level">Secondary Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>
            <div className="course pb-3">
              <label
                htmlFor="course"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Select your Preffered Course
              </label>
              <select
                id="course"
                name="course"
                className="bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}
              >
                <option value="" disabled selected hidden></option>
                <option value="Front End Development">
                  Front End Development
                </option>
                <option value="Graphics Designing">Graphics Designing</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="E-Commerce">E-Commerce</option>
              </select>
            </div>
            <fieldset>
              <legend className="sr-only">Gender</legend>
              <div className="genders flex flex-wrap justify-normal items-start gap-2 lgmd:justify-between lgmd:items-center">
                <div className="flex items-center">
                  <input
                    id="Male"
                    type="radio"
                    name="gender"
                    value="Male"
                    className="w-4 h-4 border-gray-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="Male"
                    className="block ms-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="Female"
                    type="radio"
                    name="gender"
                    value="Female"
                    className="w-4 h-4 border-gray-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="Female"
                    className="block ms-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Female
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="Others"
                    type="radio"
                    name="gender"
                    value="Others"
                    className="w-4 h-4 border-gray-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="Others"
                    className="block ms-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Others
                  </label>
                </div>
              </div>
            </fieldset>
            <button
              type="submit"
              className="text-white bg-blue-700 mt-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={isSubmitting}
              onClick={checkAllFields}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ModalRegistration toggleModal={toggleModal} isOpen={isOpen} />
    </section>
  );
};

export default RegistrationForm;
