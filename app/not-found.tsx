import Topbar from "@/components/topbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div>
      <Topbar />
      <h1 className="mx-8 mt-8 text-center text-5xl font-bold">Not Found</h1>
      <p className="text-md text-semibold mt-2 text-center">
        Could not find requested resource
      </p>
      <div className="mt-4 flex items-center justify-center">
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}
