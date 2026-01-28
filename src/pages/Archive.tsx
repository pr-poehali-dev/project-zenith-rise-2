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
    name: "Архив #3",
    nicknames: "Имена скоро появятся",
    period: "2018-2021",
    owner: null,
    communities: [],
    vkLinks: [],
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
    communities: ["vk.ru/iconaazadel", "vk.ru/yt.demonate"],
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
    communities: ["vk.ru/sekhmettt", "vk.ru/eireneee", "vk.ru/DirtyAlliance"],
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
    period: "Дата создания: 2020 год",
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
                <h2 className="text-zinc-400 text-sm mb-2">
                  {archive.id === "23" ? "Дата создания" : "Дата пребывания"}
                </h2>
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
                  <h2 className="text-white text-lg mb-4">
                    {archive.id === "10" ? "Социальные сети" : "Все страницы ВКонтакте"}
                  </h2>
                  
                  <div className="relative">
                    <div 
                      className="filter blur-[12px] select-none pointer-events-none"
                      style={{ 
                        WebkitUserSelect: "none",
                        MozUserSelect: "none",
                        msUserSelect: "none"
                      }}
                    >
                      {archive.vkLinks.slice(0, 6).map((link, index) => (
                        <div key={index} className="text-zinc-400 mb-2">
                          {link}
                        </div>
                      ))}
                      {archive.vkLinks.length > 6 && (
                        <>
                          <div className="text-zinc-400 mb-2">...</div>
                          <div className="text-zinc-400 mb-2">Ещё {archive.vkLinks.length - 6} ссылок</div>
                        </>
                      )}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      {!showVerificationError ? (
                        <button
                          onClick={handleShowArchive}
                          className="px-6 py-3 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors flex items-center gap-2"
                        >
                          <Lock className="w-4 h-4" />
                          Показать весь архив
                        </button>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 text-center max-w-md"
                        >
                          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-6 h-6 text-red-400" />
                          </div>
                          <p className="text-white text-lg font-medium mb-2">
                            Вы не верифицированы
                          </p>
                          <p className="text-zinc-400 text-sm">
                            Пожалуйста, пройдите верификацию для доступа к полному архиву
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {archive.archiveLinks.length > 0 && (
                <div className="relative">
                  <h2 className="text-white text-lg mb-4">Архив страницы</h2>
                  
                  <div className="relative">
                    <div 
                      className="filter blur-[12px] select-none pointer-events-none"
                      style={{ 
                        WebkitUserSelect: "none",
                        MozUserSelect: "none",
                        msUserSelect: "none"
                      }}
                    >
                      {archive.archiveLinks.map((link, index) => (
                        <div key={index} className="text-zinc-400 mb-2">
                          {link}
                        </div>
                      ))}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      {!showVerificationError ? (
                        <button
                          onClick={handleShowArchive}
                          className="px-6 py-3 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors flex items-center gap-2"
                        >
                          <Lock className="w-4 h-4" />
                          Показать весь архив
                        </button>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 text-center max-w-md"
                        >
                          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-6 h-6 text-red-400" />
                          </div>
                          <p className="text-white text-lg font-medium mb-2">
                            Вы не верифицированы
                          </p>
                          <p className="text-zinc-400 text-sm">
                            Пожалуйста, пройдите верификацию для доступа к полному архиву
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
