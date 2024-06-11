import Link from "next/link";
import { JSX, SVGProps, useState } from "react";
import data from "../public/data.json";
import {Button} from "@/components/ui/button";
import Image from "next/image";  // Import the JSON data
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {toast} from "sonner";

// Define types for the JSON data
interface NavLink {
    text: string;
    href: string;
}

interface Item {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

interface FooterLink {
    text: string;
    href: string;
}

interface Data {
    header: {
        logo: {
            text: string;
            iconClass: string;
            link: string;
        };
        navLinks: NavLink[];
    };
    products: Item[];
    services: Item[];
    footer: {
        text: string;
        links: FooterLink[];
    };
}

// Destructure data from the imported JSON
const { header, products, services, footer } = data as Data;

export default function Component() {
    const [showProducts, setShowProducts] = useState(false);
    const [showServices, setShowServices] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Simulate form submission failure
        toast.error('The contact form is currently not working. Please try again later.');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
                <Link className="mr-6 flex items-center" href={header.logo.link}>
                    <MountainIcon className={header.logo.iconClass} />
                    <span className="ml-2 text-lg font-semibold">{header.logo.text}</span>
                </Link>
                <nav className="ml-auto hidden lg:flex gap-4 sm:gap-2">
                    {header.navLinks.map((link, index) => (
                        <Link
                            key={index}
                            className="inline-flex h-9 items-center justify-center rounded bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                            href={link.href}
                        >
                            {link.text}
                        </Link>
                    ))}
                </nav>
            </header>
            <main className="flex flex-col w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 min-h-screen">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                    <Button
                        variant="outline"
                        className=" text-white px-4 py-2 rounded"
                        onClick={() => setShowProducts(!showProducts)}
                    >
                        {showProducts ? "Hide Projects" : "Show Projects"}
                    </Button>
                    {showProducts && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
                            {products.map((product, index) => (
                                <div key={index}
                                     className="bg-white rounded shadow-lg overflow-hidden dark:bg-gray-950">
                                    <Image
                                        alt={product.imageAlt}
                                        className="w-full h-48 object-cover"
                                        height={400}
                                        src={product.imageSrc}
                                        style={{
                                            aspectRatio: "600/400",
                                            objectFit: "cover",
                                        }}
                                        width={600}
                                    />
                                    <div className="p-4 md:p-6">
                                        <h3 className="text-lg md:text-xl font-bold mb-2">{product.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Services</h2>
                    <Button
                        variant="outline"
                        className=" text-white px-4 py-2 rounded"
                        onClick={() => setShowServices(!showServices)}
                    >
                        {showServices ? "Hide Services" : "Show Services"}
                    </Button>
                    {showServices && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
                            {services.map((service, index) => (
                                <div key={index}
                                     className="bg-white rounded shadow-lg overflow-hidden dark:bg-gray-950">
                                    <Image
                                        alt={service.imageAlt}
                                        className="w-full h-48 object-cover"
                                        height={400}
                                        src={service.imageSrc}
                                        style={{
                                            aspectRatio: "600/400",
                                            objectFit: "cover",
                                        }}
                                        width={600}
                                    />
                                    <div className="p-4 md:p-6">
                                        <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                <section id="contact" className="flex flex-col items-center justify-center mx-auto px-4 p-8 md:px-6 max-w-6xl w-full gap-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold">Contact us</h2>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        We're here to help. Fill out the form below and we'll get back to you as soon as
                                        possible.
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit} className="gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">First name</Label>
                                            <Input id="first-name" placeholder="Enter your first name"/>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">Last name</Label>
                                            <Input id="last-name" placeholder="Enter your last name"/>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="Enter your email" type="email"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea className="min-h-[100px]" id="message"
                                                  placeholder="Enter your message"/>
                                    </div>
                                    <div className="space-y-2 py-2.5 gap-4">
                                        <Button type="submit" variant="outline" className="rounded">Send
                                            message</Button>
                                    </div>
                                </form>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold">TechTitans Email:</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">contact@TechTitans.com</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <p className="font-semibold">TechTitans Phone Number</p>
                                        <p>+6193472489</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">{footer.text}</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    {footer.links.map((link, index) => (
                        <Link key={index} className="text-xs hover:underline underline-offset-4" href={link.href}>
                            {link.text}
                        </Link>
                    ))}
                </nav>
            </footer>
        </div>
    );
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
    );
}