import { Link } from "react-router-dom";
import PageBackground from "../layouts/PageBackground";
import FrameLayout from "../components/FrameLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

export default function NotFoundPage() {
	
const { t } = useLanguage();  
	
  return (
    <PageBackground>
      <div className="w-full max-w-6xl mx-auto">
        <FrameLayout>
          <div className="px-6 sm:px-8 lg:px-10">
            <Header />

            <main className="px-6 py-20 text-center space-y-6 min-h-[calc(100dvh-300px)]"> {/* тут костыльный дотяг страницы до низа экрана */}
			<br />
			<br />
              <h1 className="text-5xl font-bold ">{t("text_404_title")}</h1>

              <p className="text-lg text-gray-300">
                {t("text_404_text_1")}
              </p>

              <p className="text-sm text-gray-400">
                {t("text_404_text_2")}
              </p>

              <Link
                to="/"
                className="inline-block mt-6 px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
              >
                {t("text_404_button")}
              </Link>

            </main>

            <Footer />
        </div>			
       </FrameLayout>
      </div>
    </PageBackground>
  );
}
