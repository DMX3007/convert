import { Button } from "@/components/ui/button";

export default function Component({ onClick, disabled }: { onClick: () => void, disabled: boolean }) {
  console.log(disabled)
  return (
    <div className="flex justify-center items-center">
      <Button 
        onClick={onClick}
        disabled={disabled}
        size="lg" 
        className="text-xl py-6 px-8 font-bold shadow-lg hover:shadow-xl transition-all duration-300 bg-purple-800 hover:bg-purple-900 text-white"
      >
        Start
      </Button>
    </div>
  )
}