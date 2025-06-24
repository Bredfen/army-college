import { useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { error } from 'console'
const isLocal = window.location.hostname === 'localhost'

const API_URL = isLocal
  ? 'http://localhost:3001'
  : 'https://kollegearmy.online'

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    form_type: 'Сверху страницы', 
    date:''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет обработка отправки формы
    fetch(`${API_URL}/headform`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formData
  })
}).then((res) => {
      if (res.status == 200){
        console.log('Форма отправлена:', formData)
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', phone: '', form_type: 'bottom', date:''})
      }
    }).catch((error) => {
      console.error("Failed to sending email:", error);
      alert("Ошибка отправки формы!\nВоспользуйтесь другими источниками связи: WhatsApp или Telegram.");
    });
    //emailлjs
    // emailjs.send(
    //   "service_v04hnlp", 
    //   "template_trcfeeo", 
    //   formData, 
    //   "SSI3o48WsgrHpmjX9")
    // .then((res) => {
    //   if (res.status == 200){
    //     console.log('Форма отправлена:', formData)
    // alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    // setFormData({ name: '', phone: '', form_type: 'bottom', date:''})
    //   }
    // }).catch((error) => {
    //   console.error("Failed to sending email:", error);
    //   alert("Ошибка отправки формы!\nВоспользуйтесь другими источниками связи: WhatsApp или Telegram.");
    // })
    
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="/images/photo_2025-06-23_15-56-25.jpg" 
          alt="Студент с дипломом" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              После колледжа — <span className="text-orange-500">сразу в армию?</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl mb-6 text-gray-200 font-medium">
              Продлим отсрочку через перевод в колледж. <span className="text-orange-400">Легально и быстро.</span>
            </h2>
            
            <p className="text-lg mb-8 text-gray-300">
              Если вашему ребёнку выдают диплом выпускника колледжа – он сразу потеряет отсрочку от армии по образованию навсегда!<br/> Но ещё не поздно.
            </p>

            <div className="bg-orange-500 text-white p-6 rounded-xl mb-8 shadow-lg">
              <div className="text-3xl font-bold mb-2">25,000 ₽</div>
              <div className="text-lg">по факту перевода в другой колледж с сохранением отсрочки</div>
            </div>

            {/* Quick contacts */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://t.me/perevodvuz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <MessageCircle size={20} />
                Telegram
              </a>
              
              <a 
                href="https://wa.me/79260808983" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <Phone size={20} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Получить консультацию
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Получить консультацию
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
