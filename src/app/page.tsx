import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[70ch] mx-auto p-4">
      <div className="mt-6">
        <Image
          src="/minami.jpg"
          alt="Minami"
          width={200}
          height={200}
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>

      <p className="mt-8">Hi, I&apos;m Minami.</p>

      <p className="mt-6">
        I&apos;m the co-founder of{" "}
        <a href="https://internetgarden.co/" target="_blank">
          Internet Garden
        </a>
        .
      </p>

      <p className="mt-6">
        I&apos;m currently working on{" "}
        <a href="https://www.payrollrabbit.com/free-tools" target="_blank">
          PayrollRabbit
        </a>{" "}
        and{" "}
        <a href="https://remotecorgi.com" target="_blank">
          RemoteCorgi
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

      <p className="mt-6">
        Would you like to read my <a href="/journal">journal</a> or play a{" "}
        <a href="/game">memory game</a>?
      </p>
    </main>
  );
}
