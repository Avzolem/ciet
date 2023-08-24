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
const products = [
	{
		id: 1,
		name: "Campus Seguro",
		href: "https://campusseguro.uach.mx",
		imageSrc: "/images/products/campus-seguro-imagen.png",
		logoSrc: "/images/products/campus-seguro-logo-blanco.png",
		imageAlt: "Logo Campus Seguro App.",
	},
	{
		id: 2,
		name: "Alerta Prensa",
		href: "https://periodistas.uach.mx",
		imageSrc: "/images/products/alerta-prensa-imagen.png",
		logoSrc: "/images/products/alerta-prensa-logo.png",
		imageAlt: "Campus Seguro.",
	},
	{
		id: 3,
		name: "Consejo Universitario",
		href: "https://campusseguro.uach.mx",
		imageSrc: "/images/products/consejo-universitario3.png",
		logoSrc: "/images/products/consejo-universitario-logo-.png",
		imageAlt: "Campus Seguro.",
	},
	{
		id: 4,
		name: "Gestor de Oficios",
		href: "https://campusseguro.uach.mx",
		imageSrc: "/images/products/gestor-de-oficios-digitales.png",
		logoSrc: "/images/products/gestor-oficios-bold.png",
		imageAlt: "Campus Seguro.",
	},

	// More products...
];

export default function Example() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-black text-5xl pb-10 text-center font-semibold">
					Productos
				</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<a key={product.id} href={product.href} className="group">
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 relative">
								<img
									src={product.imageSrc}
									alt={product.imageAlt}
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
								<img
									src={product.logoSrc}
									alt={product.imageAlt}
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
