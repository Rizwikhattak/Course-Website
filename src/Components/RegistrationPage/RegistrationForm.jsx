import React from "react";

const RegistrationForm = () => {
  return (
    <section className="registration-form-page bg-[#242424] h-screen w-full flex justify-center items-center p-5">
      <div className="form-section w-full h-full lgmd:w-[60%] lgmd:h-[90%] flex justify-between bg-white shadow-custom rounded-2xl">
        <div className="form-nav-btns w-[40%] rounded-l-xl flex flex-col gap-y-5 text-white bg-custom-gradient p-5 h-full">
          <h1 className=" lgmd:text-xl font-semibold">
            Welcome to Programmers Marathon
          </h1>
          <h2>Please Fill this form to ensure your enrollment</h2>
        </div>
        <div className="w-full h-full">
          <form className="max-w-md mx-auto h-full w-full p-5 lgmd:p-10 rounded-r-xl">
            <div className="grid md:grid-cols-2 md:gap-6 rounded-r-xl">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_city"
                id="floating_city"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_city"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your City
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_number"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_number"
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
                Select your Educaation level
              </label>
              <select
                id="education"
                className="bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" disabled selected hidden></option>
                <option>Secondary Level</option>
                <option>Intermediate Level</option>
                <option>Under Greadute</option>
                <option>Graduate</option>
              </select>
            </div>

            <fieldset>
              <legend className="sr-only">Gender</legend>

              <div className="genders flex flex-col justify-normal items-start lgmd:flex-row  lgmd:justify-between lgmd:items-center">
                <div className="flex items-center mb-4">
                  <input
                    id="Male"
                    type="radio"
                    name="Gender"
                    defaultValue="Male"
                    className="w-4 h-4 border-gray-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Male"
                    className="block ms-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="Female"
                    type="radio"
                    name="Gender"
                    defaultValue="Female"
                    className="w-4 h-4 border-gray-300  dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Female"
                    className="block ms-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Female
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="Others"
                    type="radio"
                    name="Gender"
                    defaultValue="Others"
                    className="w-4 h-4 border-gray-300  dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
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
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
