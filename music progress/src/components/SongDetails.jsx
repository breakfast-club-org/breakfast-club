import React from "react";

export default function SongDetails ({ details }) {

	return (
		<div className="song-details">
			<h3 className="title">{details.title}</h3>
			<p className="artist">{details.artists}</p>
		</div>
	)
}