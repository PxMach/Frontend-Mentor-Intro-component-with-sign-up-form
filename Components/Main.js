"use client";
import React from "react";

export default function Main() {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.firstname.trim()) {
      validationErrors.firstname = "First Name cannot be empty";
    }

    if (!formData.lastname.trim()) {
      validationErrors.lastname = "Last Name cannot be empty";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Looks like this is not an email";
    } else if (!/\S+@\S\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password cannot be empty";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 char";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };

  return (
    <main className="py-10 px-8 flex flex-col sm:flex-row sm:gap-8 sm:justify-center h-screen items-center text-center">
      <div className="flex flex-col gap-3 mb-6 sm:w-[28rem]  ">
        <h1 className="text-3xl sm:text-5xl font-semibold sm:text-left">
          Learn to code by watching others
        </h1>
        <p className="text-center text-gray-200 sm:text-left ">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:w-[30rem] ">
        <p className="para text-white font-semibold w-full rounded-lg px-12 py-4 shadow-md shadow-[#00000063] ">
          Try it free 7 days{" "}
          <span className=" text-gray-400 font-normal">
            then $20/mo. thereafter
          </span>
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white flex flex-col items-center gap-4 p-6 rounded-md shadow-md shadow-[#00000063]"
        >
          <div className="w-full flex flex-col">
            <input
              className="text-gray-600 border-1 border-black rounded-md my-2 py-3 px-3 placeholder:text-gray-500 placeholder:text-[.9rem]  w-full "
              type="text"
              name="firstName"
              placeholder=" First Name "
              aria-label="first name"
              onChange={handleChange}
              required
            />
            {errors.firstname && (
              <span className="text-red-500 text-xs text-right ">
                {errors.firstname}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col">
            <input
              className="text-gray-600 border-1 border-black rounded-md my-2 py-3 px-3 placeholder:text-gray-500 placeholder:text-[.9rem] w-full "
              type="text"
              name="lastName"
              placeholder=" Last Name "
              aria-label="last name"
              onChange={handleChange}
              required
            />
            {errors.lastname && (
              <span className="text-red-500 text-xs text-right">
                {errors.lastname}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col">
            <input
              className="text-gray-600 border-1 border-black rounded-md my-2 py-3 px-3 placeholder:text-gray-500 placeholder:text-[.9rem] w-full "
              type="email"
              name="email"
              placeholder=" Email Address"
              aria-label="email"
              onChange={handleChange}
              required
            />
            {errors.email && (
              <span className="text-red-500 text-xs text-right">
                {errors.email}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col">
            <input
              className="text-gray-600 border-1 border-black rounded-md my-2 py-3 px-3 placeholder:text-gray-500 placeholder:text-[.9rem] w-full "
              type="password"
              name="password"
              placeholder=" Password"
              aria-label="password"
              onChange={handleChange}
              required
            />
            {errors.password && (
              <span className="text-red-500 text-xs text-right">
                {errors.password}
              </span>
            )}
          </div>

          <button
            className="bg-[#79c87e] py-3 w-full rounded-md uppercase text-[0.9rem] font-semibold shadow-md hover:cursor-pointer hover:bg-[#82c986]"
            type="submit"
          >
            Claim your free trial
          </button>
          <p className="text-[0.8rem] text-gray-300 font-semibold mb-2">
            By clicking the button, you are agreeing to our
            <span className="text-red-400 font-bold "> Terms and Services</span>
          </p>
        </form>
      </div>
    </main>
  );
}
