/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const services = [
	{
		id: 1,
		name: "Hybrida",
		href: "#",
		imageSrc: "/images/products/imagen-hybrida.png",
		logoSrc: "/images/products/logo-hybrida.png",
		imageAlt: "Logo Campus Seguro App.",
	},
	{
		id: 2,
		name: "Eduhackers",
		href: "#",
		imageSrc: "/images/products/imagen-eduhackers.png",
		logoSrc: "/images/products/logo-eduhackers.png",
		imageAlt:
			"Olive drab green insulated bottle with flared screw lid and flat top.",
	},
	{
		id: 3,
		name: "Train the teachers",
		href: "#",
		imageSrc: "/images/products/imagen-train.png",
		logoSrc: "/images/products/logo-train.png",
		imageAlt:
			"Person using a pen to cross a task off a productivity paper card.",
	},
	{
		id: 4,
		name: "Hybrida",
		href: "#",
		imageSrc: "/images/products/imagen-hybrida.png",
		logoSrc: "/images/products/logo-hybrida.png",
		imageAlt: "Hybrida.",
	},

	// More products...
];

export default function Example() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-black text-5xl pb-10 text-center font-semibold">
					Nuestros servicios
				</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{services.map((service) => (
						<a key={service.id} href={service.href} className="group">
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 relative">
								<img
									src={service.imageSrc}
									alt={service.imageAlt}
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
								<img
									src={service.logoSrc}
									alt={service.imageAlt}
									className="absolute w-44 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-lg font-semibold text-gray-700">
								{service.name}
							</h3>
							<p className="mt-1 text-lg font-medium text-gray-900"></p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
