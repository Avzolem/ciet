import Hero from "../components/Hero";
import Products from "../components/Products";
import Initiatives from "../components/Initiatives";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div className="bg-white">
			<Hero />
			<Products />
			<Initiatives />
			<Services />
			<Footer />
		</div>
	);
}
