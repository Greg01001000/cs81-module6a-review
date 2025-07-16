// CS 81 Module 6 Assignment 6A: Code Review, by GregH, 7/15/25

// This constructor, when called, makes a new Playlist object, setting the
// instance's 'name' property to the value passed to the 'name' parameter. It
// also makes a new empty array named 'songs' as a property of the object
// (ready to hold a list of songs to play) and sets the object property
// 'currentSong' to null, meaning there is no song to play now. 'this' refers
// to the Playlist object being created this time by this constructor.
function Playlist(name) {
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}

// This snippet defines a method named addSong(). '.prototype' shares the 
// method with all Playlist objects. It appends the song passed to the
// 'songTitle' parameter to the 'songs' array property of the current instance.
// 'this' refers to the Playlist object whose binding name is attached to the
// current call of this method (potentially a different Playlist each time this
// method is called, or this method can be called repeatedly on the same 
// Playlist).
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);
};

// This snippet defines a method named playFirst(). '.prototype' shares the 
// method with all Playlist objects. It sets the 'currentSong' property of the
// current Playlist to the first song (index 0) of the Playlist's 'songs' array
// property, if 'songs' has at least one song in it, and displays the message,
// "Now playing:" and the new current song title. If 'songs' has no songs in
// it, the method does nothing. 'this' refers to the Playlist object whose
// binding name is attached to the current call of this method (potentially a
// different Playlist each time this method is called, or this method can be
// called repeatedly on the same Playlist).
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
  }
};

// This snippet defines a method named skipSong(). '.prototype' shares the 
// method with all Playlist objects. It removes the first song in the current 
// Playlist's 'songs' array property and sets the 'currentSong' property of the
// current Playlist to the new first song (index 0) of the Playlist's 'songs'
// array property, if 'songs' has at least two songs in it when the method 
// begins, and displays the message, "Skipped! Now playing:" and the new
// current song title. If 'songs' has no songs in it, or only one song (the
// current song), the method displays the message, "No more songs to skip.",
// without doing anything else. 'this' refers to the Playlist object whose
// binding name is attached to the current call of this method (potentially a
// different Playlist each time this method is called, or this method can be
// called repeatedly on the same Playlist).
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

// This snippet defines a method named listSongs(). '.prototype' shares the 
// method with all Playlist objects. It displays, "Playlist:" and the current 
// Playlist's 'name' property, and "Songs:" followed by the song titles in the
// current Playlist's 'songs' array property. 'this' refers to the Playlist
// object whose binding name is attached to the current call of this method
// (potentially a different Playlist each time this method is called, or this
// method can be called repeatedly on the same Playlist).
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};

// ADDED NEW METHOD: This method checks whether its parameter value, 
// 'songTitle', is included in the current Playlist's 'songs' array property,
// and if so, it uses 'splice' and 'push' to move the songs that are before
// 'songTitle' to the end of 'songs', making 'songTitle' the new first song
// (index 0), and sets the 'currentSong' property of the current Playlist to
// that song and displays "Now playing:", 'songTitle'. If 'songTitle' is not in
// 'songs', it displays 'songTitle', `is not in this playlist.`
Playlist.prototype.playChosen = function(songTitle) {
    if (this.songs.includes(songTitle)) { 
        i = this.songs.indexOf(songTitle);
        const move = this.songs.splice(0, i);
        this.songs.push(...move);
        this.currentSong = this.songs[0];
        console.log("Now playing:", songTitle)
    } else {
        console.log(songTitle, `is not in this playlist.`);
    }
}

// This line makes a new Playlist object bound to the variable name 'myMix' but
// sets the instance's 'name' property to "My Chill Mix".
let myMix = new Playlist("My Chill Mix");
// These three lines each add a song to the 'songs' array property of the
// Playlist object bound to the variable name 'myMix'.
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");

// This line rearranges the song order in the 'myMix' Playlist so that "Evening
// Jazz" is first and the other songs come after it.
myMix.playChosen("Evening Jazz");
// This line shows the new song order in the 'myMix' Playlist.
myMix.listSongs();

// This line begins playing the first song in the 'songs' array property of the
// Playlist object bound to the variable name 'myMix'.
myMix.playFirst();
// This line removes the first song in the 'songs' array property of the
// Playlist object bound to the variable name 'myMix' and sets the Playlist's
// 'currentSong' property to the new first song of the Playlist's 'songs' array
// property.
myMix.skipSong();
// This line displays the 'name' property and song titles in the 'songs' array
// property of the Playlist object bound to the variable name 'myMix'.
myMix.listSongs();

// IMPROVEMENT SUGGESTION: I would like to be able to skip back a song (replay
// the last song that was played). The 'skipSong' algorithm implies that 
// 'currentSong' is always the first song in 'songs'. The code doesn't show
// what happens when a song finishes playing--is that song removed from 'songs'
// like 'skipSong' does, or is it moved to the end (last position) of 'songs'?
// I would also like to keep playing a playlist repeatedly and save it for 
// future use without having to recreate the song list, which I'm not sure is
// possible with the current design.
