import React from "react";
import "../../styles.css";
import "../../import.css";

const poems = [
	{
		title: "End of Summer",
		author: "Stanley Kunitz",
		text: (
			<React.Fragment>
				An agitation of the air, <br />A perturbation of the light <br />
				Admonished me the unloved year
				<br />
				Would turn on its hinge that night.
				<br />
				<br />
				I stood in the disenchanted field
				<br />
				Amid the stubble and the stones,
				<br />
				Amazed, while a small worm lisped to me
				<br />
				The song of my marrow-bones.
				<br />
				<br />
				Blue poured into summer blue,
				<br />
				A hawk broke from his cloudless tower,
				<br />
				The roof of the silo blazed, and I knew
				<br />
				That part of my life was over.
			</React.Fragment>
		),
	},
	{
		title: "Sonnet 73: That time of year thou mayst in me behold",
		author: "William Shakespeare",
		text: (
			<React.Fragment>
				That time of year thou mayst in me behold
				<br />
				When yellow leaves, or none, or few, do hang
				<br />
				Upon those boughs which shake against the cold,
				<br />
				Bare ruin'd choirs, where late the sweet birds sang.
				<br />
				<br />
				In me thou see'st the twilight of such day
				<br />
				As after sunset fadeth in the west,
				<br />
				Which by and by black night doth take away,
				<br />
				Death's second self, that seals up all in rest.
				<br />
				<br />
				In me thou see'st the glowing of such fire
				<br />
				That on the ashes of his youth doth lie,
				<br />
				As the death-bed whereon it must expire,
				<br />
				Consum'd with that which it was nourish'd by.
				<br />
				<br />
				This thou perceiv'st, which makes thy love more strong,
				<br />
				To love that well which thou must leave ere long.
			</React.Fragment>
		),
	},
	{
		title: "A Reminiscence",
		author: "Richard O. Moore",
		text: (
			<React.Fragment>
				Held in a late season
				<br />
				At a shifting of worlds,
				<br />
				In the golden balance of autumn,
				<br />
				Out of love and reason
				<br />
				<br />
				We made our peace;
				<br />
				Stood still in October
				<br />
				In the failing light and sought,
				<br />
				Each in the other, ease
				<br />
				<br />
				And release from silence,
				<br />
				From the slow damnation
				<br />
				Of speech that is weak
				<br />
				And falls from silence.
			</React.Fragment>
		),
	},
];

function PoemsHeader() {
	return (
		<div className="text-center text-5xl font-bold py-7">
			<h1>Autumn poems</h1>
		</div>
	);
}

function PoemImage(props) {
	return (
		<div>
			<img
				src={`poem${props.number}.png`}
				className="rounded-full mx-auto"
				alt="poemAuthor"
			/>
		</div>
	);
}
function PoemDescription(props) {
	return (
		<React.Fragment>
			<div className="text-center">
				<h3 className="text-2xl font-bold">{poems[props.number].author}</h3>
				<h4 className="text-lg font-bold">{poems[props.number].title}</h4>
				<p className="italic">{poems[props.number].text}</p>
			</div>
		</React.Fragment>
	);
}

function SinglePoem(props) {
	return (
		<div className="w-full md:w-1/2  lg:w-1/3 border-orange-600 border-solid border-4 rounded-lg mx-2">
			<PoemImage number={props.number} />
			<PoemDescription number={props.number} />
		</div>
	);
}

export function Poems() {
	return (
		<React.Fragment>
			<div className="bg-amber-400 rounded-lg shadow-amber-600 shadow-lg py-6">
				<PoemsHeader />
				<div>
					<div className="flex-block md:flex md:justify-center lg:flex justify-center lg:justify-between">
						<SinglePoem number={0} />
						<SinglePoem number={1} />
						<SinglePoem number={2} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
