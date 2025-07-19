export default function Home() {
  return (
    <main className="py-10 px-8  flex flex-col sm:flex-row sm:gap-8 h-screen items-center text-center">
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
          <input
            className="border-1 border-black rounded-md my-2 py-3 placeholder:text-gray-500 placeholder:text-[.9rem] placeholder:px-2 w-full "
            name="text"
            placeholder=" First Name "
            aria-label="first name"
          />
          <input
            className="border-1 border-black rounded-md my-2 py-3 placeholder:text-gray-500 placeholder:text-[.9rem] placeholder:px-2 w-full "
            name="text"
            placeholder=" Last Name "
            aria-label="last name"
          />
          <input
            className="border-1 border-black rounded-md my-2 py-3 placeholder:text-gray-500 placeholder:text-[.9rem] placeholder:px-2 w-full "
            name="email"
            placeholder=" Email Address"
            aria-label="email"
          />
          <input
            className="border-1 border-black rounded-md my-2 py-3 placeholder:text-gray-500 placeholder:text-[.9rem] placeholder:px-2 w-full "
            name="password"
            placeholder=" Password"
            aria-label="password"
          />
          <button
            className="bg-[#79c87e] py-3 w-full rounded-md uppercase text-[0.9rem] font-semibold shadow-md"
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
