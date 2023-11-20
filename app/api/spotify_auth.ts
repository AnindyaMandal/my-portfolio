function generateRandomString(len: number) {
	let text = "";
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charLength = characters.length;
	let counter = 0;
	while (counter < len) {
		text += characters.charAt(Math.floor(Math.random() * charLength));
		counter += 1;
	}
	return text;
}

export default async function spotifyAuth() {
	console.log("EXPORTING!");
	console.log(process.env.SPOTIFY_CLIENT_ID);
	console.log(process.env.SPOTIFY_CLIENT_SECRET);
	console.log(process.env.SPOTIFY_REDIRECT_URI);

	let client_id = process.env.SPOTIFY_CLIENT_ID;
	let client_secret = process.env.SPOTIFY_CLIENT_ID;
	let redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

	var state = generateRandomString(16);
	const scope = "playlist-modify-private user-library-read";

	const url = new URL("https://accounts.spotify.com/authorize?");
	url.searchParams.set("response_type", "code");
	url.searchParams.set("client_id", client_id);
	url.searchParams.set("scope", scope);

	console.log(
		url.toString() + `&redirect_uri=http://localhost:3000/&state=${state}`
	);

	const res = await fetch(
		url.toString() + `&redirect_uri=http://localhost:3000/&state=${state}`
	);
	if (!res.ok) {
		throw new Error("Failed to fetch data!");
	}
	console.log(res.json());
	return res.json();
}
