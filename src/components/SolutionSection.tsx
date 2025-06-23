import { CheckCircle, FileText, Clock, Shield } from 'lucide-react'

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const SolutionSection = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "Подбираем колледж",
      description: "Находим учебное заведение с нужной лицензией и подходящей специальностью"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      title: "Оформляем перевод",
      description: "Переводим выпускника колледжа в другой колледж на курс ниже, что согласно Федеральному закону №273 – сохраняет отсрочку от армии и отбивает повестку, даже если она уже вам вручена"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Консультируем по безопасному взаимодействию с военкоматом",
      description: "Формируем все необходимые документы и консультируем по взаимодействию с военкоматом"
    }
  ]

  const guarantees = [
    "100% легальность процедуры",
    "Соответствие всем требованиям закона",
    "Полное документальное сопровождение",
    "Гарантия результата"
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Наше решение: <span className="text-blue-600">Легальный перевод</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы знаем, как продлить отсрочку через перевод в другой колледж. 
            Это абсолютно законно и безопасно.
          </p>
        </div>

        {/* Solution image
        <div className="mb-16">
          <img 
            src="/images/legal-consultation.jpg" 
            alt="Юридическая консультация" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
          */}
        {/* Steps */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-800">
            Как мы работаем
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {index + 1}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h4>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline and guarantees */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-gray-800">Сроки работы</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-orange-600">3-5 дней</div>
                <div className="text-gray-600">Полное оформление перевода</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-green-600">Сразу</div>
                <div className="text-gray-600">Продление отсрочки от армии</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-blue-600">1+ год</div>
                <div className="text-gray-600">Сохраняется отсрочка от армии через обучение</div>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-800">Наши гарантии</h3>
            </div>
            
            <div className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{guarantee}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <div className="font-semibold text-green-800 mb-2">
                Важно!
              </div>
              <div className="text-green-700 text-sm">
                Все процедуры проводятся строго в соответствии с действующим законодательством РФ
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Не теряйте время - каждый день на счету!
            </h3>
            <p className="text-blue-100 mb-6">
              После вручения диплома колледжа отсрочка от службы в армии пропадет навсегда
            </p>
            <button onClick={() => scrollToSection('targetSection')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105">
              Получить консультацию сейчас
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
