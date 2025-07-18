export default function Home() {
  return (
    <main className="py-10 px-8 flex flex-col items-center text-center gap-8">
      <h1 className="text-3xl font-semibold font-">
        Learn to code by watching others
      </h1>
      <p className="text-center text-gray-200 ">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
      <p className="flex flex-col ">Try it free 7 days<span> then $20/mo. thereafter</span></p>
      <form>
        <input name="text" placeholder=" First Name " aria-label="first name" />
        <input name="text" placeholder=" Last Name " aria-label="last name" />
        <input name="email" placeholder=" Email Address" aria-label="email" />
        <input name="password" placeholder=" Password" aria-label="password" />
        <button type="submit">Claim your free trial </button>
        <p>
          By clicking the button, you are agreeing to our
          <span> Terms and Services</span>
        </p>
      </form>
    </main>
  );
}
