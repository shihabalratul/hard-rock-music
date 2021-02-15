const search = async () => {
	const searchInput = document.getElementById("search-input").value;
	const url = `https://api.lyrics.ovh/suggest/: + ${searchInput}`;
	const res = await fetch(url);
	const data = await res.json();
	displaySongs(data.data);
}
const displaySongs = songs => {
	console.log(songs);
	const contentBody = document.getElementById("contents");
	contentBody.innerHTML = "";
	document.getElementById("lyrics").innerHTML = '';
	songs.forEach(song => {
		const songDiv = document.createElement("songDiv");
		songDiv.classList = "single-result row align-items-center my-3 p-3";
		songDiv.innerHTML = `
			<div class="col-md-9">
				<h3 class="lyrics-name">${song.title}</h3>
				<p class="author lead">Album by <span>${song.artist.name}</span></p>
				<audio controls>
  					<source src='${song.preview}' type="audio/mp3">
				</audio>
			</div>
			<div class="col-md-3 text-md-right text-center">
				<button onclick="displayLyrics('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
			</div>
		`;
		contentBody.appendChild(songDiv);

	});

}

const displayLyrics = async(artist, title) => {
	document.getElementById("contents").innerHTML = '';
	const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
	console.log(url)
	const res = await fetch(url);
	const data = await res.json();
	const lyricsDiv = document.getElementById("lyrics");
	lyricsDiv.innerHTML = `
		<p>${data.lyrics}</p>
		
	`
}
