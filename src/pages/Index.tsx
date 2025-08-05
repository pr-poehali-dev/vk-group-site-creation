import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-craft-beige font-open-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Home" className="text-craft-brown" size={24} />
              <h1 className="text-xl font-merriweather font-bold text-craft-brown">
                СтройБани45
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-craft-brown hover:text-craft-orange transition-colors">Главная</a>
              <a href="#services" className="text-craft-brown hover:text-craft-orange transition-colors">Услуги</a>
              <a href="#about" className="text-craft-brown hover:text-craft-orange transition-colors">О нас</a>
              <a href="#reviews" className="text-craft-brown hover:text-craft-orange transition-colors">Отзывы</a>
              <a href="#contacts" className="text-craft-brown hover:text-craft-orange transition-colors">Контакты</a>
            </div>
            <Button className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-craft-beige to-craft-cream py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-merriweather font-bold text-craft-brown mb-6">
                Строительство
                <span className="block text-craft-orange">бань и беседок</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Строим качественные бани и уютные беседки из натурального дерева 
                по индивидуальным проектам. Более 15 лет опыта в деревянном строительстве.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-craft-brown hover:bg-wood-darker text-white">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать звонок
                </Button>
                <Button variant="outline" size="lg" className="border-craft-brown text-craft-brown hover:bg-craft-brown hover:text-white">
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/2fdf40e2-d28d-483b-92c7-152e4cf300b3.jpg" 
                alt="Современная деревянная баня" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" className="text-yellow-500 fill-current" size={20} />
                  <span className="font-semibold text-craft-brown">4.9/5</span>
                  <span className="text-gray-600 text-sm">отзывов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-merriweather font-bold text-craft-brown mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный цикл строительства от проекта до сдачи "под ключ"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Home",
                title: "Строительство бань",
                description: "Финские сауны, русские бани, хаммамы по индивидуальным проектам"
              },
              {
                icon: "TreePine",
                title: "Беседки и навесы",
                description: "Открытые и закрытые беседки, перголы, навесы для отдыха"
              },
              {
                icon: "Thermometer",
                title: "Банные печи",
                description: "Установка и обслуживание дровяных и электрических печей"
              },
              {
                icon: "Ruler",
                title: "Проектирование",
                description: "Бесплатный выезд архитектора и создание 3D-проекта"
              },
              {
                icon: "Truck",
                title: "Строительство под ключ",
                description: "Полный цикл работ от фундамента до внутренней отделки"
              },
              {
                icon: "Wrench",
                title: "Коммуникации",
                description: "Подключение электричества, водоснабжения, канализации"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-craft-beige">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-craft-beige rounded-full w-fit">
                    <Icon name={service.icon} className="text-craft-brown" size={24} />
                  </div>
                  <CardTitle className="text-craft-brown font-merriweather">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-craft-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/e5355506-634d-4579-8dc7-7a889ca783b0.jpg"
                alt="Красивая деревянная беседка" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-merriweather font-bold text-craft-brown mb-6">
                О нашей компании
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Более 15 лет мы строим качественные бани и беседки из натурального дерева. 
                Наша команда состоит из опытных строителей, которые используют как 
                традиционные технологии деревянного зодчества, так и современные материалы.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Мы работаем только с проверенными поставщиками древесины премиум-класса и 
                гарантируем долговечность каждой постройки. Каждый проект уникален 
                и создается с учетом ландшафта и пожеланий заказчика.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-craft-orange mb-2">15+</div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-craft-orange mb-2">500+</div>
                  <div className="text-gray-600">проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-craft-orange mb-2">100%</div>
                  <div className="text-gray-600">экологичные материалы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-craft-orange mb-2">2 года</div>
                  <div className="text-gray-600">гарантии</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-merriweather font-bold text-craft-brown mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-lg text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                rating: 5,
                text: "Построили прекрасную баню на участке. Качество работ превзошло все ожидания! Строители очень профессиональные, все сделали точно в срок."
              },
              {
                name: "Сергей Иванов", 
                rating: 5,
                text: "Делали беседку с мангальной зоной. Отличная работа, все продумано до мелочей. Теперь это любимое место для семейных посиделок!"
              },
              {
                name: "Елена Смирнова",
                rating: 5,
                text: "Построили финскую сауну с комнатой отдыха. Получилось очень уютно и красиво! Очень довольны результатом."
              }
            ].map((review, index) => (
              <Card key={index} className="border-craft-beige">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-craft-brown">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-craft-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-merriweather font-bold text-craft-brown mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-gray-600">
              Готовы обсудить ваш проект
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-craft-beige">
                <CardHeader>
                  <CardTitle className="text-craft-brown font-merriweather">
                    Оставить заявку
                  </CardTitle>
                  <CardDescription>
                    Опишите ваш проект, и мы свяжемся с вами
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                  <Input placeholder="Email" />
                  <Textarea placeholder="Описание проекта" rows={4} />
                  <Button className="w-full bg-craft-brown hover:bg-wood-darker">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-craft-beige">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-craft-brown rounded-full">
                      <Icon name="Phone" className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-craft-brown mb-1">Телефон</h3>
                      <p className="text-gray-700">+7 (123) 456-78-90</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-craft-beige">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-craft-brown rounded-full">
                      <Icon name="Mail" className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-craft-brown mb-1">Email</h3>
                      <p className="text-gray-700">info@stroybani45.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-craft-beige">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-craft-brown rounded-full">
                      <Icon name="MapPin" className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-craft-brown mb-1">Адрес</h3>
                      <p className="text-gray-700">г. Курган, ул. Строительная, 45</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-craft-beige">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-craft-brown rounded-full">
                      <Icon name="Clock" className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-craft-brown mb-1">Режим работы</h3>
                      <p className="text-gray-700">Пн-Пт: 9:00-18:00<br/>Сб: 10:00-16:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-craft-brown text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" size={24} />
                <h3 className="text-xl font-merriweather font-bold">СтройБани45</h3>
              </div>
              <p className="text-wood-light mb-4">
                Качественные бани и беседки из натурального дерева по индивидуальным проектам
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-wood-light">
                <li>Строительство бань</li>
                <li>Беседки и навесы</li>
                <li>Банные печи</li>
                <li>Проектирование</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-wood-light">
                <li>+7 (123) 456-78-90</li>
                <li>info@stroybani45.ru</li>
                <li>г. Курган, ул. Строительная, 45</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-wood-medium mt-8 pt-8 text-center text-wood-light">
            <p>&copy; 2024 СтройБани45. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;