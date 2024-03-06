import Menu from "@/components/ui/Navbar";
import SectionHero from "./Home/SectionHero";
import Modal from "@/components/ui/Modal";

export default function Home() {
  return (
    <>
      <Modal.Root>
        <Modal.Card />
      </Modal.Root>
      <Menu />
      <SectionHero />
    </>
  );
}
