import React from "react";

const PhoneUnlocker = () => {
	return (
		<div>
			<h2 className="m-3">CPSC 581 Project 2</h2>

			<br />

			<div className="m-5">
				<h1>TOUCH & SENSOR BASED PHONE UNLOCKERS</h1>
				<h5>
					Authors: Debprasad Mandal, Navjot Saran, Harprabh Gill, and
					Fysal Beauferris
				</h5>
				<br />
				<br />
				<br />
				<h2>Project Description</h2>
				<p>
					Our project his time was to design two phone unlock
					interfaces, one touch/gesture based, and the other using any
					of the other sensors that are available on a smartphone
				</p>
				<br></br>
				<br></br>

				<h2>Origami Unlock</h2>
				<p>
					Our first design approach was touch-based. The idea was to
					allow users to open their phones with a sequence of origami
					folds as passwords. Dotted lines represent folding locations
					on the paper. They divide the paper into separate buttons.
					Hitting the wrong button or a button in the wrong sequence
					starts the unlock process over. Every correct selection
					leads to an animation that shows the paper folded over where
					the dotted line was.The password entry completes after the
					last fold, showing the completed origami figure for a
					moment. Then the phone unlocks.
				</p>
				<br></br>

				<h2>Alphabody Unlock (Pose based Screen-unlock)</h2>
				<p>
					This design approach was camera based. The idea was to use
					the teachable machine shown in lecture to train a model
					using our whole bodies as letters. Swiping up begins the
					unlock session. A letter is determined by the orientation of
					the user’s whole body. A letter is entered into the password
					bar every time the timer reaches 0. Users are initially
					given 20 seconds to get ready in front of the camera. Each
					countdown after that gives the user 10 seconds to hold their
					pose for their intended letter. A delete button allows the
					user to delete the last letter entry. Correct password
					entries unlock the phone, while incorrect entries result in
					an error message and restart the session.
				</p>
				<br />
				<h2>How we came up with it and why we chose it</h2>
				<p>
					We started with each of us coming up with 10 initial
					sketches for our ideas. We discussed them with one another
					and the origami idea was an easy favorite. Most people
					aren’t familiar enough with origami to guess a password
					based on the correct fold sequence. So we figured it’s
					actually a pretty good idea for a phone unlock interface.
					Someone trying to break into the user’s phone wouldn’t even
					know the shape they’re going for. It would be fully secure
					with limited attempts and customizable origami shapes but we
					kept it simple to keep the focus on showing the design and
					idea.
				</p>
				<p>
					After seeing many teachable machine examples we decided to
					design something using a camera as the sensor. We came up
					with several ideas like yoga pose sequences or dance, but
					the body poses as letters idea won over. We chose it because
					it’s easier to track the sequence of poses entered if that
					data is represented by letters instead of yoga pose names or
					dance move names. With our design, users can delete past
					letter entries if they were unintentionally registered. A
					phone can be secure if a user wants or needs it, as long as
					they hide before entering their password and make a good
					one.
				</p>
				<br />
				<h2>Initial sketches Before The Origami Design</h2>
				<p>
					While deciding on how we should design our touch-based
					unlock system. We had initially come up with 10 designs,
					those being a higher or lower game, a drawing unlock, an
					invisible section unlock, connect the dots, shape memory,
					origami, prompt answering, carry case style unlock, “Where’s
					Waldo?” style unlock, and a water level unlock. Out of all
					these ideas we eventually picked the origami unlock as it
					has a unique design which is visually appealing, while also
					having really good security as the user must know the
					pattern to unlock it.
				</p>
				<br />
				<h2>Initial touch-based sketches:</h2>
			</div>

			<div className="m-3; flex">
				<img src="/images/cpsc581_p2/t1.jpg" className="w-1/3" />
				<img src="/images/cpsc581_p2/t2.jpg" className="w-1/3" />
				<img src="/images/cpsc581_p2/t3.jpg" className="w-1/3" />
			</div>
			<br />
			<div className="m-3; flex">
				<img src="/images/cpsc581_p2/t4.jpg" className="w-1/3" />
				<img src="/images/cpsc581_p2/t567.jpg" className="w-1/3" />
				<img src="/images/cpsc581_p2/t890.jpg" className="w-1/3" />
			</div>
			<br />
			<br />
			<div className="ml-5">
				<h2>Detailed Sketches For The Origami Design</h2>
				<img src="/images/cpsc581_p2/oragami1.png" className="w-1/3" />
				<p className="mt-3">
					To avoid accidental unlocks we decided to add a feature that
					requires the user to swipe the screen upwards to begin
					unlocking the phone. This serves as the homescreen where the
					user can receive notifications and check the time as they
					normally can.
				</p>
				<br />
				<img src="/images/cpsc581_p2/oragami4.png" className="w-1/3" />
				<p className="mt-3">
					After unlocking, the user’s chosen password origami is
					displayed in its unfolded state. The fold lines for the
					first step are shown on the shape. Choose the right side to
					fold.
				</p>
				<br />
				<img src="/images/cpsc581_p2/oragami5.png" className="w-1/3" />
				<p className="mt-3">
					After choosing the correct side, the process moves to step 2
					of a given origami password. Choose the correct side to move
					onto step 3.
				</p>
				<br />
				<img src="/images/cpsc581_p2/oragami6.png" className="w-1/3" />
				<p className="mt-3">
					Choosing the correct side shows the resulting shape with the
					paper folder over the line. Choosing the wrong side to fold
					at any moment throughout the unlock process restarts the
					whole process.
				</p>
				<br />
				<img src="/images/cpsc581_p2/oragami7.png" className="w-1/3" />
				<p className="mt-3">
					Another correct selection! It is beginning to take a
					familiar shape.
				</p>
				<br />
				<img src="/images/cpsc581_p2/oragami8.png" className="w-1/3" />
				<p className="mt-3">
					Make another correct fold. Any incorrect selection results
					in the whole process restarting.
				</p>
				<br />
				<img src="/images/cpsc581_p2/oragami9.png" className="w-1/3" />
				<p className="mt-3">
					After the final correct fold has been completed, the origami
					shape displays its figure for a moment before the phone
					unlocks.
				</p>
				<br />
				<img
					src="/images/cpsc581_p2/oragami10.png"
					className="w-full"
				/>
				<p className="mt-3">
					We decided to add a face to our final origami design. This
					is a satisfying conclusion for the user after they have
					completed their password. The display pauses for a moment
					and then the phone unlocks.
				</p>
				<br />
				<img src="/images/cpsc581_p2/oragami2.png" className="w-full" />
				<p className="mt-3">
					We decided to add a scenic background to create an
					atmosphere for folding origami. Our idea for the design was
					to separate the unlock process into states. Each correct
					fold selection leads to the next state, while any incorrect
					selection returns the process to the first state.
				</p>
				<br />
				<img src="/images/cpsc581_p2/oragami3.png" className="w-full" />
				<p className="mt-3">
					This sketch shows the process returning the screen to the
					first state after an incorrect selection.
				</p>
			</div>
			<br />
			<br />
			<div className="ml-5">
				<h2>Project Demo</h2>
				<br />
				<br />
				<h3>
					<a
						href="https://www.youtube.com/watch?v=edaLTdUpwvk"
						className="link-primary"
					>
						Origami Unlocker Video Demo
					</a>
				</h3>
				<h3>
					<a
						href="https://github.com/HarprabhGill/Origami-Unlock"
						className="link-primary"
					>
						Origami Unlocker Github Project
					</a>
				</h3>
				<br />
			</div>
			<br />
			<div className="ml-5">
				<h2>Initial sketches Before The Alphabody Design</h2>
				<p>
					We also came up with 10 sketches each for our ideas before
					deciding to go with the Alphabody one. Some of our other
					ideas were yoga pose unlock, scan physical objects to unlock
					etc.
				</p>
			</div>
			<div className="m-3; flex">
				<img src="/images/cpsc581_p2/g1.jpg" className="w-1/3" />
				<img src="/images/cpsc581_p2/g2.jpg" className="w-1/3" />
				<img src="/images/cpsc581_p2/g3.jpg" className="w-1/3" />
			</div>
			<br />
			<div className="m-3; flex">
				<img src="/images/cpsc581_p2/g456.jpg" className="w-1/2" />
				<img src="/images/cpsc581_p2/g789.jpg" className="w-1/2" />
			</div>
			<br />

			<div className="ml-5">
				<h2>Detailed Sketches For The Alphabody Design</h2>
				<img src="/images/cpsc581_p2/pose1.png" className="w-1/3" />
				<p className="mt-3">
					We came up with many pose type unlock methods and chose
					posing letters because it made classification easy. By
					swiping the screen upward, the unlock process begins. This
					avoids accidental unlocks. It serves as the homescreen where
					the user can receive notifications and check the time as
					they normally can.
				</p>
				<br />
				<img src="/images/cpsc581_p2/pose2.png" className="w-1/3" />
				<p className="mt-3">
					We decided we needed a button to record between each pose
					scan. We decided on a timer that counts down in a loop
					instead, for user convenience.
				</p>
				<br />
				<img src="/images/cpsc581_p2/pose3.png" className="w-1/3" />
				<p className="mt-3">
					With a timer, the user could stay in one spot and enter the
					whole password. Instead of going back and forth between each
					letter to press a button.
				</p>
				<br />
				<img src="/images/cpsc581_p2/pose4.png" className="w-1/3" />
				<p className="mt-3">
					The user has an x amount of seconds to pose the correct
					letter. When the timer hits 0, the current pose made by the
					user is registered.
				</p>
				<br />
				<img src="/images/cpsc581_p2/pose5.png" className="w-1/3" />
				<p className="mt-3">
					Incorrect password entry with a try again button. We decided
					to go with an automatic reset after the password bar turns
					red instead, because a try again button makes it more like a
					game. The automatic reset is more alike password entry so it
					is good for a phone unlock design that uses letters.
				</p>
				<br />
				<img src="/images/cpsc581_p2/pose6.png" className="w-1/3" />
				<p className="mt-3">
					We also decided not to go with an input method that gives
					feedback on every entry. This is less secure than what we
					changed it to - users inputting the whole password before
					hitting enter for the password.
				</p>
				<br />
				<img src="/images/cpsc581_p2/pose7.png" className="w-1/3" />
				<p className="mt-3">
					Each letter being added in after the timer reaches 0.
				</p>
				<br />
				<img src="/images/cpsc581_p2/pose8.png" className="w-3/4" />
				<p className="mt-3">
					We decided 10 seconds is a good enough time for users to
					pose for each letter scan. Not so long that password entry
					takes too long and not so so quick that users struggle to
					pose in time.
				</p>
				<br />
				<img src="/images/cpsc581_p2/pose9.png" className="w-3/4" />
				<p className="mt-3">
					Instead of this, we went with the full password entry, then
					hit enter design.
				</p>
				<br />
				<img src="/images/cpsc581_p2/pose10.png" className="w-3/4" />
				<p className="mt-3">
					This was the general idea; to pose the correct sequence of
					letters, then hit enter to unlock the phone. This is secure
					from being opened accidentally.
				</p>
			</div>

			<div className="ml-5">
				<h2>Project Demo</h2>

				<br />
				<br />
				<h3>
					<a
						href="https://www.youtube.com/watch?v=Cgz3YSwVtCY"
						className="link-primary"
					>
						Pose Unlocker Video Demo
					</a>
				</h3>
				<h3>
					<a
						href="https://github.com/FysalBeau/Pose-Unlock"
						className="link-primary"
					>
						Pose Unlocker Github Project
					</a>
				</h3>
				<br />
			</div>

			<div className="ml-5">
				<h2>Limitations & Issues</h2>
				<br />
				<h4>Origami Unlock</h4>
				<p>
					The unlock design is secure in the sense that most people
					don’t know origami. Most default origami figures this design
					could provide would follow known patterns, however. If a
					non-authorized user decided to spy on an unlock, they could
					figure out the pattern from seeing the end result origami
					figure alone. An idea around this is to offer custom designs
					and fold sequences. Another issue is that someone could just
					guess repeatedly until they memorize the correct pattern. A
					password attempt limit immediately solves this issue.
					Accidental unlocks are extremely improbable because there
					are so many specific areas of the screen that must be tapped
					to unlock. Incorrect selections restart the process.
				</p>
				<br />
				<h4>Alphabody Unlock</h4>
				<p>
					This design is secure as long as the user unlocks their
					phone in total privacy. That is a major limitation because
					the user has to display their whole body in their phones
					camera. This means they must be far enough away and have to
					make movements that attract attention. It is otherwise as
					secure as any simple text based password interface, because
					the data we trained the machine with translates to letters.
					Users must also sort of memorize specific body orientations
					for letters. They may not always be the most intuitive since
					we trained the machine with our own specific models instead
					of every user. A potential fix to that issue is to allow
					users to train their own models for every letter.
				</p>
				<br />
				<h2>Contribution</h2>
				<p>
					My main contribution was the recording and editing of our
					demo videos. I mainly worked on the pose unlocker as opposed
					to the origami unlocker. I also helped with keeping us on
					track and with the documentation.
				</p>

				<br />
			</div>
		</div>
	);
};

export default PhoneUnlocker;
