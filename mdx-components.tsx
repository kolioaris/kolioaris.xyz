import React from "react"
import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import { Link as LinkIcon } from "lucide-react"

type AlertType = "NOTE" | "TIP" | "IMPORTANT" | "WARNING" | "CAUTION"

const alertConfig: Record<
  AlertType,
  { color: string; bg: string; border: string; label: string; iconSrc: string }
> = {
  NOTE: {
    color: "text-blue-700 dark:text-blue-400",
    bg: "bg-blue-50/60 dark:bg-blue-950/40",
    border: "border-blue-500",
    label: "Note",
    iconSrc: "/icons/note.svg",
  },
  TIP: {
    color: "text-green-700 dark:text-green-400",
    bg: "bg-green-50/60 dark:bg-green-950/40",
    border: "border-green-500",
    label: "Tip",
    iconSrc: "/icons/tip.svg",
  },
  IMPORTANT: {
    color: "text-purple-700 dark:text-purple-400",
    bg: "bg-purple-50/60 dark:bg-purple-950/40",
    border: "border-purple-500",
    label: "Important",
    iconSrc: "/icons/important.svg",
  },
  WARNING: {
    color: "text-yellow-700 dark:text-yellow-400",
    bg: "bg-yellow-50/60 dark:bg-yellow-950/40",
    border: "border-yellow-500",
    label: "Warning",
    iconSrc: "/icons/warning.svg",
  },
  CAUTION: {
    color: "text-red-700 dark:text-red-400",
    bg: "bg-red-50/60 dark:bg-red-950/40",
    border: "border-red-500",
    label: "Caution",
    iconSrc: "/icons/caution.svg",
  },
}

