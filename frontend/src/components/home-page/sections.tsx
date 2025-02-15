import Link from "next/link"

export const HeroSection = () => {
  return (
    <div className="h-96 bg-blue-500">
      HeroSection
    </div>
  )
}

export const IntroSection = () => {
  return (
    <div className="h-96 bg-green-500">
      IntroSection
    </div>
  )
}

export const CollectionSection = () => {
    return <div className="h-96 bg-yellow-500 flex flex-col">
        CollectionSection
        <Link href="/collections/1" className=" underline text-blue-500">Go to Collection Page</Link>
    </div>;
}
