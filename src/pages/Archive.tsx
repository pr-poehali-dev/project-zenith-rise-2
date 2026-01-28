import { useState } from "react"
import { motion } from "framer-motion"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Lock } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const archives = [
  {
    id: "1",
    name: "KislitGrief (KrUzo)",
    nicknames: "Даня Мухин, KislitGrief, ArsheneGrief, xSkilek, KrUzo, demonate",
    period: "2016-2019",
    owner: null,
    communities: [],
    vkLinks: [
      "https://vk.com/id589724695",
      "https://vk.com/id556263539",
      "https://vk.com/id583632012",
      "https://vk.com/id577249758",
      "https://vk.com/id572536299",
      "https://vk.com/id588768188",
      "https://vk.com/id276846320",
      "https://vk.com/id560960242",
      "https://vk.com/id568025768",
      "https://vk.com/id245024828",
      "https://vk.com/id376212623",
      "https://vk.com/id215626366",
    ],
    archiveLinks: [],
    description: null,
  },
  {
    id: "2",
    name: "Алексей Докс (Максим Докс)",
    nicknames: "Максим Докс, Алексей Докс, Алиса Преступления, Leviatyan, AliceCrimes",
    period: "2017-2021",
    owner: "Владелец сообществ: «Leviathan» (2019)",
    communities: ["vk.com/club180210821"],
    vkLinks: [
      "vk.com/ld1488i",
      "vk.com/lurkmoars",
      "vk.com/dox.xing",
      "vk.com/loldox",
      "vk.com/idloldox",
      "vk.com/id541404595",
      "vk.com/alicecrimes",
      "vk.com/bapholes",
      "vk.com/id549319166",
      "vk.com/id502537510",
      "t.me/+380933206109",
    ],
    archiveLinks: [],
    description: null,
  },
  {
    id: "3",
    name: "Kykyzla Grief (Герман Ханин)",
    nicknames: "Герман Король, Кукузла Гриф, Герман Ханин, kkzlss, kkzlgrf, Kykyzless",
    period: "2016-2021",
    owner: "Владелец Сообщества: «Майнкрафт с Кукузлой» (2017)",
    communities: [],
    vkLinks: [
      "vk.ru/GermanHanin",
      "vk.me/german8713",
      "vk.ru/kykyzlagrief",
      "vk.ru/kykyzlahyz",
      "vk.ru/kkzlgrf",
    ],
    archiveLinks: [
      "https://archive.fo/X9wDA",
      "https://archive.fo/ydKW4",
    ],
    youtubeChannel: "https://youtube.com/@kykyzlagrief",
    description: null,
  },
  {
    id: "4",
    name: "Денис Мертвый (Denis Dead)",
    nicknames: "Денис Мертвый, Denis Dead",
    period: "2019-2022",
    owner: "Владелец сообществ: SaintSouls (Founder) (2020)",
    communities: ["vk.ru/saintsouls"],
    vkLinks: [
      "vk.com/id572738175",
    ],
    archiveLinks: ["https://archive.fo/gJxT7"],
    description: null,
  },
  {
    id: "5",
    name: "Владислав Интерамов (NackenzieGrief)",
    nicknames: "Влад Интерамов, Аврелиан Интерамнский, Nackenzie Grief, Imperator Nackenzie, Иван Кесаримов/Кесаримский, LorenzoGrief, KollyGrief, Neywood, Kesarim, Lackenzee",
    period: "2018-2021",
    owner: "Владелец сообществ: DirtyAlliance, SharmeCompany, UDPMonster, UDPAttack, Crimeless",
    communities: [
      "vk.com/DirtyAlliance",
      "vk.com/SharmeCompany",
      "vk.com/udpmonster",
      "vk.ru/jsdjkfojsdojifo",
    ],
    vkLinks: [
      "vk.com/ImperatorNackenzie",
      "vk.com/NackenzieGrief",
      "vk.com/Nackenzie",
      "vk.com/behehfjsa",
      "instagram.com/imperatornackenzie",
      "instagram.com/nackenziegrief",
      "@nackenziegrief",
      "@nackenzie",
      "vk.ru/i.kesarimov",
      "vk.ru/Nackenzie",
      "t.me/dercetm",
    ],
    archiveLinks: ["https://archive.fo/4QC0s"],
    description: null,
  },
  {
    id: "6",
    name: "Александр Гаусс (Сейл)",
    nicknames: "Alexander Gaus, SailGrief, Гаусс",
    period: "2017-2025",
    owner: "Владелец сообществ: FullD (Owner) (2017), DeanonSay (Owner), EvilVime (Founder) (2018), TeslaCrime (Founder) (2024), RiseDeanon (2020)",
    communities: [
      "t.me/fulldeanonymization",
      "t.me/+v8Zp6v5ef3AyNTk0",
      "t.me/+t_J3H2sZmmthNjJi",
      "t.me/+GfjkfWcJ0ShjMDE0",
      "vk.ru/risedeanon",
      "vk.ru/fulldeanon",
      "vk.ru/evilvime",
      "vk.ru/teslacrime",
    ],
    vkLinks: [
      "vk.ru/sailgrief",
      "@sailgrief",
      "vk.ru/id452563574",
    ],
    archiveLinks: ["https://archive.fo/CVFVp"],
    description: null,
  },
  {
    id: "7",
    name: "Мирослав Маньяк (Максим Хоменко)",
    nicknames: "Мирослав Маньяк, Максим Хоменко",
    period: "2016-2021",
    owner: "Владелец сообщества: «.sekhmet», «Eirene»",
    communities: [
      "vk.ru/eireneee",
      "vk.ru/sekhmettt",
    ],
    vkLinks: [
      "vk.ru/scarymaniac",
      "vk.ru/id636047162",
      "vk.ru/fuckingmaniac",
    ],
    archiveLinks: [
      "https://archive.fo/rbqYY",
      "https://archive.fo/zIwyO",
    ],
    description: null,
  },
  {
    id: "8",
    name: "Георгий Герасимов",
    nicknames: "Георгий Герасимов, Андрей Чернов, Себастьян Блантов",
    period: "2016-2020",
    owner: "Владелец сообществ: TemporayCompanu, CounterLow",
    communities: [
      "vk.ru/TemporaryCompanu",
      "vk.ru/counterlow",
    ],
    vkLinks: [
      "vk.ru/id323021423",
    ],
    archiveLinks: [],
    description: null,
  },
  {
    id: "9",
    name: "Виталий Чаосов (KokosGrief)",
    nicknames: "Евгений Колофедин, KokosGrief, Виталий Чаосов",
    period: "2020-2022",
    owner: "Владелец сообществ: chaosparadise (Founder) (2021)",
    communities: ["vk.ru/chaosparadise"],
    vkLinks: [
      "vk.ru/kokosgrief",
      "vk.ru/crimeless",
    ],
    archiveLinks: [],
    description: null,
  },
  {
    id: "10",
    name: "Максим Ландышев (Демонейт)",
    nicknames: "Максим Ландышев, Демонейт, demonate, Brain Show, Максим Сумской, Максим Демон, MaxMaxMax, SITOX, мировид",
    period: "2017-2020",
    owner: "Владелец сообществ: SweezyLegend (2017)",
    communities: [
      "vk.ru/iconaazadel",
      "vk.ru/yt.demonate",
    ],
    vkLinks: [
      "vk.ru/demonate",
      "vk.ru/bn_show",
      "vk.ru/dameronbrittan",
      "vk.ru/mrdemonate",
      "youtube.com/@demonatehd777",
      "youtube.com/@demonatehd5404",
      "YouTube.com/@demonate9879",
      "youtube.com/@demonate811",
      "vk.com/id305593342",
      "vk.ru/tyler24",
    ],
    archiveLinks: [],
    description: null,
  },
  {
    id: "11",
    name: "Desu Lt",
    nicknames: "Владислав Desu",
    period: "2019-2022",
    owner: "Владелец сообщества: chaosparadise (Founder) (2021)",
    communities: ["vk.ru/chaosparadise"],
    vkLinks: [
      "vk.com/desultt",
      "t.me/desulttt",
    ],
    archiveLinks: ["https://archive.fo/A4XwH"],
    description: null,
  },
  {
    id: "12",
    name: "Алексей Преступление (Internet Crime)",
    nicknames: "Internet Kødeine, Alex Crime, Алексей Преступление, Internet Crime, Internet Foxy, Charlotte Panic, Алексей Мариуполь, Apalon Panic",
    period: "2017-2022",
    owner: null,
    communities: ["https://vk.ru/jsdjkfojsdojifo"],
    vkLinks: [
      "vk.com/crimeanarhistkk",
      "vk.ru/IntelUser",
      "vk.ru/crypanica",
      "vk.ru/id627703405",
    ],
    archiveLinks: ["https://archive.fo/zAeur"],
    description: null,
  },
  {
    id: "13",
    name: "Клавдий Интерамнский",
    nicknames: "Клавдий Интерамнский, slanegrief, Akanori",
    period: "2016-2022",
    owner: null,
    communities: [
      "vk.ru/sekhmettt",
      "vk.ru/eireneee",
      "vk.ru/DirtyAlliance",
    ],
    vkLinks: [
      "vk.ru/allreadyleft",
      "vk.ru/id694515802",
    ],
    archiveLinks: [],
    description: null,
  },
  {
    id: "23",
    name: "FrightChronicles",
    nicknames: null,
    period: "2020",
    owner: "Владелец сообщества: Edwin Garrison",
    communities: [],
    vkLinks: [],
    archiveLinks: ["https://archive.fo/Z4evv"],
    description: "Последующий владелец сообщества (текущий): Александр Гаусс\n\nФрайтХрониклс это паблик созданная в 2020 году, с целью деаномизации разных личностей, была довольно таки популярна под ведением Эдвина Гаррисона, в 2021 году паблик была продана Александру Гауссу, паблик потерял популярность из за прекращения постов и активности",
  },
]

