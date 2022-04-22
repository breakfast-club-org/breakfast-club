import React from "react";

export default function AlbumArtwork({ src }) {

	return (
		<div className="album-artwork-wrapper">
			<img src={src} className="album-artwork" />
		</div>
	)
}