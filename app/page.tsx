import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Topbar from "@/components/topbar"

export default function Page() {
  return (
    <>
      <Topbar />
      <h1 className="mt-8 text-center text-5xl font-bold underline">Hello!</h1>
      <p className="mt-6 text-center text-xl">
        I am kolioaris! A guy who loves coding and gaming!
      </p>
      <div className="mt-4 flex justify-center">
        <Button asChild>
          <Link href="https://github.com/kolioaris" target="_blank">
            <Image
              src="/icons/github.svg"
              width={20}
              height={20}
              alt="GitHub"
            />
            Find me on GitHub
          </Link>
        </Button>
      </div>
      <div className="mt-20 flex items-center justify-center gap-6 px-6 sm:gap-8 md:gap-10">
        <div
          className="w-16 shrink-0 sm:w-32 md:w-48 lg:w-64"
          style={{
            height: "1px",
            backgroundColor: "currentColor",
            opacity: 0.4,
          }}
        />
        <h1 className="text-center text-3xl font-bold whitespace-nowrap">
          About Me
        </h1>
        <div
          className="w-16 shrink-0 sm:w-32 md:w-48 lg:w-64"
          style={{
            height: "1px",
            backgroundColor: "currentColor",
            opacity: 0.4,
          }}
        />
      </div>
      <p className="py-4 text-center text-lg sm:px-50 md:px-75 lg:px-100">
        I am a <span className="italic">(half)</span> self-taught developer.
        From a very young age, I was interested in technology. Yeah. I
        don&apos;t know what else to type here lol. I will just start telling
        some fun facts about me. I like starting sentences with the word
        &quot;So,&quot; and I swear <span className="italic">(a lot)</span>.
      </p>
      <div className="mt-12 flex items-center justify-center gap-6 px-6 sm:gap-8 md:gap-10">
        <div
          className="w-16 shrink-0 sm:w-34 md:w-50 lg:w-66"
          style={{
            height: "1px",
            backgroundColor: "currentColor",
            opacity: 0.4,
          }}
        />
        <h1 className="text-center text-3xl font-bold whitespace-nowrap">
          Projects
        </h1>
        <div
          className="w-16 shrink-0 sm:w-34 md:w-50 lg:w-66"
          style={{
            height: "1px",
            backgroundColor: "currentColor",
            opacity: 0.4,
          }}
        />
      </div>
      <div className="mx-16 my-8 grid grid-cols-1 gap-16 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">sh-conv</CardTitle>
            <CardDescription>
              sh-conv is a self-hosted website/app that lets you convert files
              to different formats, as well as download media from a big variety
              of applications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="https://github.com/kolioaris/sh-conv" target="_blank">
                <Image
                  src="/icons/github.svg"
                  width={20}
                  height={20}
                  alt="GitHub"
                />
                Go to GitHub
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">steamchkr</CardTitle>
            <CardDescription>
              Analyse Steam Profiles. Easy. Fast. Free.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>
              {/* <Link href="https://github.com/kolioaris/steamchkr" target="_blank">
                <Image
                  src="/icons/github.svg"
                  width={20}
                  height={20}
                  alt="GitHub"
                />
                Go to GitHub
              </Link> */}
              Soon...
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
