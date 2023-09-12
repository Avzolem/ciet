const ContactPage = () => {
    return (
        <div className="h-min-screen h-full  bg-gray-200">
            <div className="relative mx-auto max-w-xl">
                <div className="flex h-screen items-center justify-center">
                    <div className="rounded-xl bg-white px-12 text-center">
                        <br></br>
                        <span className="pt-20 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                            ¡Formulario recibido!
                        </span>
                        <div className="mt-4 pb-6  text-lg leading-6 text-black">
                            <h1>
                                Gracias por ponerte en contacto con nosotros.
                                &nbsp; En un periodo de 24 a 72 horas recibirás
                                un correo de confirmación en la dirección
                                proporcionada.
                            </h1>
                            <br />
                            <h2>Para preguntas e información adicional:</h2>
                            <br />

                            <div className="text-center text-lb">
                                <div className="flex justify-center">
                                    <a
                                        href="mailto:ciet@uach.mx"
                                        target="_blank"
                                    >
                                        <h1 className="font-bold text-sky-400/100">
                                            ciet@uach.mx
                                        </h1>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="img">
                            <img
                                src="/images/sobre.png"
                                className="mx-auto h-48 w-48"
                            />
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
    );
};

export default ContactPage;
