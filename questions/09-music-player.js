// Secret playlist https://gist.github.com/jasonly/4a720690fdd07f2c1854adf0c2644613
// https://stackoverflow.com/questions/21463752/javascript-audio-object-vs-html5-audio-tag
// So I found a sweet JSON playlist of song previews on gist, it has a bunch of stuff in it. Let's try to make a music player!

class MusicPlayer {
  constructor() {}

  // Using the HTMLAudioElement api add these methods

  // play
  play() {}

  // pause
  pause() {}

  // Fetch songs from the provided gist url, if you're having trouble fetching the songs feel free to just scrape the data and hard code it into the project
  // this could be helpful https://developer.github.com/v3/gists/#get-a-single-gist
  fetchSongs() {}

  // This should make the dom elements for the music player, you can go as far as you want with this but the only requirements are to show the album art with a play and pause button
  // Feel free to organize the code however you would like to
  createMusicPlayer() {}
}

module.exports = MusicPlayer;
