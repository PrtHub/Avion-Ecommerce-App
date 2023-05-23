const Signin = () => {
  return (
    <>
      <div
        className="content-wrapper flex flex-col items-center justify-center py-20"
        id="signin"
      >
        <section className="flex flex-col items-center justify-center gap-4">
          <h1 className="header-text ">
            Join the club and get the benefits
          </h1>
          <p className="max-w-sm text-center para">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
        </section>
        <form className="flex items-center justify-center">
          <input
            type="text"
            placeholder="your@email.com"
            className="w-full sm:w-64 h-14  placeholder:text-Primary text-Primary placeholder:text-opacity-40 text-opacity-40 px-4 py-2 outline-none border-none"
          />
          <button className="w-28 h-14 button">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
