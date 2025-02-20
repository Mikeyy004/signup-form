import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SignupForm() {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-purple-600 rounded-full mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">Z</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">Sign Up for Zenith</h2>
        <p className="text-muted-foreground">Join our community today</p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John" required />
            </div>
            <div>
              <Label htmlFor="surname">Surname</Label>
              <Input id="surname" placeholder="Doe" required />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="captcha" />
            <Label htmlFor="captcha">I'm not a robot</Label>
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Sign Up</Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center text-center text-sm text-muted-foreground">
        <div className="space-x-2 mb-2">
          <a href="#" className="hover:underline">
            Terms
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Help
          </a>
        </div>
        <p>We respect your privacy. Your data is safe with us.</p>
      </CardFooter>
    </Card>
  )
}

