import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Geometric Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(234,179,8,0.1),rgba(0,0,0,0))]"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-400/30 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-gold-400/20 sticky top-0">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl shadow-gold">
              <Icon name="Building2" className="text-black" size={32} />
            </div>
            <span className="text-3xl font-serif font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent tracking-tight">Seti-Pro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-white hover:text-gold-400 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 after:transition-all hover:after:w-full">Услуги</a>
            <a href="#franchise" className="text-white hover:text-gold-400 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 after:transition-all hover:after:w-full">Франшиза</a>
            <a href="#advantages" className="text-white hover:text-gold-400 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 after:transition-all hover:after:w-full">Преимущества</a>
            <a href="#contacts" className="text-white hover:text-gold-400 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 after:transition-all hover:after:w-full">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-black font-semibold shadow-gold border border-gold-400/50" onClick={() => window.location.href = 'tel:+79002530077'}>
            Консультация
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-32 lg:py-40">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-gold-500/10 border border-gold-400/30 text-gold-400 font-medium text-sm mb-8">
                <Icon name="CheckCircle" className="mr-2" size={16} />
                Профессиональные решения для бизнеса
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent leading-[1.1] mb-8">
                Подключение к федеральным торговым сетям
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Строим торговые площади под требования сетей и сопровождаем проект от согласований до открытия.
              </p>
              <div className="flex flex-col gap-6">
                <Button size="lg" className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-black font-bold shadow-premium px-10 py-5 text-lg" onClick={() => window.location.href = 'tel:+79002530077'}>
                  <Icon name="Calculator" className="mr-3" size={20} />
                  Узнать, как запустить магазин на своём участке
                </Button>
              <p className="text-sm text-gray-400">
                Бесплатный предварительный расчёт окупаемости по телефону или email
              </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gold-400/30">
                <img
                  src="/img/338e42f1-5087-44fe-abd0-809427009670.jpg"
                  alt="Современное торговое помещение"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/40 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gold-400 mb-2">Премиум локации</h3>
                    <p className="text-gray-300">Коммерческая недвижимость бизнес-класса</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-gold-500/10 border border-gold-400/30 text-gold-400 font-medium text-sm mb-8">
              <Icon name="Settings" className="mr-2" size={16} />
              Наши услуги
            </div>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent mb-8">Профессиональные решения</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Полный спектр услуг по согласованию участков и помещений от 400 кв.м под федеральные торговые сети
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 hover:shadow-gold group">
              <CardHeader className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <Icon name="Building" className="text-gold-400" size={36} />
                </div>
                <CardTitle className="text-2xl font-bold text-gold-400 mb-4">Согласование участков</CardTitle>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  Подготовка и согласование земельных участков под строительство торговых объектов от 400 кв.м
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 hover:shadow-gold group">
              <CardHeader className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <Icon name="Network" className="text-gold-400" size={36} />
                </div>
                <CardTitle className="text-2xl font-bold text-gold-400 mb-4">Согласование помещений</CardTitle>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  Адаптация готовых торговых помещений от 400 кв.м под требования федеральных сетей
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 hover:shadow-gold group">
              <CardHeader className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <Icon name="FileCheck" className="text-gold-400" size={36} />
                </div>
                <CardTitle className="text-2xl font-bold text-gold-400 mb-4">Строительство (дополнительно)</CardTitle>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  При необходимости — полный цикл строительства торговых объектов от 400 кв.м с соблюдением стандартов сетей
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 hover:shadow-gold group">
              <CardHeader className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <Icon name="Users" className="text-gold-400" size={36} />
                </div>
                <CardTitle className="text-2xl font-bold text-gold-400 mb-4">Работа с инвесторами</CardTitle>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  Помощь собственникам участков и помещений от 400 кв.м в подключении к федеральным сетям
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 hover:shadow-gold group">
              <CardHeader className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <Icon name="ShieldCheck" className="text-gold-400" size={36} />
                </div>
                <CardTitle className="text-2xl font-bold text-gold-400 mb-4">Долгосрочная аренда</CardTitle>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  Заключение договоров аренды на 10-15 лет с федеральными сетями для объектов от 400 кв.м
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="relative z-10 py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-gold-500/10 border border-gold-400/30 text-gold-400 font-medium text-sm mb-8">
                  <span className="mr-2">🛍</span>
                  Франшиза "Магнит"
                </div>
                <h2 className="text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent mb-8">
                  Хотите стабильный доход от федеральной сети?
                </h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Мы строим объект под ключ под требования сети и сопровождаем все согласования. Вы получаете готовый к аренде бизнес.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-xl p-2 mt-1">
                      <Icon name="Calculator" className="text-gold-400" size={20} />
                    </div>
                    <p className="text-lg text-gray-300">Для формата Чижик, площадь 400 м² — ориентировочная чистая прибыль около 400 000 ₽ в месяц</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-xl p-2 mt-1">
                      <Icon name="Clock" className="text-gold-400" size={20} />
                    </div>
                    <p className="text-lg text-gray-300">Окупаемость строительства при полном запуске — в среднем 5–6 лет</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-xl p-2 mt-1">
                      <Icon name="Shield" className="text-gold-400" size={20} />
                    </div>
                    <p className="text-lg text-gray-300">Полное юридическое и техническое сопровождение на всех этапах</p>
                  </div>

                </div>
                
                <div className="bg-gradient-to-br from-gold-400/5 to-gold-600/5 border border-gold-400/30 rounded-3xl p-8 mb-10">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">📌</span>
                    <div>
                      <p className="font-bold text-gold-400 mb-3 text-lg">Мы помогаем оформить и заключить договор франшизы с «Магнит».</p>
                      <p className="text-gray-300 text-lg">Твой бизнес — с поддержкой сильного игрока.</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-black font-bold shadow-premium px-10 py-5 text-lg"
                  onClick={() => window.location.href = 'tel:+79002530077'}
                >
                  <Icon name="Calculator" className="mr-3" size={20} />
                  Получить расчёт для моего участка
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-premium border border-gold-400/30">
                  <img
                    src="/img/5c18880c-20c4-4aec-ad08-6bb94d1592a1.jpg"
                    alt="Деловые документы франшизы"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="relative z-10 py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
          <div className="absolute top-20 right-20 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-gold-500/10 border border-gold-400/30 text-gold-400 font-medium text-sm mb-8">
              <Icon name="TrendingUp" className="mr-2" size={16} />
              Для инвесторов
            </div>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent mb-8">
              Инвестиции под федеральные сети
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Проекты под ключ с понятной моделью дохода
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-gold-400/10 to-gold-600/10 border border-gold-400/30 rounded-2xl p-8">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent mb-2">
                    от 50 млн ₽
                  </div>
                  <p className="text-gray-400">Минимальный вход</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-gold-400/10 to-gold-600/10 border border-gold-400/30 rounded-2xl p-8">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent mb-2">
                    5-6 лет
                  </div>
                  <p className="text-gray-400">Окупаемость проекта</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-gold-400/10 to-gold-600/10 border border-gold-400/30 rounded-2xl p-8">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent mb-2">
                    Под ключ
                  </div>
                  <p className="text-gray-400">Строительство объекта</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gold-400/20 rounded-3xl p-10 text-center">
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Мы строим и передаём объект под требования сети; арендатор обеспечивает стабильный денежный поток
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-black font-bold shadow-premium px-10 py-5 text-lg"
                onClick={() => window.location.href = 'tel:+79002530077'}
              >
                <Icon name="MessageSquare" className="mr-3" size={20} />
                Обсудить условия инвестирования
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="relative z-10 py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-gold-500/10 border border-gold-400/30 text-gold-400 font-medium text-sm mb-8">
              <Icon name="Star" className="mr-2" size={16} />
              Наши преимущества
            </div>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent mb-8">Почему выбирают нас</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Профессиональная работа с федеральными сетями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 hover:shadow-gold group">
              <CardHeader className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <Icon name="Trophy" className="text-gold-400" size={36} />
                </div>
                <CardTitle className="text-2xl font-bold text-gold-400 mb-4">Профессиональный подход</CardTitle>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  Знаем все требования и особенности согласований с федеральными сетями.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 hover:shadow-gold group">
              <CardHeader className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <Icon name="CheckCircle2" className="text-gold-400" size={36} />
                </div>
                <CardTitle className="text-2xl font-bold text-gold-400 mb-4">Комплексное решение</CardTitle>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  Полное сопровождение согласования участков и помещений от 400 кв.м на всех этапах.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 hover:shadow-gold group">
              <CardHeader className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <Icon name="Clock" className="text-gold-400" size={36} />
                </div>
                <CardTitle className="text-2xl font-bold text-gold-400 mb-4">Быстрые сроки</CardTitle>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  Согласование участков и помещений от 400 кв.м в течение 5-10 дней с момента подачи документов.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 hover:shadow-gold group">
              <CardHeader className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <Icon name="Handshake" className="text-gold-400" size={36} />
                </div>
                <CardTitle className="text-2xl font-bold text-gold-400 mb-4">Прямые контракты с сетями</CardTitle>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  Работаем напрямую с федеральными сетями без посредников и переплат.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 hover:shadow-gold group">
              <CardHeader className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <Icon name="Shield" className="text-gold-400" size={36} />
                </div>
                <CardTitle className="text-2xl font-bold text-gold-400 mb-4">Полное сопровождение</CardTitle>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  Ведем проект от анализа участка до подписания арендного договора на 10-15 лет.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 hover:border-gold-400/40 transition-all duration-500 hover:shadow-gold group">
              <CardHeader className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  <Icon name="Target" className="text-gold-400" size={36} />
                </div>
                <CardTitle className="text-2xl font-bold text-gold-400 mb-4">Индивидуальный подход</CardTitle>
                <CardDescription className="text-lg text-gray-300 leading-relaxed">
                  Каждый проект уникален. Разрабатываем стратегию под ваш участок или помещение от 400 кв.м.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-gold-500/10 border border-gold-400/30 text-gold-400 font-medium text-sm mb-8">
              <Icon name="Settings" className="mr-2" size={16} />
              Наш процесс
            </div>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent mb-8">
              Как мы работаем
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-3xl p-8 mb-6 relative">
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">1</div>
                  <Icon name="Search" className="text-gold-400 mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold text-white mb-3">Анализ участка</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Анализ участка и согласование с сетью</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-3xl p-8 mb-6 relative">
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">2</div>
                  <Icon name="FileText" className="text-gold-400 mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold text-white mb-3">Проектирование</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Проектирование и получение разрешений</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-3xl p-8 mb-6 relative">
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">3</div>
                  <Icon name="Hammer" className="text-gold-400 mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold text-white mb-3">Строительство</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Строительство и ввод в эксплуатацию</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-3xl p-8 mb-6 relative">
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">4</div>
                  <Icon name="Key" className="text-gold-400 mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold text-white mb-3">Передача объекта</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Передача объекта и запуск арендатора</p>
                </div>
              </div>
            </div>

            {/* Честная пометка о кейсах */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gold-400/30 rounded-3xl p-10 text-center">
              <div className="flex items-center justify-center mb-6">
                <Icon name="AlertCircle" className="text-gold-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gold-400">О наших кейсах</h3>
              </div>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Кейсы сейчас в процессе согласования. По запросу пришлём документы и предварительные расчёты.
              </p>
              <div className="text-sm text-gray-400">
                Мы работаем честно и не показываем выдуманные результаты
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="relative z-10 py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-400/10 to-gold-500/10 border border-gold-400/30 text-gold-400 font-medium text-sm mb-8">
              <Icon name="Phone" className="mr-2" size={16} />
              Свяжитесь с нами
            </div>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent mb-8">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Оставьте заявку или позвоните прямо сейчас. Консультация бесплатная.
              Работаем с объектами от 400 кв.м по всей России.
            </p>
            
            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center">
                    <Icon name="Phone" className="text-gold-400" size={28} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gold-400 mb-1">Телефон</h3>
                    <p className="text-gray-300">Звоните в любое время</p>
                  </div>
                </div>
                <a href="tel:+79002530077" className="text-2xl font-bold text-white hover:text-gold-400 transition-colors">
                  +7 (900) 253-00-77
                </a>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold-400/20 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center">
                    <Icon name="Mail" className="text-gold-400" size={28} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gold-400 mb-1">Email</h3>
                    <p className="text-gray-300">Ответим в течение часа</p>
                  </div>
                </div>
                <a href="mailto:biznes0308@mail.ru" className="text-2xl font-bold text-white hover:text-gold-400 transition-colors">
                  biznes0308@mail.ru
                </a>
              </Card>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-black font-bold shadow-premium px-12 py-6 text-xl"
              onClick={() => window.location.href = 'tel:+79002530077'}
            >
              <Icon name="Calculator" className="mr-3" size={24} />
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-gold-400/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg">
                <Icon name="Building2" className="text-black" size={24} />
              </div>
              <span className="text-xl font-serif font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">Seti-Pro</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 Seti-Pro. Все права защищены.<br />
              <span className="text-sm">Профессиональные решения для федеральных торговых сетей</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}