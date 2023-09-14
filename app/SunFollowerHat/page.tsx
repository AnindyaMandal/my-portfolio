import React from "react";

const SunFollowerHat = () => {
	return (
		<div>
			<h2>CPSC 599 Integration</h2>

			<br></br>

			<div className="margin: 20px;">
				<h2>SUN-FOLLOWER HAT</h2>
				<br></br>
				<p>
					The first thing Spring reminds me of are flowers. Therefore
					I decided to incorporate flowers in my design. And since
					most flowers need light, having that as a form of physical
					input just seemed natural. My initial idea was to use a
					servo motor to somehow “open” and “close” or “unfurl” and
					“refurl” a flower origami to better illustrate blooming and
					spring. But that idea proved too complicated and most of the
					origami tutorials I found online turned out too hard to work
					with.{" "}
				</p>
				<br></br>
				<p>
					That is why I chose to create a simple hat with a sunflower
					that always tries to face the sun or the brightest light
					source available to it. The sunflower is also Ukraine’s
					national flower and due to current world events it
					unfortunately does not convey happiness. Besides that, the
					sunflower was the perfect flower choice because it turns to
					face the sun in nature.
				</p>
				<br></br>

				<p>
					I used 4 photosensitive resistors to determine the direction
					of the brightest light source. Despite only using 4 PSRs,
					the sunflower is capable of pointing in 16 directions!{" "}
				</p>

				<br></br>
				<h2>Project Build Pictures and Guide</h2>
				<br></br>
				<p>Electrical components needed:</p>
				<ul className="list-style: square;">
					<li>1 5V Stepper Motor</li>
					<li>4 Photosensitive Resistors (PSR)</li>
					<li>4 10k Ω resistors</li>
					<li>1 2k Ω resistor</li>
					<li>1 push button</li>
					<li>ULN2003 Stepper motor driver</li>
				</ul>
				<br></br>
				<p>
					I started by making my stepper motor work and learning to
					control it using the uln2003 stepper motor driver. Then I
					quickly ran a mock test with some photoresistors as a proof
					of concept, and went straight to the building. The hat I
					chose was woven out of thinger string which made it harder
					to pierce through with the photoresistor leads. I very
					carefully used needles to guide the leads in. This process
					was much harder than initially expected.
				</p>
				<p>
					After some testing on the now attached PSRs, it was time to
					attach the motor to the hat. My stepper motor conveniently
					came with holes for screws. I used them to sew the motor to
					the top of the hat with a small hole for the motor shaft to
					poke through. This was one of the most challenging parts of
					the build process since I had no sewing experience prior to
					this.
				</p>
				<br></br>
			</div>

			<div className="ml-3 flex gap-1 mb-1">
				<img src="/images/a3/1.jpg" className="w-1/3" />
				<img src="/images/a3/2.jpg" className="w-1/3" />
				<img src="/images/a3/3.jpg" className="w-1/3" />
			</div>
			<div className="ml-3 flex gap-1 mb-1">
				<img src="/images/a3/4.jpg" className="w-1/3" />
				<img src="/images/a3/5.jpg" className="w-1/3" />
				<img src="/images/a3/6.jpg" className="w-1/3" />
			</div>
			<div className="ml-3 flex gap-1 mb-1">
				<img src="/images/a3/7.jpg" className="w-1/3" />
				<img src="/images/a3/8.jpg" className="w-1/3" />
				<img src="/images/a3/9.jpg" className="w-1/3" />
			</div>
			<div className="ml-3 flex gap-1 mb-1">
				<img src="/images/a3/10.jpg" className="w-1/3" />
				<img src="/images/a3/11.jpg" className="w-1/3" />
				<img src="/images/a3/12.jpg" className="w-1/3" />
			</div>
			<div className="ml-3 flex gap-1 mb-1">
				<img src="/images/a3/13.jpg" className="w-1/3" />
				<img src="/images/a3/14.jpg" className="w-1/3" />
				<img src="/images/a3/15.jpg" className="w-1/3" />
			</div>
			<br></br>
			<br></br>
			<div className="margin-left: 20px;">
				<h2>Circuit Schematic</h2>
				<img src="/images/a3/a3_circuit_schem.png" className="w-full" />
				<br></br>
				<h2>Video Demo</h2>
				<br></br>
				<h2 className="text-blue-800 underline">
					<a href="https://www.youtube.com/watch?v=HeW5_CPCoFY">
						Project Demo Video
					</a>
				</h2>
				<br></br>
			</div>
			<br></br>

			<div className="margin-left: 20px;">
				<h2>Limitations & Issues</h2>
				<br></br>
				<p>
					The biggest limitation of the system is how much room the
					electronics take up inside the hat. I wanted to hide as much
					wiring as possible so I decided to put everything in the
					head area of the hat which leaves little room for the
					wearer’s head. This makes the hat unstable on the wearer’s
					head which could be easily solved by adding a chin strap to
					the hat.
				</p>
				<br></br>
				<p>
					Another significant issue is caused by the unevenness of the
					hat and it can sometimes give bad results if the light
					reaches multiple PSRs and/or they all return analog data
					with minimal variation. The system does not work if the
					sun/light source is directly overhead.{" "}
				</p>
				<br></br>
				<p>
					A slight issue with my design was a result of me using zero
					glue and solely relying on tape and string to hold things in
					place. I frequently had PSR leads be disconnected from the
					breadboard F to M jumper cables.
				</p>
				<br></br>

				<h2>References</h2>
				<p>
					28BYJ-48 Stepper Motor - Mouser.com. (n.d.). Retrieved April
					6, 2022, from
					https://www.mouser.com/datasheet/2/758/stepd-01-data-sheet-1143075.pdf{" "}
				</p>

				<p>
					Nutty Crafter. (n.d.). Hand-sewing | basic stitches and
					techniques - youtube. Retrieved April 6, 2022, from
					https://www.youtube.com/watch?v=1FknfumFPX8{" "}
				</p>

				<p>
					Stepper driver - University of Nebraska–Lincoln. (n.d.).
					Retrieved April 6, 2022, from
					http://eeshop.unl.edu/pdf/Stepper+Driver.pdf{" "}
				</p>

				<p>
					McWhorter, P. (n.d.). Arduino tutorial 35: Understanding how
					to use a ... - youtube. Retrieved April 6, 2022, from
					https://www.youtube.com/watch?v=CEz1EeDlpbs
				</p>
			</div>
		</div>
	);
};

export default SunFollowerHat;
