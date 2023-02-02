const lyrics = "Tumi bondhu Kala pakhi, Ami jeno ki.Bosonto kale tumay bolte pari ni.sada sada kala kala";
const searchString =lyrics.indexOf("kailla");
// console.log(searchString);
if(lyrics.indexOf('Bosonto') !== -1){
    console.log('exists inside the string');
}
else{
    console.log('does not exists');
}