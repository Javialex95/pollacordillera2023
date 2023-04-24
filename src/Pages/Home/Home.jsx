import { Footer } from "../../Common/Footer/Footer"
import { HomeBanner } from "./HomeBanner"
import { HomePolla } from "./HomePolla/HomePolla"
import { ThanksModal } from "./HomePolla/ThanksModal"

export const Home = () => {
  return (
    <main>
        <HomeBanner />
        <HomePolla />
        <ThanksModal />
        <Footer />
    </main>
  )
}
