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
import ASCIIText from "@/components/ASCIIText"
import Topography from "@/components/Topography"

export default function Page() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <Topography
          lowColor="#ff0000"
          midColor="#ff8b8b"
          highColor="#FFFFFF"
          speed={0.25}
          morphAmount={3}
          morphSpeed={0.05}
          bands={2}
          thickness={0.01}
          scale={2}
          pixelSize={1}
          glow={0.5}
          colorMode="elevation"
          contrast={3}
          brightness={1}
          fillBands={false}
          opacity={0.5}
          grain
          grainIntensity={0.05}
          mouseInteraction
          mouseRadius={0.3}
          mouseStrength={0.1}
        />
      </div>
      <Topbar />
      <div className="relative h-40 w-full overflow-hidden">
        <ASCIIText
          text="Hello!"
          enableWaves={false}
          asciiFontSize={3}
          textFontSize={240}
          planeBaseHeight={9}
        />
      </div>
      <p className="mt-2 text-center text-xl">
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
        &quot;So,&quot;. I don't know what else to say here. So, have a good
        rest of your day, reader!
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
      <div className="mx-16 my-8 grid grid-cols-1 gap-16 opacity-80 md:grid-cols-2">
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