function generateSlug(node: React.ReactNode): string {
  if (!node) return ""
  if (typeof node === "string") {
    return node
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "")
  }
  if (Array.isArray(node)) {
    return node.map(generateSlug).join("")
  }
  if (React.isValidElement(node)) {
    const props = node.props as Record<string, unknown>
    if (props && "children" in props) {
      return generateSlug(props.children as React.ReactNode)
    }
  }
  return ""
}

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => {
      const id = generateSlug(children)
      return (
        <h1
          id={id}
          className="group mt-6 mb-3 scroll-mt-16 text-2xl font-bold sm:mt-8 sm:mb-4 sm:scroll-mt-20 sm:text-3xl md:mt-10 md:scroll-mt-24 md:text-4xl"
        >
          <a
            href={`#${id}`}
            className="flex w-full items-center gap-2 border-b pb-1 no-underline! hover:text-zinc-200 sm:pb-1.5 md:pb-2"
          >
            {children}
            <LinkIcon className="ml-auto size-4 shrink-0 text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100 sm:size-5" />
          </a>
        </h1>
      )
    },

    h2: ({ children }) => {
      const id = generateSlug(children)
      return (
        <h2
          id={id}
          className="group mt-5 mb-2 scroll-mt-16 text-xl font-semibold sm:mt-6 sm:mb-3 sm:scroll-mt-20 sm:text-2xl md:mt-8 md:scroll-mt-24 md:text-3xl"
        >
          <a
            href={`#${id}`}
            className="flex w-full items-center gap-2 border-b pb-1 no-underline! hover:text-zinc-200 sm:pb-1.5 md:pb-2"
          >
            {children}
            <LinkIcon className="ml-auto size-3.5 shrink-0 text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100 sm:size-4 md:size-4.5" />
          </a>
        </h2>
      )
    },

    h3: ({ children }) => {
      const id = generateSlug(children)
      return (
        <h3
          id={id}
          className="group mt-4 mb-1.5 scroll-mt-16 text-lg font-semibold sm:mt-5 sm:mb-2 sm:scroll-mt-20 sm:text-xl md:mt-6 md:scroll-mt-24 md:text-2xl"
        >
          <a
            href={`#${id}`}
            className="flex w-full items-center gap-2 border-b pb-1 no-underline! hover:text-zinc-200 sm:pb-1.5 md:pb-2"
          >
            {children}
            <LinkIcon className="ml-auto size-3 shrink-0 text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100 sm:size-3.5 md:size-4" />
          </a>
        </h3>
      )
    },

    h4: ({ children }) => (
      <h4 className="mt-3 mb-1 text-base font-semibold sm:mt-4 sm:text-lg md:text-xl">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="mt-2 mb-1 text-sm font-semibold sm:text-base md:text-lg">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="mt-2 mb-1 text-xs font-semibold text-muted-foreground sm:text-sm md:text-base">
        {children}
      </h6>
    ),

    a: ({ href, children }) => (
      <Link
        href={href ?? "#"}
        target="_blank"
        className="text-blue-600 underline underline-offset-2 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {children}
      </Link>
    ),

    blockquote: ({ children }) => {
      const alertTracker: { type: AlertType | null } = { type: null }

      function walk(node: React.ReactNode): React.ReactNode {
        if (!node) return node

        if (typeof node === "string") {
          if (!alertTracker.type) {
            const match = node.match(
              /\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/
            )
            if (match) {
              alertTracker.type = match[1] as AlertType
              const cleaned = node.replace(match[0], "").trimStart()
              return cleaned === "" ? null : cleaned
            }
          }
          return node
        }

        if (Array.isArray(node)) {
          const mapped = node.map(walk).filter(Boolean)
          return mapped.length === 0 ? null : mapped
        }

        if (React.isValidElement(node)) {
          const props = node.props as Record<string, unknown> | undefined
          if (props && "children" in props) {
            const innerChildren = React.Children.toArray(props.children)
            const updatedChildren = innerChildren.map(walk).filter(Boolean)
            if (updatedChildren.length === 0) return null
            return React.cloneElement(node, node.props, ...updatedChildren)
          }
        }

        return node
      }

      const cleanedChildren = React.Children.toArray(children)
        .map(walk)
        .filter(Boolean)

      if (alertTracker.type) {
        const cfg = alertConfig[alertTracker.type]
        return (
          <div
            className={`my-4 rounded-md border-l-4 ${cfg.border} ${cfg.bg} px-3 py-3 sm:my-5 sm:py-3.5`}
          >
            <div
              className={`mb-2 flex items-center gap-2 text-xs font-semibold tracking-wide sm:text-sm ${cfg.color}`}
            >
              <Image
                src={cfg.iconSrc}
                alt={`${cfg.label} icon`}
                width={16}
                height={16}
                className="pointer-events-none inline-block select-none"
                draggable={false}
                priority
              />
              <span>{cfg.label}</span>
            </div>
            <div className="text-xs leading-relaxed text-foreground/90 sm:text-sm">
              {cleanedChildren}
            </div>
          </div>
        )
      }

      return (
        <blockquote className="my-4 border-l-4 border-muted pl-3 text-sm text-muted-foreground italic sm:pl-4 sm:text-base">
          {children}
        </blockquote>
      )
    },

    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    del: ({ children }) => <del className="line-through">{children}</del>,
    sub: ({ children }) => <sub>{children}</sub>,
    sup: ({ children }) => <sup>{children}</sup>,

    code: ({ children }) => (
      <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs sm:px-1.5 sm:text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-3 overflow-x-auto rounded-md bg-muted p-3 font-mono text-xs sm:my-4 sm:p-4 sm:text-sm">
        {children}
      </pre>
    ),

    ul: ({ children }) => (
      <ul className="my-2 list-outside list-disc space-y-1 pl-5 sm:pl-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-2 list-outside list-decimal space-y-1 pl-5 sm:pl-6">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-sm leading-relaxed sm:text-base">{children}</li>
    ),

    input: ({ type, checked, ...props }) =>
      type === "checkbox" ? (
        <input
          type="checkbox"
          checked={checked}
          readOnly
          className="mr-1.5 align-middle"
          {...props}
        />
      ) : (
        <input type={type} {...props} />
      ),

    img: ({ src, alt }) => (
      <Image
        src={src}
        alt={alt ?? ""}
        className="my-3 w-full rounded-md sm:my-4"
        width={800}
        height={450}
        style={{ height: "auto" }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
      />
    ),

    hr: () => <hr className="my-6 border-muted sm:my-8" />,

    table: ({ children }) => (
      <div className="my-3 overflow-x-auto sm:my-4">
        <table className="w-full border-collapse text-xs sm:text-sm">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
    tr: ({ children }) => <tr className="border-b border-muted">{children}</tr>,
    th: ({ children }) => (
      <th className="px-2 py-1.5 text-left font-semibold sm:px-4 sm:py-2">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-2 py-1.5 sm:px-4 sm:py-2">{children}</td>
    ),

    p: ({ children }) => (
      <p className="my-2 text-sm leading-relaxed sm:my-3 sm:text-base">
        {children}
      </p>
    ),
  }
}
