import React from "react";
import "../../styles.css";
import "../../import.css";
import "./music.css";

const tracks = [
	{
		track: (
			<iframe
				title="track0"
				src="https://open.spotify.com/embed/track/0vwMdWKwS4mjeKiYvEq5Vc?utm_source=generator&theme=0"
				width="95%"
				height="82"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		),
	},
	{
		track: (
			<iframe
				src="https://open.spotify.com/embed/track/4CkNkBBSR3cyEKTzdZ7TrL?utm_source=generator&theme=0"
				title="track1"
				width="95%"
				height="82"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		),
	},
	{
		track: (
			<iframe
				title="track2"
				src="https://open.spotify.com/embed/track/5bDHKNRIkW2sx8p3pLUhGp?utm_source=generator&theme=0"
				width="95%"
				height="82"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		),
	},
	{
		track: (
			<iframe
				title="track3"
				src="https://open.spotify.com/embed/track/0ISVTNluQbDYEHVUsstVcb?utm_source=generator&theme=0"
				width="95%"
				height="82"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		),
	},
	{
		track: (
			<iframe
				title="track4"
				src="https://open.spotify.com/embed/track/0AjcdGri5vhJsmZnduCEqd?utm_source=generator&theme=0"
				width="95%"
				height="82"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		),
	},
	{
		track: (
			<iframe
				title="track5"
				src="https://open.spotify.com/embed/track/2QjOHCTQ1Jl3zawyYOpxh6?utm_source=generator&theme=0"
				width="95%"
				height="82"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		),
	},
];

function MusicHeader() {
	return (
		<div
			id="musicHeader"
			className=" text-5xl font-bold pb-7 text-center text-white"
		>
			<h1 className="inline-block">
				<span>A</span>
				<span>u</span>
				<span>t</span>
				<span>u</span>
				<span>m</span>
				<span className="whitespace-pre">n </span>
				<span>m</span>
				<span>u</span>
				<span>s</span>
				<span>i</span>
				<span>c</span>
			</h1>
		</div>
	);
}

function SingleTrack(props) {
	return (
		<div className="py-2 flex justify-center">
			{tracks[props.number].track}
		</div>
	);
}

export function Music() {
	return (
		<div id="music-container" className="mb-6 py-8 rounded-lg">
			<MusicHeader />
			<div>
				<SingleTrack number={0} />
				<SingleTrack number={1} />
				<SingleTrack number={2} />
				<SingleTrack number={3} />
				<SingleTrack number={4} />
				<SingleTrack number={5} />
			</div>
		</div>
	);
}
