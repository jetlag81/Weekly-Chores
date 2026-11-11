// Chore Celebration GIF Library & Randomized Sequencer
// Manages randomized Good Job, Almost, and Meh GIFs for instant celebration popups when chores are checked off.

export const GOOD_JOB_GIFS: string[] = [
  "/gifs/Good Job/Awesome The Best GIF by A1 Slovenija.gif",
  "/gifs/Good Job/Awesome Well Done GIF by VeeFriends.gif",
  "/gifs/Good Job/Baby Success GIF.gif",
  "/gifs/Good Job/Celebrate Happy Birthday GIF by Sesame Street.gif",
  "/gifs/Good Job/Dance Dancing GIF by J Balvin.gif",
  "/gifs/Good Job/Dragon Ball Z Ok GIF by slicedbread.gif",
  "/gifs/Good Job/Excited Clap GIF.gif",
  "/gifs/Good Job/Excited Great Job GIF by Sesame Street.gif",
  "/gifs/Good Job/Excited Season 5 GIF by SpongeBob SquarePants.gif",
  "/gifs/Good Job/gif (1).gif",
  "/gifs/Good Job/gif (3).gif",
  "/gifs/Good Job/gif.gif",
  "/gifs/Good Job/Great Job Applause GIF by Sky.gif",
  "/gifs/Good Job/Great Job GIF by Justin.gif",
  "/gifs/Good Job/Great Job GIF by MOODMAN.gif",
  "/gifs/Good Job/Great Job Nod GIF by 2TON Agency.gif",
  "/gifs/Good Job/Happy Baby GIF by DAZN.gif",
  "/gifs/Good Job/Happy Chris Farley GIF by Rodney Dangerfield.gif",
  "/gifs/Good Job/Happy Dance GIF by DAZN.gif",
  "/gifs/Good Job/Happy Dance GIF by Rodney Dangerfield.gif",
  "/gifs/Good Job/Happy Fresh Prince GIF by Nick At Nite.gif",
  "/gifs/Good Job/Happy George Costanza GIF.gif",
  "/gifs/Good Job/Happy Parks And Rec GIF.gif",
  "/gifs/Good Job/Happy So Excited GIF.gif",
  "/gifs/Good Job/Happy Will Ferrell GIF.gif",
  "/gifs/Good Job/Hell Yeah Yes GIF by VeeFriends.gif",
  "/gifs/Good Job/hip hop dance GIF.gif",
  "/gifs/Good Job/Lets Go Dancing GIF by Mason Ramsey.gif",
  "/gifs/Good Job/Lets Go Yes GIF by DINOSALLY.gif",
  "/gifs/Good Job/loved one b-day GIF.gif",
  "/gifs/Good Job/Michael Jackson Dancing GIF.gif",
  "/gifs/Good Job/Rep Celebrate GIF.gif",
  "/gifs/Good Job/Sad Kids GIF by de chinezen.gif",
  "/gifs/Good Job/Spongebob Squarepants Ok GIF.gif",
  "/gifs/Good Job/Well Done Ok GIF by Ka-pow.gif",
  "/gifs/Good Job/Well Done Reaction GIF.gif",
  "/gifs/Good Job/Well Done Thank You GIF by Spotify.gif",
  "/gifs/Good Job/Well Done Yes GIF by Jazz Memes.gif",
  "/gifs/Good Job/Well Done Yes GIF by Originals.gif",
  "/gifs/Good Job/You Are Awesome David Bowie GIF by Justin.gif",
  "/gifs/Good Job/You Rock GIF (1).gif",
  "/gifs/Good Job/You Rock GIF.gif",
  "/gifs/Good Job/Youre Great GIF by Sesame Street (1).gif"
];

export const ALMOST_GIFS: string[] = [
  "/gifs/Almost/almost GIF.gif",
  "/gifs/Almost/angry beavers nicksplat GIF.gif",
  "/gifs/Almost/schooled bryan callen GIF by Sony Pictures Television.gif",
  "/gifs/Almost/Season 6 Episode 20 GIF by SpongeBob SquarePants.gif",
  "/gifs/Almost/Seth Meyers Sarcasm GIF by Late Night with Seth Meyers.gif",
  "/gifs/Almost/Wait Rushing GIF by Verne Robotaxi.gif"
];

export const MEH_GIFS: string[] = [
  "/gifs/Meh/Bored Married With Children GIF.gif",
  "/gifs/Meh/Disappointed Dog GIF.gif",
  "/gifs/Meh/Disappointed Monkey GIF by Justin.gif",
  "/gifs/Meh/Do Better Level Up GIF by Digi 995.gif",
  "/gifs/Meh/Im Not No Way GIF.gif",
  "/gifs/Meh/Kermit The Frog No GIF by Muppet Wiki (1).gif",
  "/gifs/Meh/Mark Wahlberg Wow GIF by Daddy's Home.gif",
  "/gifs/Meh/meh ha ha GIF by VICE En Español.gif",
  "/gifs/Meh/nicksplat GIF.gif",
  "/gifs/Meh/No Way Cat GIF.gif",
  "/gifs/Meh/Not Funny No GIF.gif",
  "/gifs/Meh/Oh No Deal With It GIF by DreamWorks Animation.gif",
  "/gifs/Meh/Sad Its Over GIF by Star Wars.gif",
  "/gifs/Meh/Sad Reels GIF.gif",
  "/gifs/Meh/Season 4 Whatever GIF by Friends.gif",
  "/gifs/Meh/Season 5 Idk GIF by Paramount+.gif",
  "/gifs/Meh/Spider Man Whatever GIF by Dave Bell (1).gif"
];

export interface OriginalMehGifItem {
  id: string;
  name: string;
  url: string;
}

