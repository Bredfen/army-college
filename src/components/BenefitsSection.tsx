import { Star, Clock, Shield, Users, FileCheck, Zap } from 'lucide-react'

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Быстро",
      description: "Оформление за 3-5 дней. Не нужно ждать месяцами."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Безопасно",
      description: "100% легальная процедура в рамках действующего законодательства."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-purple-500" />,
      title: "Документооборот",
      description: "Полное сопровождение всех документов и процедур."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Опыт",
      description: "Опыт работы более 3 лет, сотни решенных кейсов и рады предоставить отзывы клиентов с решением проблемы в точности аналогичной вашей ситуации."
    },
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: "Срочность",
      description: "Понимаем критичность сроков и работаем в экстренном режиме."
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: "Результат",
      description: "Гарантируем положительный результат или возврат средств. Если кейс стандартный – оплата производится только по результату, все консультации бесплатно."
    }
  ]

  const advantages = [
    "Сохранение отсрочки от армии на 1+ год",
    "Время на подготовку к поступлению в ВУЗ",
    "Возможность получить дополнительную специальность",
    "Спокойствие для всей семьи",
    "Сохранение планов"
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы специализируемся именно на решении вопросов отсрочки от армии через получение образование в аккредитованных учебных заведениях и знаем все тонкости законодательства и рады проконсультировать вас бесплатно.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* What you get */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Что вы получаете
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/images/success-family.png" 
                  alt="Счастливая семья" 
                  className="w-full rounded-xl shadow-md"
                />
              </div>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-500 rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Успешных переводов</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">3-5</div>
            <div className="text-gray-600">Дней на оформление</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">Легальность</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
