import { useState } from "react";

import {
	AcademicCapIcon,
	BanknotesIcon,
	CheckBadgeIcon,
	ClockIcon,
	ReceiptRefundIcon,
	UsersIcon,
	DevicePhoneMobileIcon,
	ComputerDesktopIcon,
	CubeTransparentIcon,
	CubeIcon,
	PencilSquareIcon,
	MicrophoneIcon,
	VideoCameraIcon,
	RocketLaunchIcon,
	PaintBrushIcon,
	PuzzlePieceIcon,
	ArrowTrendingUpIcon,
	ArrowsRightLeftIcon,
	ArrowPathIcon,
	BugAntIcon,
} from "@heroicons/react/24/outline";

const actions = [
	{
		title: "Desarrollo de aplicaciones para dispositivos móviles",
		text: "Podemos desarrollar cualquier tipo de aplicación móvil, desde aplicaciones nativas hasta aplicaciones híbridas. Adaptándonos a las necesidades de tu empresa.",
		href: "#",
		icon: DevicePhoneMobileIcon,
		iconForeground: "text-teal-700",
		iconBackground: "bg-teal-50",
	},
	{
		title: "Desarrollo de experiencias web",
		text: "Desarrollamos sitios web y aplicaciones web, con las últimas tecnologías del mercado, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: ComputerDesktopIcon,
		iconForeground: "text-purple-700",
		iconBackground: "bg-purple-50",
	},
	{
		title: "Desarrollo de experiencias con VR, AR y videojuegos",
		text: "Desarrollamos experiencias de realidad virtual, realidad aumentada y videojuegos, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: CubeTransparentIcon,
		iconForeground: "text-sky-700",
		iconBackground: "bg-sky-50",
	},
	{
		title: "Diseño de experiencia de usuario",
		text: "Diseñamos la experiencia de usuario de tu aplicación, para que tus clientes tengan una experiencia única.",
		href: "#",
		icon: UsersIcon,
		iconForeground: "text-yellow-700",
		iconBackground: "bg-yellow-50",
	},
	{
		title: "Escaneo, modelado e impresión 3D",
		text: "Podemos escanear, modelar e imprimir en 3D cualquier objeto que necesites.",
		href: "#",
		icon: CubeIcon,
		iconForeground: "text-rose-700",
		iconBackground: "bg-rose-50",
	},
	{
		title: "Diseño gráfico y editorial",
		text: "Diseñamos cualquier tipo de pieza gráfica o editorial, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: PencilSquareIcon,
		iconForeground: "text-indigo-700",
		iconBackground: "bg-indigo-50",
	},
	{
		title: "Edición de audio",
		text: "Editamos cualquier tipo de audio, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: MicrophoneIcon,
		iconForeground: "text-teal-700",
		iconBackground: "bg-teal-50",
	},
	{
		title: "Edición de video",
		text: "Editamos cualquier tipo de video, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: VideoCameraIcon,
		iconForeground: "text-purple-700",
		iconBackground: "bg-purple-50",
	},
];

