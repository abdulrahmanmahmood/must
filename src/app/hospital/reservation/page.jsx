
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Component() {
  return (
    <div key="1" className="bg-[#e5e7eb] min-h-screen text-white">
    <nav className="bg-white py-4 px-8 flex justify-between items-center">
        <span
        style={{
            color: "#1b2945",
          }}
         className="font-bold text-xl">TSGS Hospital</span>
        <div className="space-x-4">
          <Link className="text-gray-700 hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/hospital/reservation">
            Reservation
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="#">
            Contact Us
          </Link>
          <a href='/signin'>
          <Button className="bg-[#1b2945] text-white">SIGN IN</Button>
          </a>
        </div>
      </nav>
      <main className="px-8 py-4 bg-[#e5e7eb]">
        <section className="flex justify-between items-center">
          <div>
          <img alt="Hospital Logo" className="h-25 w-25 mb-2" src="/logo.png" />
            <h2
              className="text-3xl font-bold mb-2"
              style={{
                color: "#1b2945",
              }}
            >
Welcome to TSGS Hospital            </h2>
          </div>
          <Card className="bg-[#1b2945] text-white w-[350px]">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-white">Booking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">Reservation Number is</p>
              <p className="text-4xl font-bold text-white mb-8">12</p>
              <Button className="w-full bg-white text-[#1b2945] hover:bg-[#1d4ed8]">Done</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

