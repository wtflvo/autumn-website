const videos = [
	<iframe
		width="70%"
		height="315"
		src="https://www.youtube.com/embed/rpWwqFugjmo"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>,
	<iframe
		width="70%"
		height="315"
		src="https://www.youtube.com/embed/bmGsQkLb4yg"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>,
];

function VideoHeader() {
	return (
		<div
			id="videoHeader"
			className=" text-5xl font-bold pb-7 text-center text-white"
		>
			<h1>Video Relax</h1>
		</div>
	);
}

function SingleVideo(props) {
	return (
		<div className="py-4 flex justify-center rounded-lg">
			{videos[props.number]}
		</div>
	);
}

export function Video() {
	return (
		<div className="mb-6 py-8 rounded-lg bg-transp-red">
			<VideoHeader />
			<div>
				<SingleVideo number={0} />
				<SingleVideo number={1} />
			</div>
		</div>
	);
}
