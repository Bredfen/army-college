import { useState, useEffect } from 'react'
import { Clock, AlertTriangle, Shield, BookOpen } from 'lucide-react'

const ProblemSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-07-02T00:00:00')
    
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const problems = [
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "По ФЗ №273 отсрочка больше не действует",
      description: "После получения диплома колледжа отсрочка от армии автоматически прекращается"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Автоматический призыв в армию",
      description: "Сразу после выдачи диплома военкомат направляет повестку на срочную службу в армии"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-red-500" />,
      title: "Поздно поступать в ВУЗ",
      description: "Согласно Федеральному закону №273 \«Об образовании в Российской Федерации\», даже поступив в вуз после колледжа вы получите повестку в армию и не сохраняете отсрочку "
    }
  ]

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        {/* Timer */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Время истекает!
            </h2>
          </div>
          
          <p className="text-xl text-gray-600 mb-8">
            До выдачи дипломов осталось:
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-lg min-w-[100px]">
              <div className="text-3xl font-bold text-red-600">{timeLeft.days}</div>
              <div className="text-sm text-gray-600">дней</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg min-w-[100px]">
              <div className="text-3xl font-bold text-red-600">{timeLeft.hours}</div>
              <div className="text-sm text-gray-600">часов</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg min-w-[100px]">
              <div className="text-3xl font-bold text-red-600">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-600">минут</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg min-w-[100px]">
              <div className="text-3xl font-bold text-red-600">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-600">секунд</div>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            (выдача диплома колледжа = завершение отсрочки от армии по образованию по ФЗ №73)
          </p>
          
        </div>

        {/* Problems */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-800">
            Что происходит после окончания колледжа?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  {problem.icon}
                  <h4 className="text-lg font-semibold text-gray-800">
                    {problem.title}
                  </h4>
                </div>
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Visual comparison */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Что происходит после получения диплома колледжа и почему?
            </h3>
            <p className="text-xl text-gray-600 mb-8 text-center">
            Согласно Федеральному закону №273 – отсрочка от армии по окончанию колледжа сгорает навсегда.
          </p>

            {/*<div className="grid md:grid-cols-2 gap-8">
              
              <div className="text-center">
                <div className="bg-green-100 rounded-xl p-6 mb-4">
                  <h4 className="text-xl font-semibold text-green-800 mb-4">БЫЛО (до изменений закона)</h4>
                  <div className="space-y-3 text-green-700">
                    <div>✓ Отсрочка до 27 лет</div>
                    <div>✓ Время на поступление в ВУЗ</div>
                    <div>✓ Возможность планировать будущее</div>
                  </div>
                </div>
              </div>
              
              
              <div className="text-center">
                <div className="bg-red-100 rounded-xl p-6 mb-4">
                  <h4 className="text-xl font-semibold text-red-800 mb-4">СТАЛО (сейчас)</h4>
                  <div className="space-y-3 text-red-700">
                    <div>✗ Диплом = сразу в армию</div>
                    <div>✗ Нет времени на поступление</div>
                    <div>✗ Нарушенные планы семьи</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
