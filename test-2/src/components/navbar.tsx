import { MouseEvent, UIEvent, useEffect, useRef, useState } from "react";
import { Button } from "./button"
import { Logo } from "./logo"
import Input from "./input";
import InputPassword from "./input-password";

const LoginButton = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const handleClose = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialog.current) {
      dialog.current.close()
    }
  }

  return (
    <>
      <Button className="text-lg font-semibold" onClick={() => dialog.current?.showModal()} variant="secondary">Login</Button>
      <dialog
        onClick={handleClose}
        className="w-[min(100%,360px)] space-y-9 rounded-2xl px-8 py-10 text-center backdrop:mx-auto backdrop:bg-gray-900/50"
        ref={dialog}
      >
        <p className="mb-8 text-2xl font-medium">
          Sign <span className="text-primary">In</span>
        </p>
        <form
          className="flex w-full max-w-sm flex-col gap-6"
          autoComplete="one-time-code"
          onSubmit={e => e.preventDefault()}
        >
          <div>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              leftIcon={<svg className="text-gray-400 h-5 w-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.05 0-3.875-.788t-3.188-2.15q-1.362-1.362-2.15-3.187T2 12q0-2.075.788-3.888t2.15-3.174Q6.3 3.575 8.124 2.788T12 2q2.075 0 3.888.788t3.174 2.15q1.363 1.362 2.15 3.175T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.9 0-1.675-.4t-1.275-1.05q-.675.675-1.588 1.063T12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12v1.45q0 .725.45 1.137T18.5 15q.6 0 1.05-.413T20 13.45V12q0-3.275-2.363-5.638T12 4Q8.725 4 6.362 6.363T4 12q0 3.275 2.363 5.638T12 20h5v2h-5Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"></path></svg>}
            />
            <InputPassword
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <a href="#" className="text-primary block font-medium">
            Forgot password?
          </a>
          <Button variant="primary" className="w-full py-3 text-lg font-semibold">
            Sign In
          </Button>
        </form>
        <p className="text-text-secondary mt-8">
          Don&apos;t have account?{" "}
          <a href="#" className="text-primary font-medium">
            Sign Up
          </a>
        </p>
      </dialog>
    </>
  )
}

export const Navbar = () => {
  const navbar = useRef<HTMLElement>(null);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 70 && !navbarScrolled) {
        setNavbarScrolled(true);
        navbar.current?.classList.remove("absolute")
        navbar.current?.classList.add("fixed", "bg-white", "shadow-sm")
      } else {
        setNavbarScrolled(false);
        navbar.current?.classList.add("absolute")
        navbar.current?.classList.remove("fixed", "bg-white", "shadow-sm")
      }
    }
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    }
  }, [])

  return (
    <>
      <nav
        ref={navbar}
        className="absolute top-0 left-0 w-full mx-auto z-10"
      >
        <div className="max-w-screen-2xl w-full mx-auto flex items-center justify-between px-8 py-4 md:py-6 ">
          <a href="#">
            <Logo variant={navbarScrolled ? "primary" : "white"} />
          </a>
          <div className="relative hidden md:flex items-center gap-8">
            <a className="text-lg uppercase font-semibold" href="#about">About</a>
            <a className="text-lg uppercase font-semibold" href="#pricing">Pricing</a>
            <a className="text-lg uppercase font-semibold" href="#contact">Contact</a>
            <LoginButton />
          </div>
          <div className="relative block md:hidden">
            <button onClick={() => setIsOpen(prev => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                ><path
                  fill="currentColor"
                  d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"></path></svg
              >
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="animate-[navbar-open_500ms_ease-in-out] fixed bg-white h-screen w-screen flex flex-col justify-center items-center py-24 z-10">
          <div className="flex-1 flex flex-col justify-center items-center gap-8">
            <a onClick={() => setIsOpen(false)} className="text-lg uppercase font-semibold" href="#">Home</a>
            <a onClick={() => setIsOpen(false)} className="text-lg uppercase font-semibold" href="#about">About</a>
            <a onClick={() => setIsOpen(false)} className="text-lg uppercase font-semibold" href="#pricing">Pricing</a>
            <a onClick={() => setIsOpen(false)} className="text-lg uppercase font-semibold" href="#contact">Contact</a>
            <LoginButton />
          </div>
          <button className="border-2 border-gray-900 rounded-md p-1" onClick={() => setIsOpen(false)}>
            <svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"></path></svg>
          </button>
        </div>
      )}
    </>
  )
}