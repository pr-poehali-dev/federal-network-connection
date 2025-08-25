import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="Building2" className="text-primary" size={28} />
            </div>
            <span className="text-2xl font-semibold text-secondary tracking-tight">Seti-Pro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#franchise" className="text-foreground/80 hover:text-primary transition-colors font-medium">Франшиза</a>
            <a href="#advantages" className="text-foreground/80 hover:text-primary transition-colors font-medium">Преимущества</a>
            <a href="#contacts" className="text-foreground/80 hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 shadow-sm" onClick={() => window.location.href = 'tel:+79002530077'}>
            Консультация
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted/30 to-primary/5 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Icon name="CheckCircle" className="mr-2" size={16} />
                Профессиональные решения для бизнеса
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-secondary leading-[1.1] mb-6">
                Подключение к федеральным торговым сетям
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Согласовываем участки и готовые помещения под федеральные сети: Магнит, Пятерочка, Чижик, Перекресток. 
                Минимальная площадь от 400 кв.м. Полное соответствие требованиям сетей.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg font-semibold px-8 py-4" onClick={() => window.location.href = 'tel:+79002530077'}>
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-secondary/30 text-secondary hover:bg-secondary/5 font-semibold px-8 py-4" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="FileText" className="mr-2" size={20} />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="/img/56d11a3d-8e89-4220-b460-950a1a1351ce.jpg"
                  alt="Профессиональная команда в офисе"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Icon name="Settings" className="mr-2" size={16} />
              Наши услуги
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">Профессиональные решения</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Полный спектр услуг по согласованию участков и помещений от 400 кв.м под федеральные торговые сети с гарантией результата
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-professional transition-all duration-300 hover:-translate-y-1 bg-white border-0">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Building" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-xl font-semibold text-secondary mb-3">Согласование участков</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  Подготовка и согласование земельных участков под строительство торговых объектов от 400 кв.м
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-professional transition-all duration-300 hover:-translate-y-1 bg-white border-0">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Network" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-xl font-semibold text-secondary mb-3">Согласование помещений</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  Адаптация готовых торговых помещений от 400 кв.м под требования федеральных сетей
                </CardDescription>
              </CardHeader>
            </Card>
            

            <Card className="hover:shadow-professional transition-all duration-300 hover:-translate-y-1 bg-white border-0">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="FileCheck" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-xl font-semibold text-secondary mb-3">Строительство (дополнительно)</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  При необходимости — полный цикл строительства торговых объектов от 400 кв.м с соблюдением стандартов сетей
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-professional transition-all duration-300 hover:-translate-y-1 bg-white border-0">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <CardTitle>Работа с инвесторами</CardTitle>
                <CardDescription>
                  Помощь собственникам участков и помещений от 400 кв.м в подключении к федеральным сетям
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-professional transition-all duration-300 hover:-translate-y-1 bg-white border-0">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="ShieldCheck" className="text-primary" size={32} />
                </div>
                <CardTitle>Долгосрочная аренда</CardTitle>
                <CardDescription>
                  Заключение договоров аренды на 10-15 лет с федеральными сетями для объектов от 400 кв.м
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="py-24 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-600 font-medium text-sm mb-6">
                  <span className="mr-2">🛍</span>
                  Франшиза "Магнит"
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                  Хочешь свой бизнес с «Магнит»?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Сейчас есть возможность открыть магазин под брендом крупнейшей сети России по модели обратной франшизы.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500/10 rounded-lg p-1 mt-1">
                      <Icon name="Check" className="text-green-600" size={16} />
                    </div>
                    <p className="text-lg">Форматы от мини-киоска до полноценного «Магнита у дома»</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500/10 rounded-lg p-1 mt-1">
                      <Icon name="Check" className="text-green-600" size={16} />
                    </div>
                    <p className="text-lg">Инвестиции от 2,5 млн руб.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500/10 rounded-lg p-1 mt-1">
                      <Icon name="Check" className="text-green-600" size={16} />
                    </div>
                    <p className="text-lg">Агентское вознаграждение до 38%</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500/10 rounded-lg p-1 mt-1">
                      <Icon name="Check" className="text-green-600" size={16} />
                    </div>
                    <p className="text-lg">«Магнит» берёт на себя товарные риски, логистику и бренд</p>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📌</span>
                    <div>
                      <p className="font-semibold text-secondary mb-2">Мы помогаем оформить и заключить договор франшизы с «Магнит».</p>
                      <p className="text-muted-foreground">Твой бизнес — с поддержкой сильного игрока.</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white shadow-lg font-semibold px-8 py-4"
                  onClick={() => window.location.href = 'tel:+79002530077'}
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  Узнать подробности франшизы
                </Button>
              </div>
              
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src="/img/81e9192e-1a6b-4fbe-bc8a-e6ff88915eff.jpg"
                    alt="Современный магазин Магнит"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Icon name="Award" className="mr-2" size={16} />
              Наши преимущества
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">Почему выбирают именно нас</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Наш опыт и профессионализм гарантируют успешное подключение к федеральным сетям и долгосрочное получение дохода
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-professional transition-all duration-300">
                <Icon name="Target" className="text-primary" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Опыт работы</h3>
              <p className="text-muted-foreground leading-relaxed">Многолетний опыт работы с крупнейшими федеральными сетями</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-professional transition-all duration-300">
                <Icon name="Clock" className="text-primary" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Быстрая реализация</h3>
              <p className="text-muted-foreground leading-relaxed">Оптимальные сроки строительства и оформления документов</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-professional transition-all duration-300">
                <Icon name="DollarSign" className="text-primary" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Выгодные условия</h3>
              <p className="text-muted-foreground leading-relaxed">Конкурентоспособные цены и гибкие условия сотрудничества</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-professional transition-all duration-300">
                <Icon name="Award" className="text-primary" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Гарантированный результат</h3>
              <p className="text-muted-foreground leading-relaxed">100% соответствие требованиям и успешное подключение к сетям</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Icon name="MessageCircle" className="mr-2" size={16} />
                Контакты
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Готовы обсудить ваш проект и предложить оптимальные решения для вашего бизнеса
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <Card className="p-8 bg-white border-0 shadow-professional">
                <h3 className="text-2xl font-semibold text-secondary mb-8">Контактная информация</h3>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="bg-primary/10 rounded-2xl p-4">
                      <Icon name="Phone" className="text-primary" size={28} />
                    </div>
                    <div>
                      <p className="font-medium text-secondary/80 text-sm mb-1">Телефон</p>
                      <a href="tel:+79002530077" className="text-primary hover:underline text-xl font-semibold">
                        +7 (900) 253-00-77
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="bg-primary/10 rounded-2xl p-4">
                      <Icon name="Mail" className="text-primary" size={28} />
                    </div>
                    <div>
                      <p className="font-medium text-secondary/80 text-sm mb-1">Электронная почта</p>
                      <a href="mailto:biznes0308@mail.ru" className="text-primary hover:underline text-xl font-semibold">
                        biznes0308@mail.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="bg-primary/10 rounded-2xl p-4">
                      <Icon name="MapPin" className="text-primary" size={28} />
                    </div>
                    <div>
                      <p className="font-medium text-secondary/80 text-sm mb-1">Регионы работы</p>
                      <p className="text-secondary text-lg font-medium">Краснодарский край, Ростовская область, Москва</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 bg-white border-0 shadow-professional">
                <h3 className="text-2xl font-semibold text-secondary mb-8">Наши партнеры</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-muted/20 rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="Store" className="text-primary" size={32} />
                    </div>
                    <p className="font-semibold text-secondary">Магнит</p>
                  </div>
                  <div className="bg-muted/20 rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="ShoppingCart" className="text-primary" size={32} />
                    </div>
                    <p className="font-semibold text-secondary">Пятерочка</p>
                  </div>
                  <div className="bg-muted/20 rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="Building2" className="text-primary" size={32} />
                    </div>
                    <p className="font-semibold text-secondary">Чижик</p>
                  </div>
                  <div className="bg-muted/20 rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="ShoppingBag" className="text-primary" size={32} />
                    </div>
                    <p className="font-semibold text-secondary">Перекресток</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Свяжитесь с нами сегодня и получите персональное предложение для вашего проекта по подключению к федеральным сетям
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg font-semibold px-8 py-4"
              onClick={() => window.location.href = 'tel:+79002530077'}
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить сейчас
            </Button>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg font-semibold px-8 py-4"
              onClick={() => window.location.href = 'mailto:biznes0308@mail.ru'}
            >
              <Icon name="Mail" className="mr-2" size={20} />
              Написать email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" className="text-primary" size={32} />
                <span className="text-2xl font-bold">Seti-Pro</span>
              </div>
              <p className="text-secondary-foreground/80">
                Профессиональное строительство и подключение к федеральным торговым сетям по всей России
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>Строительство под ключ</li>
                <li>Подключение к сетям</li>
                <li>Анализ помещений</li>
                <li>Работа с инвесторами</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-secondary-foreground/80">
                <p>+7 (900) 253-00-77</p>
                <p>biznes0308@mail.ru</p>
                <p>Краснодарский край, Ростовская область, Москва</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2024 Seti-Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}