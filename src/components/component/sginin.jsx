
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function Sginin() {
  return (
    (<div key="1" className="flex flex-col min-h-screen bg-[#1b2945]">
      <nav className="bg-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img
              alt="TSGS Logo"
              className="h-16 w-16"
              height="60"
              src="/logo.png"
              style={{
                aspectRatio: "60/60",
                objectFit: "cover",
              }}
              width="60" />
            <a className="text-[#1b2945] hover:text-opacity-75" href="/">
              Home
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/students-zone">
              Student's Zone
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/parking">
              Parking
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/event">
              Event
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/contact-us">
              Contact Us
            </a>
          </div>
          <a href='/signin'>
          <Button className="bg-[#1b2945] text-white">SIGN IN</Button>
          </a>
        </div>
      </nav>
      <div
        className="flex-grow container mx-auto flex flex-col items-center justify-center p-6"
        style={{
          backgroundColor: "#f3f4f4",
        }}>
        <h1 className="text-4xl text-[#1b2945] font-bold mb-8">Welcome to TSGS</h1>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form action="/action_page.php" method="get">
              <div className="grid w-full gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label className="font-medium" htmlFor="email">
                    Email*
                  </label>
                  <Input id="email" placeholder="Email" type="email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="font-medium" htmlFor="password">
                    Password*
                  </label>
                  <Input id="password" placeholder="Password" type="password" />
                  <a
                    className="text-sm text-[#1b2945] hover:text-opacity-75 self-end mt-1"
                    href="signin/forgetpassword">
                    Forgot your password?
                  </a>
                </div>
                <Button className="bg-[#1b2945] text-white">Login</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>)
  );
}
