import React from "react";

const HydroHomie = () => {
	return (
		<div>
			<h2>CPSC 599 Physical Output</h2>

			<br></br>

			<div>
				<h2>HYDRO HOMIE</h2>
				<br></br>
				<p>
					The data I chose to focus on was the amount of water I drink
					throughout the day. I have been struggling with drinking
					enough water for a long time so I created the Hydro homie to
					remind me to drink more water throughout the day.
				</p>
				<br></br>
				<p>
					It is quite a simple system at first glance. It uses a L293D
					motor controller to control the direction and speeds of 2 DC
					motors. One of the motors is hidden from view and it has a
					large spool of thread attached to it. When the user presses
					the button, it signals the hydro homie to transfer some
					string to the visible motor. The amount of string signifies
					how hydrated the user is. Pressing the button adds 750mL to
					the user’s water intake for the day. (750mL because my daily
					use water bottle is 750mL)
				</p>
				<br></br>

				<p>
					Furthermore, to demonstrate water loss and to serve as
					additional motivation the hydro homie reduces the user’s
					water level by 20mL every 20 minutes after the user’s last
					drink of water. (I changed the 20min window to 30sec for the
					demo to keep it short)
				</p>

				<br></br>
				<h2>Project Build and Guide</h2>
			</div>

			<div className="flex">
				<img src="/images/a2/0.jpg" className="w-1/3" />
				<img src="/images/a2/2.jpg" className="w-1/3" />
				<img src="/images/a2/1.jpg" className="w-1/3" />
			</div>
			<div className="flex">
				<img src="/images/a2/3.jpg" className="w-1/3" />
				<img src="/images/a2/4.jpg" className="w-1/3" />
				<img src="/images/a2/5.jpg" className="w-1/3" />
			</div>
			<div className="flex">
				<img src="/images/a2/6.jpg" className="w-1/3" />
				<img src="/images/a2/7.jpg" className="w-1/3" />
				<img src="/images/a2/8.jpg" className="w-1/3" />
			</div>
			<div className="flex">
				<img src="/images/a2/14.jpg" className="w-1/3" />
				<img src="/images/a2/15.jpg" className="w-1/3" />
				<img src="/images/a2/16.jpg" className="w-1/3" />
			</div>
			<div className="flex">
				<img src="/images/a2/20.jpg" className="w-1/3" />
				<img src="/images/a2/21.jpg" className="w-1/3" />
			</div>
			<br></br>
			<div>
				<h2>Circuit Schematic</h2>
				<img src="/images/a2/a2fzz_schem.png" className="w-full" />
				<br></br>
				<h2>Video Demo</h2>
				<p>
					You can watch the demo video{" "}
					<a href="https://www.youtube.com/watch?v=v7SpnMYjVSA">
						here
					</a>
					.
				</p>
				<br></br>
			</div>
			<br></br>

			<div>
				<h2>Limitations & Issues</h2>
				<br></br>
				<p>
					The biggest problem/challenge while making the system was
					trying to get the string to behave properly. Oftentimes it
					would get tangled with the motor shaft. But the biggest
					issue was the string turning with the momentum of the motor
					and suddenly starting spooling when it is in fact supposed
					to be unspooling causing a deadlock. I tried changing up the
					spools for both motors, adjusting the height of the spools
					and extensively tinkering with the speeds. I also tried
					using nylon instead of cotton, which proved to be much
					worse.
				</p>
				<br></br>
				<p>
					Finally the solution that seemed to work best was having the
					motors spin the wrong direction every 5 rotations. Thus it
					could oftentimes self correct by dislodging the string.
				</p>
				<br></br>
				<h2>References</h2>
				<br></br>
				<p>
					L293D motor driver IC. Components101. (n.d.). Retrieved
					March 17, 2022, from
					https://components101.com/ics/l293d-pinout-features-datasheet
				</p>
				<br></br>
				<p>
					mcwhorter, paul. (2019, November 19). Arduino tutorial 37:
					Understanding how to control DC Motors in projects. YouTube.
					Retrieved March 10, 2022, from
					https://www.youtube.com/watch?v=fPLEncYrl4Q
				</p>
				<br></br>
				<p>
					Monk, S. (n.d.). Arduino lesson 13. DC Motors. Adafruit
					Learning System. Retrieved March 11, 2022, from
					https://learn.adafruit.com/adafruit-arduino-lesson-13-dc-motors
				</p>
				<br></br>
				<p>
					P2N2222A amplifier transistors - on semiconductor. (n.d.).
					Retrieved March 10, 2022, from
					https://www.onsemi.com/pdf/datasheet/p2n2222a-d.pdf
				</p>
			</div>
		</div>
	);
};

export default HydroHomie;
