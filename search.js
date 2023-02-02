const lyrics = "Tumi bondhu Kala pakhi, Ami jeno ki.Bosonto kale tumay bolte pari ni.sada sada kala kala";
const lyricsLowerCase =lyrics.toLowerCase();

const searchString = "Bosonto";
const searchStringLowerCase = searchString.toLowerCase();

const doesExit = lyricsLowerCase.includes(searchStringLowerCase);

console.log(doesExit);

// in OneLine-------------------

const doesExistOneLine =lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine);