import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function GamesCarousel() {
  
  const { t } = useLanguage();
  const games = [
  {
    title: t("text_home_games_1_name"),
    description:
      t("text_home_games_1_desc"),
    image: "/images/ndagoddamnit.jpg",
    link: "#",
  },
  {
    title: t("text_home_games_2_name"),
    description:
      t("text_home_games_2_desc"),
    image: "/images/toystorydrop.jpg",
    link: "#",
  },
  {
    title: t("text_home_games_3_name"),
    description:
      t("text_home_games_3_desc"),
    image: "/images/jamgames.jpg",
    link: "#",
  },
];

// 🟣 Секретное содержимое, которое заменит NDA AAA project при Konami-коде
const secretOverride = {
  title: t("text_home_games_4_name"),
  description:
    t("text_home_games_4_desc"),
  image: "/images/wh40ksm2.jpg", 
  link: "#",
};


// 🟣 Сам Konami-код
const konamiCode = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a"
];
  const [index, setIndex] = useState(0);

  // Прогресс ввода и состояние секретного режима
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [secretMode, setSecretMode] = useState(false);


  // 🟣 Логика перелистывания
  const prev = () =>
    setIndex((index - 1 + games.length) % games.length);

  const next = () =>
    setIndex((index + 1) % games.length);


  // 🟣 Обработчик Konami-кода
  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key;

      if (key === konamiCode[konamiProgress]) {
        setKonamiProgress((p) => p + 1);

        if (konamiProgress + 1 === konamiCode.length) {
          setKonamiProgress(0);
          setSecretMode((prev) => !prev); // Вкл/Выкл секретный режим
        }
      } else {
        setKonamiProgress(0);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [konamiProgress]);


  // 🟣 Выбор текущей игры
  const currentGame = games[index];


  // 🟣 Подмена только для NDA AAA project:
  const displayedGame =
    secretMode && currentGame.title === "NDA AAA project"
      ? { ...currentGame, ...secretOverride }
      : currentGame;


  return (
    <section id="games" className="relative bg-transparent text-white">
      <div className="mx-auto -mb-7">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">{t("text_title_games")}</h2>
        </div>

        {/* Стрелки + Карточка */}
        <div className="relative flex items-center justify-center">

          {/* Левая стрелка */}
			<button
			onClick={prev}
			className="absolute left-0 top-1/2 -translate-y-1/2 z-30 
             opacity-70 hover:opacity-100 hover:scale-110 transition"
			>
			<ChevronLeft size={36} />
			</button>

          {/* Контент */}
          <div className="flex flex-col md:flex-row items-top gap-8 bg-black/40 rounded-xl p-6 backdrop-blur-md shadow-lg">

            {/* Текстовая часть */}
            <div className="flex-1 text-left pl-4">
              <h3 className="text-2xl font-semibold mb-3">{displayedGame.title}</h3>
              <p className="text-gray-300 mb-4">{displayedGame.description}</p>
            </div>

            {/* Картинка */}
            <div className="flex-1 pr-3">
              <img
                src={displayedGame.image}
                alt={displayedGame.title}
                className="rounded-xl shadow-lg max-h-72 object-cover mx-auto"
              />

              <br />

              {/* Ссылка */}
              <div className="text-right">
                <a
                  href="/games"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-200 transition text-sm font-medium"
                >
				{t("text_home_games_more")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Правая стрелка */}
			<button
			onClick={next}
			className="absolute right-0 top-1/2 -translate-y-1/2 z-30 
             opacity-70 hover:opacity-100 hover:scale-110 transition"
			>
			<ChevronRight size={36} />
			</button>

        </div>
      </div>
    </section>
  );
}
