import Hero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services";

export default function Home() {
	return (
		<div className="bg-white">
			<Hero />
			<Products />
			<Services />
		</div>
	);
}
