import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

// Navigation Bar Items
const documentation: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: "Contribute",
    href: "/documentation/contribute",
    description:
      "If you're interested in contributing, here's how you can get started",
  },
  {
    title: "sh-conv",
    href: "/documentation/sh-conv",
    description: "The documentation for the sh-conv web app",
  },
]

// Social Links Items
const socials: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: "GitHub",
    href: "https://github.com/kolioaris/",
    description: "Here is where all my open source projects are hosted.",
  },
  {
    title: "Mail",
    href: "mailto:me@kolioaris.xyz",
    description:
      "Send me an email if you need anything. (add me on discord for a faster response)",
  },
  {
    title: "YouTube",
    href: "https://youtube.com/@kolioaris",
    description: "Check out my videos!",
  },
  {
    title: "Twitter (X)",
    href: "https://x.com/kolioaris",
    description: "I tweet there (sometimes)!",
  },
  {
    title: "Discord Server",
    href: "https://discord.gg/cUc9gpsaUF",
    description: "Here is where I chill.",
  },
  {
    title: "Add me on Discord!",
    href: "https://discord.gg/Bst4taY9",
    description: "If you want anything, feel free to add me!",
  },
]

export default function Page() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="p-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                  {documentation.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Socials</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                  {socials.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Separator />
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
