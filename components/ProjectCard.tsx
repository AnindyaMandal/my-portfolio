"use client";

import "../styles/globals.css";
import Link from "next/link";
import { ProjectInfo } from "@/utils/ProjectInfo";
import { useState } from "react";

const ProjectCard = (info: ProjectInfo) => {
	const [toggleExpandedCardView, setToggleExpandedCardView] = useState(false);

	// Function to change the project cards from card view to compact view
	const setToggleCSS = () => {
		if (toggleExpandedCardView) {
			return "black_btn_card transition_time";
		}

		return "black_btn_prj transition_time";
	};

	const waitBeforeCollapse = () => {
		setTimeout(() => {
			if (toggleExpandedCardView) {
				setToggleExpandedCardView(false);
			}
		}, 1500);
	};

	const waitBeforeExpand = () => {
		setTimeout(() => {
			if (!toggleExpandedCardView) {
				setToggleExpandedCardView(true);
			}
		}, 0);
	};

	return (
		<div
			className={setToggleCSS()}
			onMouseDown={() => waitBeforeExpand()}
			onMouseLeave={() => waitBeforeCollapse()}
		>
			<div>
				{!toggleExpandedCardView && <h3>{info.name}</h3>}
				{toggleExpandedCardView && (
					<>
						<div className="flex gap-x-10">
							<h1>{info.name}</h1>
							<Link href={"/" + info.route_name}>
								<button type="button" className="learn_btn">
									Learn More
								</button>
							</Link>
						</div>

						<br></br>
						<p>{info.description}</p>
					</>
				)}
			</div>

			{toggleExpandedCardView && (
				<div className="">
					<iframe
						className="transition_time_long"
						src={info.vid_url}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
