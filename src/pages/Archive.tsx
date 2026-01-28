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
  },
  {
    id: "2",
    name: "Архив #2",
    nicknames: "Имена скоро появятся",
    period: "2017-2020",
    vkLinks: [],
  },
  {
    id: "3",
    name: "Архив #3",
    nicknames: "Имена скоро появятся",
    period: "2018-2021",
    vkLinks: [],
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
              <div className="mb-6">
                <h2 className="text-zinc-400 text-sm mb-2">Неймы</h2>
                <p className="text-white text-lg">{archive.nicknames}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-zinc-400 text-sm mb-2">Дата пребывания</h2>
                <p className="text-white text-lg">{archive.period}</p>
              </div>

              <div className="relative">
                <h2 className="text-white text-lg mb-4">Все страницы ВКонтакте</h2>
                
                {/* Blurred content */}
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
                    <div className="text-zinc-400 mb-2">...</div>
                    <div className="text-zinc-400 mb-2">Ещё {archive.vkLinks.length - 6} ссылок</div>
                  </div>

                  {/* Centered button overlay */}
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
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
