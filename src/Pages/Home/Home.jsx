import { Footer } from "../../Common/Footer/Footer";
import FloatButton from "../../Common/Utils/FloatButton";
import { HomeBanner } from "./HomeBanner";
import { HomePolla } from "./HomePolla/HomePolla";
import { ThanksModal } from "./HomePolla/ThanksModal";

export const Home = () => {
  return (
    <main className="overflow-hidden">
      <FloatButton />
      <HomeBanner />
      <HomePolla />
      <ThanksModal />
      <Footer />
    </main>
  );
};
