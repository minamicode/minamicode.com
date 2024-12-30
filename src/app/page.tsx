export default function Home() {
  return (
    <main className="max-w-[70ch] mx-auto p-4">
      <p className="mt-6">
        Hello, I'm Minami.
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

      <p className="mt-6">Interested</p>
      <ul className="list-['-_'] pl-4">
        <li>JavaScript, TypeScript, React, Next.js</li>
        <li>C++, Competitive programming</li>
        <li>Game, Music game</li>
      </ul>

      <p className="mt-6">
        Find me on
        <br />
        <a
          href="https://github.com/minamicode"
          className="underline underline-offset-2"
        >
          GitHub
        </a>
        <br />
        <a
          href="https://bsky.app/profile/minamicode.com"
          className="underline underline-offset-2"
        >
          Bluesky
        </a>
        <br />
      </p>

      <pre className="text-xs leading-none mt-6 font-mono">
        {` ____                 _   _          _ 
| __ ) _ __ ___  __ _| |_| |__   ___| |
|  _ \\| '__/ _ \\/ _\` | __| '_ \\ / _ \\ |
| |_) | | |  __/ (_| | |_| | | |  __/_|
|____/|_|  \\___|\\__,_|\\__|_| |_|\\___(_)`}
      </pre>
    </main>
  );
}
