import MainLayout from "@/components/layouts/MainLayout";

const ContactPage = () => {
	return (
		<MainLayout title="Exito" childrenClassName="h-screen">
			<div className="h-min-screen h-full  bg-black">
				<div className="relative mx-auto max-w-xl">
					<div className="flex h-screen items-center justify-center">
						<div className="rounded-xl bg-white px-12 text-center">
							<h2 className="pt-20 text-3xl font-bold tracking-tight text-black sm:text-4xl">
								¡Aplicación recibida!
							</h2>
							<p className="mt-4 pb-6  text-lg leading-6 text-black">
								<h2>
									Gracias por tu interés en participar en la convocatoria
									Hybrida.&nbsp; En un periodo de 24 a 72 horas recibirás un
									correo de confirmación en la dirección proporcionada.
								</h2>
								<br />
								<h2>Para preguntas e información adicional:</h2>
								<br />

								<div className="text-center text-sm">
									<div className="flex justify-center">
										<p>Escribenos un correo a</p> &nbsp;
										<a href="mailto:hybrida@uach.mx" target="_blank">
											<p className="font-bold text-sky-400/100">
												hybrida@uach.mx
											</p>
										</a>
									</div>
									<div className="flex justify-center">
										<p>Envía mensaje vía Instagram a</p> &nbsp;
										<a
											href="https://www.instagram.com/hybrida.uach/"
											target="_blank">
											<p className="font-bold text-pink-400/100">
												@hybrida.uach
											</p>
										</a>
									</div>
									<div className="flex justify-center">
										<p>Envía mensaje vía Discord </p> &nbsp;
										<a href="https://discord.gg/6g7rZTsaCP" target="_blank">
											<p className="font-bold text-purple-600">@hybridauach</p>
										</a>
										&nbsp;
										<p>en el canal #Preguntas</p> &nbsp;
									</div>
								</div>
							</p>

							<div className="img">
								<img src="/images/sobre.png" className="mx-auto h-48 w-48" />
							</div>

							<div className="pt-6 pb-20">
								<a href="/">
									<button className="inline-flex items-center rounded-full border border-transparent bg-purple-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
										Regresar a la página principal
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default ContactPage;
