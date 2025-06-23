import { Phone, MessageCircle, Mail, Shield, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ПереводВУЗ</h3>
            <p className="text-gray-400 mb-4">
              Профессиональные услуги по переводу студентов между учебными заведениями 
              для продления отсрочки от армии.
            </p>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <Shield className="w-4 h-4" />
              <span>100% легально и безопасно</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Наши услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• Перевод между колледжами</li>
              <li>• Юридическое сопровождение</li>
              <li>• Консультации по военкомату</li>
              <li>• Подбор учебного заведения</li>
              <li>• Оформление документов</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a 
                href="https://t.me/perevodvuz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>@perevodvuz</span>
              </a>
              
              <a 
                href="https://wa.me/79260808983" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+7 926 080-89-83</span>
              </a>
              
              {/* <a 
                href="mailto:info@perevodvuz.ru"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@perevodvuz.ru</span>
              </a> */}
            </div>
          </div>

          {/* Work hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Пн-Пт: 9:00-20:00</span>
              </div>
              <div className="ml-6">Сб-Вс: 10:00-18:00</div>
              <div className="text-orange-400 font-semibold text-sm">
                Экстренные консультации 24/7
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-red-900 rounded-lg">
              <div className="text-red-200 text-sm font-semibold">
                ⏰ До 20 июля осталось мало времени!
              </div>
              <div className="text-red-300 text-xs">
                Обращайтесь срочно
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 ПереводВУЗ. Все права защищены.
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mt-4 text-center">
            Услуги оказываются в соответствии с действующим законодательством РФ.
          </div>
        </div>
      </div>

      {/* Sticky call button for mobile */}
      <div className="fixed bottom-4 right-4 lg:hidden z-50">
        <a 
          href="tel:+79260808983"
          className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
