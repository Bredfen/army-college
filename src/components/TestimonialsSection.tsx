import { Quote, Star } from 'lucide-react'
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Анна Холжигитова",
      location: "Москва",
      text: "Огромное спасибо! Сын закончил колледж в июне, думали всё, теперь армия. Но ребята помогли с переводом всего за 4 дня. Сейчас продолжает учёбу и получает новую специальность. Очень довольны!",
      rating: 5,
      date: "Май 2024"
    },
    {
      name: "Игорь Ладыжчук",
      location: "Санкт-Петербург", 
      text: "Были в панике — диплом уже на руках, а сын не готов к армии. Нашли эту компанию через друзей. Всё сделали быстро и профессионально. Рекомендую всем родителям в похожей ситуации.",
      rating: 5,
      date: "Апрель 2024"
    },
    {
      name: "Мария Козлова",
      location: "Екатеринбург",
      text: "Долго искали легальный способ продлить отсрочку. Эти специалисты знают своё дело на 100%. Все документы оформили правильно, в военкомате вопросов не возникло. Спасибо за профессионализм!",
      rating: 5,
      date: "Март 2024"
    },
    {
      name: "Олег Беляев",
      location: "Новосибирск",
      text: "Сыну оставалось 2 недели до получения диплома. Думали уже поздно что-то предпринимать. Но ребята взялись и за 3 дня всё организовали. Теперь сын спокойно учится дальше. Очень благодарны!",
      rating: 5,
      date: "Июнь 2024"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Сотни семей уже воспользовались нашей услугой и остались довольны результатом
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex gap-1 mb-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Нам доверяют
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Семей помогли</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-gray-600">Года опыта</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Получить бесплатную консультацию
            </h3>
            <p className="text-blue-100 mb-6">
              Мы поможем вашей семье так же, как помогли сотням других
            </p>
            <button onClick={() => scrollToSection('targetSection')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
