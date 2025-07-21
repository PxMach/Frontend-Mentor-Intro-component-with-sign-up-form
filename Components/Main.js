"use client";
import React from "react";

export default function Main() {
  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  function handleClick(e) {
    e.preventDefault();

    let valid = true;

    if (firstNameError.trim() === "") {
      setFirstNameError("First Name cannot be empty");
      valid = false;
    } else {
      setFirstNameError("");
    }

    if (lastNameError.trim() === "") {
      setLastNameError("Last Name cannot be empty");
      valid = false;
    } else {
      setLastNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailError)) {
      setEmailError("Looks like this is not an email");
      valid = false;
    } else {
      setEmailError("");
    }

  }

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
        <form className="bg-white flex flex-col items-center gap-4 p-6 rounded-md shadow-md shadow-[#00000063]">
          <div className="w-full flex flex-col">
            <input
              className="text-gray-600 border-1 border-black rounded-md my-2 py-3 px-3 placeholder:text-gray-500 placeholder:text-[.9rem]  w-full "
              type="text"
              name="first Name"
              placeholder=" First Name "
              aria-label="first name"
              value={firstNameError}
              onChange={(e) => setFirstNameError(e.target.value)}
              required
            />
            {firstNameError && (
              <span className="text-red-500 text-right text-[0.8rem]">
                First Name cannot be empty
              </span>
            )}
          </div>

          <div className="w-full flex flex-col">
            <input
              className="text-gray-600 border-1 border-black rounded-md my-2 py-3 px-3 placeholder:text-gray-500 placeholder:text-[.9rem] w-full "
              type="text"
              name="last Name"
              placeholder=" Last Name "
              aria-label="last name"
              value={lastNameError}
              onChange={(e) => setLastNameError(e.target.value)}
              required
            />
            {lastNameError && (
              <span className="text-red-500 text-right text-[0.8rem]">
                Last Name cannot be empty
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
              value={emailError}
              onChange={(e) => setEmailError(e.target.value)}
              required
            />
            {emailError && (
              <span className="text-red-500 text-right text-[0.8rem]">
                Looks like this is not an email
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
              required
            />
          </div>

          <button
            className="bg-[#79c87e] py-3 w-full rounded-md uppercase text-[0.9rem] font-semibold shadow-md hover:cursor-pointer hover:bg-[#82c986]"
            type="submit"
            onClick={handleClick}
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
