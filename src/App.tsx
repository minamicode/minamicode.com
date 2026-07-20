function App() {
  return (
    <main className="max-w-[70ch] mx-auto p-4">
      <div className="mt-6">
        <img
          src="/minami.jpg"
          alt="Minami"
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>

      <p className="mt-8">Hi, I'm Minami.</p>

      <p className="mt-6">
        I'm the co-founder of{" "}
        <a href="https://internetgarden.co/" target="_blank">
          Internet Garden
        </a>
        .
      </p>

      <p className="mt-6">
        I'm currently working on{" "}
        <a href="https://www.wfhjobs.co.uk/" target="_blank">
          WFH Jobs
        </a>{" "}
        and{" "}
        <a href="https://www.bankconverter.io/" target="_blank">
          BankConverter
        </a>
        .
      </p>

      <p className="mt-6">
        Find me on{" "}
        <a href="https://bsky.app/profile/minamicode.com" target="_blank">
          Bluesky
        </a>
        .
      </p>
    </main>
  );
}

export default App;
