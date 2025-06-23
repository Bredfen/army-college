import { useState } from 'react'
import { Phone, MessageCircle, Mail, Clock, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { error } from 'console'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    form_type: 'Снизу страницы',
    date: ''
  })
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет обработка отправки формы
    emailjs.send(
      "service_v04hnlp", 
      "template_3cg14hn", 
      formData, 
      "SSI3o48WsgrHpmjX9")
    .then((res) => {
      if (res.status == 200){
        console.log('Форма отправлена:', formData)
        alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.')
        setFormData({ name: '', phone: '', message: '', form_type: 'bottom', date:''})
      }
    }).catch((error) => {
      console.error("Failed to sending email:", error);
      alert("Ошибка отправки формы!");
    })
    // Обработано
    
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let string_date = new Date().toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
        })
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      date: string_date
    })
  }

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Telegram",
      description: "Быстрая связь в мессенджере",
      value: "@perevodvuz",
      link: "https://t.me/perevodvuz",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Звонки и сообщения",
      value: "+7 926 080-89-83",
      link: "https://wa.me/79260808983",
      color: "bg-green-500 hover:bg-green-600"
    },
    // {
    //   icon: <Mail className="w-6 h-6" />,
    //   title: "Email",
    //   description: "Письменные консультации",
    //   value: "info@perevodvuz.ru",
    //   link: "mailto:info@perevodvuz.ru",
    //   color: "bg-purple-500 hover:bg-purple-600"
    // }
  ]

  return (
    <section className="py-16 bg-slate-800 text-white" id="targetSection">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Связаться с нами
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы готовы ответить на все ваши вопросы и помочь с переводом. 
            Время идёт — не откладывайте решение!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact methods */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Способы связи</h3>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${method.color} text-white p-6 rounded-lg transition-all hover:scale-105 shadow-lg`}
                >
                  <div className="flex items-center gap-4">
                    {method.icon}
                    <div>
                      <div className="font-semibold text-lg">{method.title}</div>
                      <div className="text-sm opacity-90 mb-1">{method.description}</div>
                      <div className="font-mono">{method.value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Work hours */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-orange-400" />
                <h4 className="text-xl font-semibold">Режим работы</h4>
              </div>
              <div className="space-y-2 text-gray-300">
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб-Вс: 10:00 - 18:00</div>
                <div className="text-orange-400 font-semibold">
                  До вручения дипломов осталось меньше двух недель! 
                  <br />Успей сохранить отсрочку. 

                </div>
              </div>
            </div>

            {/* Coverage */}
            <div className="bg-gray-700 p-6 rounded-lg mt-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <h4 className="text-xl font-semibold">География работы</h4>
              </div>
              <div className="text-gray-300">
                Работаем по всей России. Основные регионы:
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-gray-400">
                <div>• Москва и МО</div>
                <div>• Санкт-Петербург</div>
                <div>• Екатеринбург</div>
                <div>• Новосибирск</div>
                <div>• Казань</div>
                <div>• Нижний Новгород</div>
                <div>• Краснодар</div>
                <div>• И другие регионы</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Заказать консультацию
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Номер телефона *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Ваш вопрос (необязательно)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Опишите вашу ситуацию..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Отправить заявку
              </button>
            </form>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="text-sm text-yellow-800">
                <strong>⚠️ Внимание!</strong> До 20 июля осталось мало времени. 
                Чем раньше обратитесь — тем больше вариантов решения.
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              и политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
