import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { JSX, SVGProps } from "react"

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
                <Link className="mr-6 flex items-center" href="/">
                    <MountainIcon className="h-6 w-6"/>
                    <span className="ml-2 text-lg font-semibold">TechTitans</span>
                </Link>
                <nav className="ml-auto hidden lg:flex gap-4 sm:gap-2">
                    <Link
                        className="inline-flex h-9 items-center justify-center rounded bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="inline-flex h-9 items-center justify-center rounded bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                        href="/products-and-services"
                    >
                        Products and Services
                    </Link>
                    <Link
                        className="inline-flex h-9 items-center justify-center rounded bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                        href="/about-us"
                    >
                        AboutUs
                    </Link>
                    <Link
                        className="inline-flex h-9 items-center justify-center rounded bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                        href="/contact-us"
                    >
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 border-b">
                    <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <MountainIcon className="h-12 w-12"/>
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    TechTitans
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Empowering businesses with cutting-edge technology solutions. Our mission is to
                                    revolutionize the way
                                    companies operate through innovative software and services.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Meet the TechTitans Team
                                </h2>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Our talented team of experts is dedicated to delivering exceptional software
                                    solutions and services.
                                </p>
                            </div>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
                                <div className="flex flex-col items-center space-y-2">
                                    <Avatar>
                                        <AvatarImage
                                            src="https://lh3.googleusercontent.com/a-/ALV-UjU3mxf2zi8RyL6P2Rhk2JXHYZvOlRfOY0hU00_FgH7iwbVNTeZr=s32-c"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1 text-center">
                                        <h3 className="text-lg font-medium">Caine Botha</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Co-Founder & CEO</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center space-y-2">
                                    <Avatar>
                                        <AvatarImage src="https://proclad-construction.vercel.app/api/v1/avatar/1"/>
                                        <AvatarFallback>JS</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1 text-center">
                                        <h3 className="text-lg font-medium">Zinedin Arnaut</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Co-Founder & CTO</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center space-y-2">
                                    <Avatar>
                                        <AvatarImage
                                            src="https://lh3.googleusercontent.com/a-/ALV-UjWFY8f3EYi5RulH8E99hNmmX4wI6r5YhaQeg90_Fdn8e2muJeQ=s32-c"/>
                                        <AvatarFallback>MJ</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1 text-center">
                                        <h3 className="text-lg font-medium">Aliyah Von</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center space-y-2">
                                    <Avatar>
                                        <AvatarImage
                                            src="https://lh3.googleusercontent.com/a/ACg8ocLh7X9YkJzf1hU6U0Qhr0rf2DLvlV_5fWsx2yPaInTXK159Llg=s32-c-mo"/>
                                        <AvatarFallback>ES</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1 text-center">
                                        <h3 className="text-lg font-medium">Fetiniai Havea</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TechTitans. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

function BoltIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <circle cx="12" cy="12" r="4"/>
        </svg>
    )
}


function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
        </svg>
    )
}


function DatabaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
            <path d="M3 12A9 3 0 0 0 21 12"/>
        </svg>
    )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
        </svg>
    )
}


function SmartphoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
        </svg>
    )
}