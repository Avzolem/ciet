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
const initiatives = [
	{
		id: 1,
		name: "Hybrida",
		href: "https://hybrida.uach.mx",
		imageSrc: "/images/initiatives/imagen-hybrida.png",
		logoSrc: "/images/initiatives/logo-hybrida.png",
		imageAlt: "Logo Campus Seguro App.",
	},
	{
		id: 2,
		name: "SuperHappyDevHouse U",
		href: "https://lu.ma/shdhmx",
		imageSrc: "/images/initiatives/shdh-imagen-.png",
		logoSrc: "/images/initiatives/shdh-u-blanco-siglas.png",
		imageAlt: "SuperHappyDevHouse U",
	},
	{
		id: 3,
		name: "Train the teachers",
		href: "https://teachers-xi.vercel.app/",
		imageSrc: "/images/initiatives/imagen-train.png",
		logoSrc: "/images/initiatives/logo-train.png",
		imageAlt:
			"Person using a pen to cross a task off a productivity paper card.",
	},
	{
		id: 4,
		name: "iCrea",
		href: "https://icm.gob.mx",
		imageSrc: "/images/initiatives/i-crea.png",
		logoSrc: "/images/initiatives/icrea-logo-blanco.png",
		imageAlt: "Hybrida.",
	},

	// More initiatives...
];

export default function Example() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-black text-5xl pb-10 text-center font-semibold">
					Iniciativas
				</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{initiatives.map((initiative) => (
						<a key={initiative.id} href={initiative.href} className="group">
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 relative">
								<img
									src={initiative.imageSrc}
									alt={initiative.imageAlt}
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
								<img
									src={initiative.logoSrc}
									alt={initiative.imageAlt}
									className="absolute w-44 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-lg font-semibold text-gray-700"></h3>
							<p className="mt-1 text-lg font-medium text-gray-900"></p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
