import Message from "./_components/Message";

export default function Home() {
  return (
    <main className="max-w-[70ch] mx-auto p-4">
      <p className="mt-6">
        Hello, I&apos;m Minami.
        <br />
      </p>

      <p className="mt-6">
        Co-founder of {""}
        <a
          href="https://internetgarden.co/"
          className="underline underline-offset-2"
          target="_blank"
        >
          Internet Garden
        </a>
      </p>

      <p className="mt-6">
        Currently working on
        <br />
        <a
          href="https://www.weddinglocationsnearme.com/"
          className="underline underline-offset-2"
          target="_blank"
        >
          Wedding Locations Near Me
        </a>
        <br />
        <a
          href="https://marrybirds.com/"
          className="underline underline-offset-2"
          target="_blank"
        >
          MarryBirds
        </a>
        <br />
        <a
          href="https://aboutyourgoals.com/"
          className="underline underline-offset-2"
          target="_blank"
        >
          About Your Goals
        </a>
      </p>

      <p className="mt-6">Interested in</p>
      <ul className="list-['-_'] pl-4">
        <li>JavaScript, TypeScript, React, Next.js</li>
        <li>C++, Competitive programming</li>
        <li>Game, Music game</li>
      </ul>

      <p className="mt-6">
        Find me on{" "}
        <a
          href="https://bsky.app/profile/minamicode.com"
          className="underline underline-offset-2"
        >
          Bluesky
        </a>
      </p>

      <p className="mt-6">
        <a href="/journal" className="underline underline-offset-2">
          Journal
        </a>{" "}
        -{" "}
        <a href="/game" className="underline underline-offset-2">
          Game
        </a>
      </p>

      <Message />
    </main>
  );
}
