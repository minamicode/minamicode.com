"use client";

import { useEffect, useState } from "react";

const asciiArts = [
  // Breathe
  ` ____                 _   _          _ 
| __ ) _ __ ___  __ _| |_| |__   ___| |
|  _ \\| '__/ _ \\/ _\` | __| '_ \\ / _ \\ |
| |_) | | |  __/ (_| | |_| | | |  __/_|
|____/|_|  \\___|\\__,_|\\__|_| |_|\\___(_)`,

  // Drink water
  ` ____       _       _                    _            _ 
|  _ \\ _ __(_)_ __ | | __ __      ____ _| |_ ___ _ __| |
| | | | '__| | '_ \\| |/ / \\ \\ /\\ / / _\` | __/ _ \\ '__| |
| |_| | |  | | | | |   <   \\ V  V / (_| | ||  __/ |  |_|
|____/|_|  |_|_| |_|_|\\_\\   \\_/\\_/ \\__,_|\\__\\___|_|  (_)`,

  // Sleep
  ` ____  _                 _ 
/ ___|| | ___  ___ _ __ | |
\\___ \\| |/ _ \\/ _ \\ '_ \\| |
 ___) | |  __/  __/ |_) |_|
|____/|_|\\___|\\___|  /__(_)
                  |_|      `,

  // Enjoy
  ` _____        _             _ 
| ____|_ __  (_) ___  _   _| |
|  _| | '_ \\ | |/ _ \\| | | | |
| |___| | | || | (_) | |_| |_|
|_____|_| |_|/ |\\___/ \\__, (_)
           |__/       |___/   `,

  // Explore
  ` _____            _                _ 
| ____|_  ___ __ | | ___  _ __ ___| |
|  _| \\ \\/ / '_ \\| |/ _ \\| '__/ _ \\ |
| |___ >  <| |_) | | (_) | | |  __/_|
|_____/_/\\_\\ .__/|_|\\___/|_|  \\___(_)
           |_|                       `,
];

const Message = () => {
  const [selectedArt, setSelectedArt] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * asciiArts.length);
    setSelectedArt(asciiArts[randomIndex]);
  }, []);

  return (
    <pre className="text-xs leading-none mt-6 font-mono">{selectedArt}</pre>
  );
};

export default Message;
