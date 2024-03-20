import { BuyCoffee } from "./components/buyCoffee";
import { PreviousDonations } from "./components/previousDonations";

interface DonationsProps {
  donations: [{
    name: string;
    message: string;
    amount: number;
  }]
}

export default async function Coffee(): Promise<JSX.Element> {
  const response = await fetch("http://localhost:3000/api/donations", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "no-store",
  })

  const { donations } = await response.json() as DonationsProps

  return (
    <div className="flex bg-primary/30 min-h-screen w-full flex-col 
    items-center justify-center py-48 xl:py-20">
      <div className="container mx-auto">
        <div className="hidden xl:flex flex-col xl:flex-row gap-x-14">
          <PreviousDonations donations={donations} />
          <BuyCoffee />
        </div>
        <div className="xl:hidden flex flex-col xl:flex-row gap-x-14">
          <BuyCoffee />
          <PreviousDonations donations={donations} />
        </div>
      </div>
    </div>
  )
}