export const ORIGINAL_MEH_ITEMS: OriginalMehGifItem[] = [
  { id: "al-bundy", name: "Al Bundy Bored", url: "/gifs/Meh/Bored Married With Children GIF.gif" },
  { id: "disappointed-dog", name: "Disappointed Dog", url: "/gifs/Meh/Disappointed Dog GIF.gif" },
  { id: "disappointed-monkey", name: "Disappointed Monkey", url: "/gifs/Meh/Disappointed Monkey GIF by Justin.gif" },
  { id: "do-better", name: "Do Better", url: "/gifs/Meh/Do Better Level Up GIF by Digi 995.gif" },
  { id: "no-way", name: "No Way", url: "/gifs/Meh/Im Not No Way GIF.gif" },
  { id: "kermit-no", name: "Kermit Shaking Head", url: "/gifs/Meh/Kermit The Frog No GIF by Muppet Wiki (1).gif" },
  { id: "mark-wahlberg", name: "Mark Wahlberg Wow", url: "/gifs/Meh/Mark Wahlberg Wow GIF by Daddy's Home.gif" },
  { id: "meh-haha", name: "Meh Ha Ha", url: "/gifs/Meh/meh ha ha GIF by VICE En Español.gif" },
  { id: "nicksplat", name: "NickSplat", url: "/gifs/Meh/nicksplat GIF.gif" },
  { id: "no-way-cat", name: "No Way Cat", url: "/gifs/Meh/No Way Cat GIF.gif" },
  { id: "not-funny", name: "Not Funny No", url: "/gifs/Meh/Not Funny No GIF.gif" },
  { id: "deal-with-it", name: "Deal With It", url: "/gifs/Meh/Oh No Deal With It GIF by DreamWorks Animation.gif" },
  { id: "star-wars-sad", name: "Star Wars Sad", url: "/gifs/Meh/Sad Its Over GIF by Star Wars.gif" },
  { id: "sad-reels", name: "Sad Reels", url: "/gifs/Meh/Sad Reels GIF.gif" },
  { id: "friends-whatever", name: "Friends Whatever", url: "/gifs/Meh/Season 4 Whatever GIF by Friends.gif" },
  { id: "paramount-idk", name: "Paramount Idk", url: "/gifs/Meh/Season 5 Idk GIF by Paramount+.gif" },
  { id: "spiderman-whatever", name: "Spider-Man Whatever", url: "/gifs/Meh/Spider Man Whatever GIF by Dave Bell (1).gif" }
];

// Fisher-Yates shuffle generator
function createShuffledIndices(length: number): number[] {
  const indices = Array.from({ length }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}

// State tracker for randomized, non-repeating Good Job GIF queue
let goodJobQueue: number[] = [];
let lastPlayedGoodJobIndex: number | null = null;

// State tracker for randomized, non-repeating Almost GIF queue
let almostQueue: number[] = [];
let lastPlayedAlmostIndex: number | null = null;

// State tracker for randomized, non-repeating Meh GIF queue
let mehQueue: number[] = [];
let lastPlayedMehIndex: number | null = null;

export function getRandomGoodJobGif(): string {
  if (goodJobQueue.length === 0) {
    goodJobQueue = createShuffledIndices(GOOD_JOB_GIFS.length);
    if (goodJobQueue.length > 1 && goodJobQueue[0] === lastPlayedGoodJobIndex) {
      const temp = goodJobQueue[0];
      goodJobQueue[0] = goodJobQueue[1];
      goodJobQueue[1] = temp;
    }
  }

  const selectedIndex = goodJobQueue.shift()!;
  lastPlayedGoodJobIndex = selectedIndex;
  return encodeURI(GOOD_JOB_GIFS[selectedIndex]);
}

export function getRandomAlmostGif(): string {
  if (almostQueue.length === 0) {
    almostQueue = createShuffledIndices(ALMOST_GIFS.length);
    if (almostQueue.length > 1 && almostQueue[0] === lastPlayedAlmostIndex) {
      const temp = almostQueue[0];
      almostQueue[0] = almostQueue[1];
      almostQueue[1] = temp;
    }
  }

  const selectedIndex = almostQueue.shift()!;
  lastPlayedAlmostIndex = selectedIndex;
  return encodeURI(ALMOST_GIFS[selectedIndex]);
}

export function getRandomMehGif(): string {
  if (mehQueue.length === 0) {
    mehQueue = createShuffledIndices(MEH_GIFS.length);
    if (mehQueue.length > 1 && mehQueue[0] === lastPlayedMehIndex) {
      const temp = mehQueue[0];
      mehQueue[0] = mehQueue[1];
      mehQueue[1] = temp;
    }
  }

  const selectedIndex = mehQueue.shift()!;
  lastPlayedMehIndex = selectedIndex;
  return encodeURI(MEH_GIFS[selectedIndex]);
}

// Proactively preload GIFs into browser cache so popups render instantly
export function preloadNextGoodJobGifs(count: number = 3): void {
  if (typeof window === "undefined") return;
  const targetIndices = goodJobQueue.slice(0, count);
  targetIndices.forEach(idx => {
    const img = new Image();
    img.src = encodeURI(GOOD_JOB_GIFS[idx]);
  });
}

export function preloadNextAlmostGifs(count: number = 3): void {
  if (typeof window === "undefined") return;
  const targetIndices = almostQueue.slice(0, count);
  targetIndices.forEach(idx => {
    const img = new Image();
    img.src = encodeURI(ALMOST_GIFS[idx]);
  });
}

export function preloadNextMehGifs(count: number = 3): void {
  if (typeof window === "undefined") return;
  const targetIndices = mehQueue.slice(0, count);
  targetIndices.forEach(idx => {
    const img = new Image();
    img.src = encodeURI(MEH_GIFS[idx]);
  });
}

