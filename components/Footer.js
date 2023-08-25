import React from "react";

const footerNavigation = {
	interest: [
		{ name: "Programas", href: "#" },
		{ name: "Revistas", href: "#" },
		{ name: "UACH", href: "#" },
		{ name: "Capacitación a maestros para servicio social UACH", href: "#" },
	],
	about: [
		{ name: "Trayectorias", href: "#" },
		{ name: "Preguntas Frecuentes", href: "#" },
		{ name: "Ubicación", href: "#" },
		{ name: "Organigrama", href: "#" },
	],
	courses: [
		{ name: "Diseño", href: "#" },
		{ name: "Programación", href: "#" },
		{ name: "Organización", href: "#" },
		{ name: "Emprendimiento", href: "#" },
	],
	docs: [
		{ name: "Programa", href: "#" },
		{ name: "Privacidad", href: "#" },
		{ name: "Terminos y condiciones", href: "#" },
	],
};

export default function Footer() {
	return (
		<footer
			className="mt-32 bg-purple-900 sm:mt-56"
			aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<img className="h-12 my-2" src="/images/logo-white.png" alt="CIET" />
					<img className="h-12 my-4" src="images/+uach.png" alt="+UACH" />

					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold leading-6 text-white">
									Ligas de interés
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{footerNavigation.interest.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold leading-6 text-white">
									Nosotros
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{footerNavigation.about.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold leading-6 text-white">
									Cursos
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{footerNavigation.courses.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold leading-6 text-white">
									Docs
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{footerNavigation.docs.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
