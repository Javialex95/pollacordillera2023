import { useEffect, useState } from "react";
import { Footer } from "../../Common/Footer/Footer";
import FloatButton from "../../Common/Utils/FloatButton";
import { HomeBanner } from "./HomeBanner";
import { HomePolla } from "./HomePolla/HomePolla";
import { ThanksModal } from "./HomePolla/ThanksModal";
import Entries from "./HomeSections/Entries";
import Poster from "./HomeSections/Poster";
import Loader from "../../Common/Utils/Loader";
import EntriesIndividual from "./HomeSections/EntriesIndividual";

export const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <main className="overflow-hidden">
      {!loader ? (
        <div className="sections">
          <FloatButton />
          <HomeBanner />
          <Poster />
          <EntriesIndividual />
          <Entries />
          <HomePolla />
          <ThanksModal />
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </main>
  );
};
