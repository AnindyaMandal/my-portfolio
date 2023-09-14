import "../styles/globals.css";
const page = () => {
	return (
		<section>
			<div className="m-10">
				<embed
					src="/images/my_resume.pdf"
					type="application/pdf"
					className="pdf_view"
				></embed>
			</div>
		</section>
	);
};

export default page;
