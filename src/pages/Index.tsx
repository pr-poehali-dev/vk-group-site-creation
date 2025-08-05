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
              <Icon name="Hammer" className="text-craft-brown" size={24} />
              <h1 className="text-xl font-merriweather font-bold text-craft-brown">
                Столярка45
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
                Мастерская
                <span className="block text-craft-orange">качественной мебели</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Создаем уникальную мебель из натурального дерева по индивидуальным проектам. 
                Более 15 лет опыта в столярном деле.
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
                src="/img/adec8494-a8f1-4e17-b7b6-241371d442a2.jpg" 
                alt="Столярная мастерская" 
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
              Полный цикл изготовления мебели от эскиза до установки
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Sofa",
                title: "Мебель на заказ",
                description: "Кухни, шкафы, столы, стулья по индивидуальным размерам"
              },
              {
                icon: "Home",
                title: "Встроенная мебель",
                description: "Гардеробные, библиотеки, встроенные шкафы"
              },
              {
                icon: "Drill",
                title: "Реставрация",
                description: "Восстановление и ремонт антикварной мебели"
              },
              {
                icon: "Ruler",
                title: "Замеры и дизайн",
                description: "Бесплатный выезд дизайнера и составление проекта"
              },
              {
                icon: "Truck",
                title: "Доставка и сборка",
                description: "Доставляем и устанавливаем мебель по всему городу"
              },
              {
                icon: "Settings",
                title: "Фурнитура",
                description: "Качественная фурнитура от ведущих производителей"
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
                src="/img/4bbe6c53-4f9a-42ab-8c72-8cc994e43b32.jpg"
                alt="Мастер за работой" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-merriweather font-bold text-craft-brown mb-6">
                О нашей мастерской
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Более 15 лет мы создаем качественную мебель из натурального дерева. 
                Наша команда состоит из опытных мастеров, которые используют как 
                традиционные методы столярного дела, так и современные технологии.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Мы работаем только с проверенными поставщиками древесины и 
                гарантируем долговечность каждого изделия. Каждый проект уникален 
                и создается с учетом пожеланий клиента.
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
                  <div className="text-gray-600">натуральное дерево</div>
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
                text: "Заказывали кухню. Качество превзошло все ожидания! Мастера очень профессиональные, все сделали точно в срок."
              },
              {
                name: "Сергей Иванов", 
                rating: 5,
                text: "Делали встроенный шкаф в спальню. Отличная работа, все продумано до мелочей. Рекомендую!"
              },
              {
                name: "Елена Смирнова",
                rating: 5,
                text: "Реставрировали старый комод. Вернули ему вторую жизнь! Очень довольны результатом."
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
                      <p className="text-gray-700">info@stolyrka45.ru</p>
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
                      <p className="text-gray-700">г. Курган, ул. Мастерская, 45</p>
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
                <Icon name="Hammer" size={24} />
                <h3 className="text-xl font-merriweather font-bold">Столярка45</h3>
              </div>
              <p className="text-wood-light mb-4">
                Качественная мебель из натурального дерева по индивидуальным проектам
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-wood-light">
                <li>Мебель на заказ</li>
                <li>Встроенная мебель</li>
                <li>Реставрация</li>
                <li>Дизайн и замеры</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-wood-light">
                <li>+7 (123) 456-78-90</li>
                <li>info@stolyrka45.ru</li>
                <li>г. Курган, ул. Мастерская, 45</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-wood-medium mt-8 pt-8 text-center text-wood-light">
            <p>&copy; 2024 Столярка45. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;