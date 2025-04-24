
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  description: string
}

export function Hero({
  title,
  description,
  className,
  ...props
}: HeroProps) {
  return (
    <section
      className={cn("flex items-center justify-center w-full py-32", className)}
      {...props}
    >
      <div className="container flex flex-col items-center justify-center">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-extrabold lg:text-6xl">
            {title}
          </h1>
          <p className="text-balance text-center text-muted-foreground lg:max-w-md text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
