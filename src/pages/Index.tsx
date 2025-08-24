import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-secondary">ФедСтрой</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            Консультация
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight mb-6">
                Подключение к федеральным торговым сетям
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Строительство торговых помещений под ключ для Магнит, Пятерочка, Чижик, Перекресток. 
                Полное соответствие требованиям федеральных сетей. Работаем по всей России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/dcc8967f-aeed-4a5b-bac5-7519c75dba10.jpg" 
                alt="Строительство торговых объектов"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для подключения к федеральным торговым сетям
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Building" className="text-primary mb-4" size={48} />
                <CardTitle>Строительство под ключ</CardTitle>
                <CardDescription>
                  Полный цикл строительства торговых помещений с соблюдением всех требований федеральных сетей
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Network" className="text-primary mb-4" size={48} />
                <CardTitle>Подключение к сетям</CardTitle>
                <CardDescription>
                  Оформление документов и заключение долгосрочных договоров аренды с федеральными сетями
                </CardDescription>
              </CardHeader>
            </Card>
            

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="FileCheck" className="text-primary mb-4" size={48} />
                <CardTitle>Анализ помещений</CardTitle>
                <CardDescription>
                  Оценка существующих торговых помещений для заключения договоров аренды
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" className="text-primary mb-4" size={48} />
                <CardTitle>Работа с инвесторами</CardTitle>
                <CardDescription>
                  Помощь собственникам и инвесторам в реализации проектов с гарантированной доходностью
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="ShieldCheck" className="text-primary mb-4" size={48} />
                <CardTitle>Гарантии качества</CardTitle>
                <CardDescription>
                  Полное соответствие стандартам федеральных сетей и гарантия долгосрочного сотрудничества
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Преимущества работы с нашей компанией
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Опыт работы</h3>
              <p className="text-muted-foreground">Многолетний опыт работы с крупнейшими федеральными сетями</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Быстрая реализация</h3>
              <p className="text-muted-foreground">Оптимальные сроки строительства и оформления документов</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Выгодные условия</h3>
              <p className="text-muted-foreground">Конкурентоспособные цены и гибкие условия сотрудничества</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Гарантированный результат</h3>
              <p className="text-muted-foreground">100% соответствие требованиям и успешное подключение к сетям</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Готовы обсудить ваш проект и предложить оптимальные решения
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-6">Контактная информация</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Телефон</p>
                      <a href="tel:+79002530077" className="text-primary hover:underline text-lg">
                        +7 (900) 253-00-77
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Электронная почта</p>
                      <a href="mailto:biznes0308@mail.ru" className="text-primary hover:underline text-lg">
                        biznes0308@mail.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">География работы</p>
                      <p className="text-muted-foreground text-lg">Вся территория России</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-secondary mb-6">Наши партнеры</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4 text-center">
                    <Icon name="Store" className="text-primary mx-auto mb-2" size={32} />
                    <p className="font-medium">Магнит</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 text-center">
                    <Icon name="ShoppingCart" className="text-primary mx-auto mb-2" size={32} />
                    <p className="font-medium">Пятерочка</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 text-center">
                    <Icon name="Building2" className="text-primary mx-auto mb-2" size={32} />
                    <p className="font-medium">Чижик</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 text-center">
                    <Icon name="ShoppingBag" className="text-primary mx-auto mb-2" size={32} />
                    <p className="font-medium">Перекресток</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и получите персональное предложение для вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить сейчас
            </Button>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
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
                <span className="text-2xl font-bold">ФедСтрой</span>
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
                <p>Работаем по всей России</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2024 ФедСтрой. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}