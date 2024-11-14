import { Button } from "../../components/ui/Button"

const Header = () => {
  return (
    <div className="bg-primary min-h-[40vh] flex items-center justify-center">
        <div className="max-w-[1440px] px-10 md:px-20 mx-auto text-center">
            <h1 className="font-syne font-bold text-2xl md:text-4xl ">Empowering Schools to Streamline Transport</h1>
            <h3 className="my-3 text-muted-foreground text-lg">We handle transport, so you can focus on education</h3>
            <Button className="border border-black">Request a Demo</Button>
        </div>
    </div>
  )
}

export default Header