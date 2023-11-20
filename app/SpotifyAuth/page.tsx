import React from "react";
import { createHash } from "crypto";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

const generateRandomString = (length: number) => {
	const possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const values = crypto.getRandomValues(new Uint8Array(length));
	return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

// const sha256 = async (plain: string) => {
// 	const encoder = new TextEncoder();
// 	const data = encoder.encode(plain);
// 	return window.crypto.subtle.digest("SHA-256", data);
// };

const sha256 = async (content: string) => {
	return createHash("sha256").update(content).digest("base64");
};

const base64encode = (input: any) => {
	return btoa(String.fromCharCode(...new Uint8Array(input)))
		.replace(/=/g, "")
		.replace(/\+/g, "-")
		.replace(/\//g, "_");
};

const codeVerifier = generateRandomString(64);
const codeChallenge = await sha256(codeVerifier);

const spotifyAuth = () => {
	return (
		<div>
			<h1>Client ID: {client_id}</h1>
			<h1>Redirect URI: {redirect_uri}</h1>
			<h1>Verifier: {codeVerifier}</h1>
			<h1>Code challenge: {codeChallenge}</h1>
		</div>
	);
};

export default spotifyAuth;
