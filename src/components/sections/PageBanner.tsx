const PageBanner = (props) => {
	return (
		<section className="page-banner">
			<img src={props.imgSrc} alt={props.title} />
			<div className="banner-title">
				<h1>{props.title.toUpperCase()}</h1>
			</div>
		</section>
	);
};

export default PageBanner;
