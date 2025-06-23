import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqData = [
    {
      question: "Это действительно легально?",
      answer: "Да, абсолютно легально. Мы работаем в рамках действующего законодательства РФ. Перевод между учебными заведениями — это право каждого студента, закреплённое в федеральном законе «Об образовании»."
    },
    {
      question: "Какие документы нужны для перевода?",
      answer: "Базовый пакет: паспорт, диплом о среднем профессиональном образовании, справка из военкомата. Полный список документов мы предоставим после консультации, так как он может варьироваться в зависимости от конкретной ситуации."
    },
    {
      question: "Сколько времени займёт процедура?",
      answer: "Обычно процедура занимает 3-5 рабочих дней. В экстренных случаях можем оформить быстрее. Главное — обратиться как можно раньше, пока есть время до выдачи диплома."
    },
    {
      question: "На сколько продлится отсрочка?",
      answer: "Отсрочка продлевается минимум на 1 год, а может и больше — в зависимости от выбранной программы обучения. Обычно это даёт достаточно времени для подготовки к поступлению в ВУЗ."
    },
    {
      question: "Что если в военкомате будут вопросы?",
      answer: "Мы полностью консультируем по всем вопросам взаимодействия с военкоматом. Предоставляем все необходимые справки и документы. У нас есть большой опыт работы с военкоматами по всей России."
    },
    {
      question: "Можно ли оформить перевод после получения диплома?",
      answer: "Теоретически можно, но это значительно сложнее и дороже. Лучше всего обращаться за 1-2 недели до получения диплома. После получения диплома процедура усложняется."
    },
    {
      question: "Гарантируете ли вы результат?",
      answer: "Да, мы гарантируем положительный результат при соблюдении всех условий с нашей стороны. В случае невозможности оформления перевода (что крайне редко) — возвращаем деньги."
    },
    {
      question: "Работаете ли вы в регионах?",
      answer: "Да, мы работаем по всей России. У нас есть партнёры и проверенные колледжи в большинстве регионов. Всё оформление можем провести дистанционно."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Часто задаваемые вопросы
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о нашей услуге
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'shadow-xl' : ''
                }`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Остались вопросы?
            </h3>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами для получения персональной консультации
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/perevodvuz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Telegram
              </a>
              
              <a 
                href="https://wa.me/79260808983" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                WhatsApp
              </a>
              
              <button onClick={() => scrollToSection('targetSection')} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
