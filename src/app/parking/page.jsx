/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZA5xX7ePNkl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button-main"

export default function Component() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/spot.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-[#1b2945] opacity-50" />
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <ParkingSquareIcon className="text-white h-6 w-6" />
          <span className="text-xl font-bold text-white">Must PARKING</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="text-white hover:text-gray-300" href="/">
            Home
          </Link>
          <Link className="text-white hover:text-gray-300" href="/signin">
            LOGIN
          </Link>
          <Link className="text-white hover:text-gray-300" href="#">
            Spots
          </Link>
          <Link className="text-white hover:text-gray-300" href="/contact-us">
            Contact US
          </Link>
        </div>
      </nav>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="mb-4 text-2xl font-bold text-white">
          Navigate with confidence, find your car spot effortlessly, and be on your way.
        </h1>
        <Button className="bg-[#1b2945] text-white">LOGIN</Button>
      </div>
    </div>
  )
}

function ParkingSquareIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  )
}
