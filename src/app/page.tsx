import SectionHero from "./Home/SectionHero";
import SectionCardCarroussel from "./Home/SectionCardCarroussel";
import SectionDifferences from "./Home/SectionDifferences";
import SectionSocial from "./Home/SectionSocial";
import SectionIntro from "./Home/SectionIntro";
import SectionFlow from "./Home/SectionFlow";
import SectionDetails from "./Home/SectionDetails";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionIntro />
      <SectionDetails />
      <SectionCardCarroussel />
      <SectionFlow />
      <SectionDifferences />
      <SectionSocial />
    </>
  );
}
