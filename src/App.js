import "./styles.css";
import "./import.css";
import { Music } from "./Components/Music/Music";
import { Poems } from "./Components/Poem/Poem";
import { Background } from "./Components/Background/Background";
import { Head } from "./Components/Head/Head";
import { Video } from "./Components/Video/Video";


export function App() {
	return (
		<div className="mx-[8%] mb-[8%] bg-transparent ">
			<Background/>
			<Head/>
			<Music />
			<Video/>
			<Poems />
		</div>
	);
}
