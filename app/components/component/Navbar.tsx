'use client'
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"

function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 shadow-lg bg-gray-950 text-white">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold text-gray-300 hover:text-gray-200"
              href="@app/"
            >
              Home
            </Link>
           
            
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold text-gray-300 hover:text-gray-200"
              href="@/app/Contact"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-950 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-900/50 data-[state=open]:bg-gray-900/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:bg-gray-800 dark:focus:text-white dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="/"
            >
              Home
            </Link>
          </NavigationMenuLink>
          
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-950 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-900/50 data-[state=open]:bg-gray-900/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:bg-gray-800 dark:focus:text-white dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="/Contact"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto">
        <Button className="bg-gray-500 hover:bg-gray-600 text-white">Get Started</Button>
      </div>
    </header>
  )
}

interface IconProps extends React.SVGProps<SVGSVGElement>{}

function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(prop: IconProps) {
  return (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}



export default Navbar;
