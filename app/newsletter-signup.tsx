import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function NewsletterSignup() {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-purple-600 rounded-full mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">Z</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">Subscribe to Zenith</h2>
        <p className="text-muted-foreground">Stay ahead with our weekly insights</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-4 mb-6">
          <Button variant="outline" size="icon">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-4 w-4" />
          </Button>
        </div>
        <form>
          <div className="flex flex-col space-y-4">
            <Input type="email" placeholder="Enter your email" />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Subscribe Now</Button>
          </div>
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
        <p>We respect your privacy. Unsubscribe at any time.</p>
      </CardFooter>
    </Card>
  )
}

