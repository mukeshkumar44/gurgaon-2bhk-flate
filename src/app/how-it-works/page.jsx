import Flats2BHKFAQ from "./Flats2BHKFAQ";
import Flats2BHKHero from "./Flats2BHKHero";

export const metadata = {
  title: "How It Works – Buy 2BHK Flats in Gurgaon | No Broker, Verified Listings",
  description:
    "Looking for 2BHK flats for sale in Gurgaon? See how our platform works. Browse verified 2BHK apartments in Gurgaon, connect directly with owners – no broker, no commission. Affordable & ready to move 2BHK flats in Gurgaon. Free property listing available!",
  keywords: [
    "2BHK flats in Gurgaon",
    "apartments in Gurgaon",
    "buy 2BHK Gurgaon",
    "property in Gurgaon",
  ],
};

export default function Page() {
  return (
    <>
      <Flats2BHKHero />
      <Flats2BHKFAQ />
    </>
  );
}