const formation = [
	{
		title: "Programas de emprendimiento tecnológico",
		text: "Desarrollamos programas de emprendimiento tecnológico, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: RocketLaunchIcon,
		iconForeground: "text-teal-700",
		iconBackground: "bg-teal-50",
	},
	{
		title: "Programas de emprendimiento cultural",
		text: "Desarrollamos programas de emprendimiento cultural, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: PaintBrushIcon,
		iconForeground: "text-purple-700",
		iconBackground: "bg-purple-50",
	},
	{
		title: "Taller de creatividad y emprendimiento infantil",
		text: "Desarrollamos talleres de creatividad y emprendimiento infantil, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: PuzzlePieceIcon,
		iconForeground: "text-sky-700",
		iconBackground: "bg-sky-50",
	},
	{
		title: "Taller de intraemprendimiento",
		text: "Desarrollamos talleres de intraemprendimiento, para que tu empresa pueda llegar a más clientes.",
		text: "Desarrollamos talleres de creatividad y emprendimiento juvenil, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: ArrowTrendingUpIcon,
		iconForeground: "text-yellow-700",
		iconBackground: "bg-yellow-50",
	},
	{
		title: "Formación de formadores en lean startup",
		text: "Formamos a formadores en lean startup, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: AcademicCapIcon,
		iconForeground: "text-rose-700",
		iconBackground: "bg-rose-50",
	},
	{
		title: "Creatividad aplicada con Design Thinking",
		text: "Desarrollamos talleres de creatividad aplicada con Design Thinking, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: ArrowsRightLeftIcon,
		iconForeground: "text-indigo-700",
		iconBackground: "bg-indigo-50",
	},
	{
		title: "Sprint de innovación con metodología de Google",
		text: "Desarrollamos talleres de creatividad y emprendimiento juvenil, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: ComputerDesktopIcon,
		iconForeground: "text-teal-700",
		iconBackground: "bg-teal-50",
	},
	{
		title: "Organización de eventos de tecnología e innovación",
		text: "Desarrollamos talleres de creatividad y emprendimiento juvenil, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: UsersIcon,
		iconForeground: "text-purple-700",
		iconBackground: "bg-purple-50",
	},
	{
		title: "Conferencias sobre innovación y tecnología",
		text: "Desarrollamos talleres de creatividad y emprendimiento juvenil, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: MicrophoneIcon,
		iconForeground: "text-sky-700",
		iconBackground: "bg-sky-50",
	},
	{
		title:
			"Evaluación en competencias de innovación, emprendimiento y tecnología",
		text: "Desarrollamos talleres de creatividad y emprendimiento juvenil, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: PencilSquareIcon,
		iconForeground: "text-yellow-700",
		iconBackground: "bg-yellow-50",
	},
	{
		title: "Facilitación de sesiones de creatividad y estrategia",
		text: "Desarrollamos talleres de creatividad y emprendimiento juvenil, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: ArrowPathIcon,
		iconForeground: "text-rose-700",
		iconBackground: "bg-rose-50",
	},
	{
		title: "Eventos de comunidad de tecnología e innovación",
		text: "Desarrollamos talleres de creatividad y emprendimiento juvenil, para que tu empresa pueda llegar a más clientes.",
		href: "#",
		icon: BugAntIcon,
		iconForeground: "text-indigo-700",
		iconBackground: "bg-indigo-50",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [selectedInfo, setSelectedInfo] = useState(actions);
	const [selectedButton, setSelectedButton] = useState("button1"); // Estado para el botón seleccionado

	const handleButton1Click = () => {
		setSelectedInfo(actions);
		setSelectedButton("button1");
	};

	const handleButton2Click = () => {
		setSelectedInfo(formation);
		setSelectedButton("button2");
	};

	return (
		<div>
			<h2 className="text-black text-5xl pb-10 text-center font-semibold">
				Nuestros servicios
			</h2>
			<div className="flex justify-center mt-4 space-x-4 pb-10 px-3">
				<button
					onClick={handleButton1Click}
					className={`px-4 py-2 text-black text-xl rounded hover:bg-purple-50 focus:bg-purple-50 ${
						selectedButton === "button1" ? "border-b-4 border-purple-400" : ""
					}`}>
					Servicios tecnológicos
				</button>
				<button
					onClick={handleButton2Click}
					className={`px-4 py-2 text-black text-xl rounded hover:bg-purple-50 focus:bg-purple-50 ${
						selectedButton === "button2" ? "border-b-4 border-purple-400" : ""
					}`}>
					Formación de talento innovador
				</button>
			</div>
			<div className="divide-y divide-gray-200 overflow-hidden rounded-lg md:px-10 bg-white shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
				{selectedInfo.map((info, actionIdx) => (
					<div
						key={actionIdx}
						className={classNames(
							actionIdx === 0
								? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
								: "",
							actionIdx === 1 ? "sm:rounded-tr-lg" : "",
							actionIdx === selectedInfo.length - 2 ? "sm:rounded-bl-lg" : "",
							actionIdx === selectedInfo.length - 1
								? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
								: "",
							"group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
						)}>
						<div>
							<span
								className={classNames(
									info.iconBackground,
									info.iconForeground,
									"inline-flex rounded-lg p-3 ring-4 ring-white"
								)}>
								<info.icon className="h-6 w-6" aria-hidden="true" />
							</span>
						</div>
						<div className="mt-8">
							<h3 className="text-base font-semibold leading-6 text-gray-900">
								<a href={info.href} className="focus:outline-none">
									{/* Extend touch target to entire panel */}
									<span className="absolute inset-0" aria-hidden="true" />
									{info.title}
								</a>
							</h3>
							<p className="mt-2 text-sm text-gray-500">{info.text}</p>
						</div>
						<span
							className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
							aria-hidden="true">
							<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
							</svg>
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
