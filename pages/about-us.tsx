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
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
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
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Chairman</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center space-y-2">
                                    <Avatar>
                                        <AvatarImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABHb29nbGUAAP/bAIQAAwICCwoNCwsICAgKCAsKDQoJCAoICwgICQ0LCggIDQoKCAgKCwoKCgoNCw4KCg0ICwgPCg0KCBAPCggNDQoKCAEDBAQGBQYKBgYKDQ0KDQ0PDw0PDQ0NDQ4NDQ0NDQ0NDQ0NDQ0NDw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0N/8AAEQgAUwBTAwERAAIRAQMRAf/EAB0AAAAGAwEAAAAAAAAAAAAAAAEDBAUHCAAGCQL/xABAEAACAgAEAwYEAwQGCwAAAAABAgMRAAQSIQUxQQYHEyJRYTJxgaEIFJFCUpKxCSNicoLBFRckU5OistHS8PH/xAAaAQACAwEBAAAAAAAAAAAAAAAABQEDBAYC/8QAKREAAgIBAgYBBAMBAAAAAAAAAAIBAxIEEQUTISIxMlFSYXHwI0GRQv/aAAwDAQACEQMRAD8Au1NIpOqjfJip0uR8+tdAdufWiM6ObTY8hwZWAKm1PpI4+x17+tMu97L00YIZxzj7NJ6N/wAR/wDywYKRmLcnwlUvSDvzBJYf8xPyxaSHTZIHmAf5/Q8x9KwAIpMgi8iqn+1Tf9Xn/RtsACjKxnoRp9NWq/dX+Ij+9fKhXPAAobAAWjqdgVJ9mB+wN4AE+Y4SCbqj1Itb9Loiz7nAAjk4O3RzXuoJ/Xa/0xVgSRSeLDC/IuwHnhHF5EIMfmLfsfEH+ajr7iuQ54tRmK3QlThTsygumlv3buvsP5DDArwAfMdRRXkABZc8vL7D15Hc2ALISGflSfi/hGw+pG59+QPpgAMWMDkAB7Ch9sABRbr8KgE7/E1C+XML16E+24IAMMOoeYDmfsxAN9Krav13wABEt2riyPUDcHkf+/oQduWABRHl69fqb+/P9b+eADwUwAV67Pdp4ZADPk516ECWNlPuKZGI+YxkXaPJe2RI/ZvtLFyy+Um92EaqB85Gkr737Y1Kiz6lbm2ZLjKyHRqTX+2qsXKjfYso2ZqI9hqo9cGB4HsxKK5X8I+tbfa/piQDPDwAJJMjqNseXJQfLt1P7x+ew++AAc2RsOnNj6KNzfz5fr6bAHrIw+UXsdyR8zq/zwADmEoqfQ0fkdv50fkD64ADvDwAZ4eADjl2K/FXDkFvK8IIYLRM/F5p4gANz4AhjgH+KM39sMWpRvJlS6VLp90fbHPZiD8zxiIZZJFvK8MTVHJpNkS5gal8NW5rGUV6+KiSgiUX/k1I2ZPndNw2kMhABkYlQAFAUeUVQ5bbWT68yScl30gbskt2xNAcutCwL+bdOtVyvFQBM/EwgLysEXYbmgPT3LnlS36AHqbgH/nNgdJ3+Ff2j9P5+nXrQARBFqO9VfmI5GuSj1QevU/4sADhWADK/wDmAAcAGYAOJvc9284Xw9lnly+czedFGNnhhGVy5BvVFC0x1yjapJi2nSpSOFtWpmY0lS1/cj3yS8XkkZMq0eWVhGZ5JfEmlmeqQRqulQoOuQs8pGqMbay0dprRy7ozKwoQWVYkAS+QVVW2N8+Ww9x681D9Z3PcLl0g03/WJqJlYERBimUy4ILzstEyEUaCjkKISyd2oYyZl/Iy7I8mcNLvIsuat5NdRRKKijY7eUMQHKDdipaqa28ox5Tu6ltsIi4L5N7QabMjeUAmRySB66S1DyjmQoAHI6t62GITwdqg2gciyPKBVUg2W/chr9q+WA9YDhwbjYkSNv3gAfY01j6MKwFbLiOplHPpt9yAPucBI19oONCIIWNBpVT3trr/AN+eIUDJuMsDtCzDowZQDYB5H9MGIHArgvCHmkSKIAvI4RbNAWasnoqi2Yi6AJr0aC8uD3H99uXy2ayeRyJjPD8qskubzzjUcw0cMspaID9mSbSS9HXyQKpV283dqGut9uwub2s4ZJmljSLMMhMgQqNOlyWDszAgsdFawqmq17MdOlC9vctfyOa6uWjWfBEeb72I8rmpMrm2SSWIiJQqOhLhfFCZZxpAYbtK5O7MUVtesJqbSvjzF9fgypxGtm5cexOfdfxB5wcxKNJNpCL8iRg+aRVN6brSASa0vTMoJNSpj3Hq76YPXH+0X5lhFFYyin+sk5a63IU829Re7GiaFaqJt37S+vT4Lk3kV5oXIx5aoilX8IZlUAH+yoJ298eEtmZlvjoWPVERC/IhHH/BjnUMLgzCSDzclZlfT9aYG8XUv/HP5KraomyPwSfks5apXItQ63Vm/l5dvpjYL3jAjzvW4g7NEkau7BzKFUaiPDVVBPQDUx3YjcVuce6ZVJ3csrrz6hfZ3vLiEcYkY6woB62BsDfuKONPLWepVNfU4lxTEBtJI8pBra1IKsPkQSGHIrqBBBxeLgeH8SZCSpIsaWo6SRasV1DcXpF1jzJMeS43CPxix2qyyTRodMkbx34fwr1iZpA8bWrlwSGU0wGnHqnT1T1byartRYy7RPQk7sl27yWbmhndsvO6SavGfROy2wd6aQPIgZgHZQGtlWvDbSy7Hq2XBRVFP8mZPz8SEyZdcvIVykhKFFUAnSCNDAmhVfCLAq7kvHHam2YfA7HS1RKw8j3xLgelGEbGNVXyab1bWSSVBcs/tZ5fEeWVGGTrE9SuPeL3mT8OZYsxlM3M7FXcKY50XWCscIkljKFzbNp0yVY855YdVaWb16Sc1fxJKrNpglzs7xyQLHJmMnmYhmlQLE0aeJusjFTEiRsDGDbjSTQ5EC8Y3qmqJSRjVet0wywSf2e43ogRmPwRsCfU6igr+FuXPGir1F1qd7ETd7feomVinzUuZKZbLUjAAqzyORCrFgQSgkkMhsr8LWHHnGZY5tuI1pXl17lVu8f8T02SzEuXSKN0jK6WKuSQ8aSjdTR+KhWOmhNoE7XdSl8MtEH03r19vryxWLgZ4qOx8p8yn2Pr7jkfcHABdj8Fvddk+LcOzOW4hEJBFni8cisYp8uXgy5uOZCGWypLDdXGzKy7YU6q9qbFZR1o6UtrZWgfc7/RtaZFbK8ZkjiH+8yYecfKaCaAA+4iN+g54tTjMx7LH7/p6bhUT4aSw/YXuZfIRxLls3LO6Wztmzr8ZyCuq46MZCnQAoOwWy5GplF2om1s5WBnXS1a7QaP+JDv4zfCxC02VIy0rFDPl2ErKwAIRmk0afEGorQUnSaYkU2nQUVWtjMmbWXW1r0gifg/4sMnMf63NzKzKFJmedG0i6HjBq8tnSdR02aIx1aUqnRTlHrznNieO7rvmgnMa/mcu0axmODw2jWNBQYjRHS2yppBoEBao6rwg4lpniN1HnC71WcZHHtr3kxJlzNJmY8vlI5Bqme21uGAVYol80pMnlRU3kdaUMGOF8PMbJBu5URLWMUz7/e+OLO5XOQwLpiy2dijFtrecFTc7kAAMXjeNQlhVUUfM1t9Pp4rjOfJj1OpiyOWvgjTg/e/AUjGby7y5hUWN5QR5xGoiQm9ydCqGPU3hgKpmNyG7xWVhkcm1H5qfQ+h9j9iB74ALHfgc76V4fnDBO4XK5zTEWJpY5gSIm+T6jEx94z0OFmuozXcbaG/lth/U+TpsvExYXe6sbGj0oNyJHMjY1vVbjmvsdTvAYcwQT5bFjTRANHneojcH0rYjYm8W7kiDtLwCHMxvDmoY5oJBpkhkQSRuD0ZGBB/y9sQjujZpO0lTqrLi0FbO0v9H1wuVtUMmfyo1FikM6Ohsklf9qimYL6BWGnYDSKGG6cVvT2iJ/fsKn4fU3iZGTvE7AcK7M5TMZnLZYS51oikUmZc5iTU5VBWryRKzAEiJY9eg2GokUTq7tQ2O5bGmq0y5zBz44/3kZzOtD+czs+Y8CvBEhUJDpFWkaKqBuhYqWbqzYaVVrE5CCy5nnrPQ9RZtgGXUdLAahezaTqBPqQf5n1OGBlyCdeA8hWADMAAaq3s/rX3G4+hGIeNyYnadzp9+Ezvs/0tkdM7Ic7liIMzqF6iouOcgab8VQGJQrTiQBgQDjltTVg+52OmeLa9v7JjyWflHlMbjpqEiuh9i7HVXWhEv948xlyg1cphVLnJq2aBW6Eq8g/gDIfl5h0+tcE7SaV3i9/GWyaM8k0elfikL6Yl6AFj8bHokWsk7eU49wjT4BpRfJzU/Er+JE8WYJGHXLq/ianoPMwBQMYxtGiqajTci7IRvKrjTaWa5ybyc9rtZzexfBEvCsvQs8zh2iiMctWPQAasAAYAMwAeZMAE5/gN43JHxXw43ZY5cnL4qDk/htEyE31Qs2kjlqboTaXX+o44Y08w6ZiQ+uOeOvYgv8Qna+aMTqkrBUhDqtAizd6gQdY9n1AegxNPuUP6HLbivbTMZxlkzk8kz9C52SwQRGgpY1OkWIwgJF1eH9CwcrrHbfbcQ5cb4YmE2JRjWpnDcQBmAD//2Q=="/>
                                        <AvatarFallback>JS</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1 text-center">
                                        <h3 className="text-lg font-medium">Zinedin Arnaut</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Minute Taker</p>
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
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Member</p>
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
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Member</p>
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