export default function Archive() {
  const { id } = useParams()
  const [showVerificationError, setShowVerificationError] = useState(false)
  const archive = archives.find((a) => a.id === id)

  if (!archive) {
    return (
      <div className="min-h-screen bg-[#09090B] flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl mb-4">Архив не найден</h1>
          <Link to="/" className="text-zinc-400 hover:text-white">
            Вернуться на главную
          </Link>
        </div>
      </div>
    )
  }

  const handleShowArchive = () => {
    setShowVerificationError(true)
  }

  return (
    <div className="min-h-screen bg-[#09090B]">
      <Navbar />
      
      <div className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к архивам
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
              {archive.name}
            </h1>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mb-8">
              {archive.nicknames && (
                <div className="mb-6">
                  <h2 className="text-zinc-400 text-sm mb-2">Неймы</h2>
                  <p className="text-white text-lg">{archive.nicknames}</p>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-zinc-400 text-sm mb-2">Дата пребывания</h2>
                <p className="text-white text-lg">{archive.period}</p>
              </div>

              {archive.owner && (
                <div className="mb-6">
                  <p className="text-white text-lg">{archive.owner}</p>
                </div>
              )}

              {archive.description && (
                <div className="mb-6">
                  <p className="text-white text-lg whitespace-pre-line">{archive.description}</p>
                </div>
              )}

              {archive.communities.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-zinc-400 text-sm mb-2">Сообщества</h2>
                  {archive.communities.map((community, index) => (
                    <div key={index} className="text-white text-lg mb-1">
                      {community}
                    </div>
                  ))}
                </div>
              )}

              {archive.vkLinks.length > 0 && (
                <div className="relative mb-6">
                  <h2 className="text-white text-lg mb-4">Социальные сети</h2>
                  
                  <div className="relative">
                    <div 
                      className="filter blur-[12px] select-none pointer-events-none"
                      style={{ 
                        WebkitUserSelect: "none",
                        MozUserSelect: "none",
                        msUserSelect: "none"
                      }}
                      aria-hidden="true"
                    >
                      {archive.vkLinks.map((link, index) => (
                        <div key={index} className="text-zinc-400 text-base mb-2 font-mono">
                          {link}
                        </div>
                      ))}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <button
                        onClick={handleShowArchive}
                        className="bg-red-600/20 border border-red-600/50 rounded-xl px-6 py-3 flex items-center gap-2 hover:bg-red-600/30 transition-all backdrop-blur-sm"
                      >
                        <Lock className="w-5 h-5 text-red-500" />
                        <span className="text-white font-medium">Вы не верифицированы</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {archive.youtubeChannel && (
                <div className="relative mb-6">
                  <h2 className="text-white text-lg mb-4">YouTube канал</h2>
                  
                  <div className="relative">
                    <div 
                      className="filter blur-[12px] select-none pointer-events-none"
                      style={{ 
                        WebkitUserSelect: "none",
                        MozUserSelect: "none",
                        msUserSelect: "none"
                      }}
                      aria-hidden="true"
                    >
                      <div className="text-zinc-400 text-base mb-2 font-mono">
                        {archive.youtubeChannel}
                      </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <button
                        onClick={handleShowArchive}
                        className="bg-red-600/20 border border-red-600/50 rounded-xl px-6 py-3 flex items-center gap-2 hover:bg-red-600/30 transition-all backdrop-blur-sm"
                      >
                        <Lock className="w-5 h-5 text-red-500" />
                        <span className="text-white font-medium">Вы не верифицированы</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {archive.archiveLinks.length > 0 && (
                <div className="relative">
                  <h2 className="text-white text-lg mb-4">Архивы страниц</h2>
                  
                  <div className="relative">
                    <div 
                      className="filter blur-[12px] select-none pointer-events-none"
                      style={{ 
                        WebkitUserSelect: "none",
                        MozUserSelect: "none",
                        msUserSelect: "none"
                      }}
                      aria-hidden="true"
                    >
                      {archive.archiveLinks.map((link, index) => (
                        <div key={index} className="text-zinc-400 text-base mb-2 font-mono">
                          {link}
                        </div>
                      ))}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <button
                        onClick={handleShowArchive}
                        className="bg-red-600/20 border border-red-600/50 rounded-xl px-6 py-3 flex items-center gap-2 hover:bg-red-600/30 transition-all backdrop-blur-sm"
                      >
                        <Lock className="w-5 h-5 text-red-500" />
                        <span className="text-white font-medium">Вы не верифицированы</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {showVerificationError && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-600/10 border border-red-600/30 rounded-2xl p-6 mb-8"
              >
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <h3 className="text-white font-medium mb-2">Доступ ограничен</h3>
                    <p className="text-zinc-400 text-sm">
                      Для просмотра полной информации необходима верификация. Пожалуйста, свяжитесь с администрацией.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
