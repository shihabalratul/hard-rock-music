const search = () => {
	const searchInput = document.getElementById("search-input").value;
	const url = `https://api.lyrics.ovh/suggest/: + ${searchInput}`;
	fetch(url)
		.then(res => res.json())
		.then(data => {
			displaySongs(data.data);
		})
}
const displaySongs = songs => {
	console.log(songs);
	const contentBody = document.getElementById("contents");

	songs.forEach(song => {
		const songDiv = document.createElement("songDiv");
		songDiv.className = "single-result row align-items-center my-3 p-3";
		songDiv.innerHTML = `
			<div class="col-md-9">
				<h3 class="lyrics-name">${song.title}</h3>
				<p class="author lead">Album by <span>${song.artist.name}</span></p>
				<audio controls>
  					<source src='${song.preview}' type="audio/mp3">
				</audio>
			</div>
			<div class="col-md-3 text-md-right text-center">
				<button class="btn btn-success">Get Lyrics</button>
			</div>
		`;
		contentBody.appendChild(songDiv);

	});

}


