import React from "react";
import Link from "next/link";

const spotifyYouTubePlistTransfer = () => {
	return (
		<div>
			<div className="flex justify-around">
				<img
					src="/images/spotify2youTube/logo_green.png"
					className="bg-black w-1/2 ml-0"
				/>
				<img
					src="/images/spotify2youTube/yt_logo_dark.png"
					className="bg-black w-1/2 ml-0"
				/>
			</div>
			<div className="flex justify-around mt-10">
				<Link href="/SpotifyAuth">
					<button className="button_green flex">
						AUTHENTICATE Spotify
					</button>
				</Link>

				<button className="button_red">AUTHENTICATE YouTube</button>
			</div>

			<div className=" ml-6 mt-80">
				<h1>
					Hello! Welcome to the Spotify-YouTube Playlist Transfer tool
					{process.env.SPOTIFY_CLIENT_ID}
				</h1>
				<ol>
					<h2>1. Start by Authenticating with Spotify</h2>
					<h2>
						2. Select which playlist you would like to transfer to
						YouTube
					</h2>
					<h2>3. Authenticate with YouTube</h2>
					<h2>4. Start the transfer process</h2>
					<h2>
						5. Check if the correct songs are transferred since not
						all Spotify music may be available on YouTtube
					</h2>
				</ol>
			</div>
		</div>
	);
};

export default spotifyYouTubePlistTransfer;
