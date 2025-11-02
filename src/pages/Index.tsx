import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-foreground">DevInvest</div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection("services")} className="text-sm text-muted-foreground hover:text-foreground transition">
                Что мы делаем
              </button>
              <button onClick={() => scrollToSection("formats")} className="text-sm text-muted-foreground hover:text-foreground transition">
                Форматы участия
              </button>
              <button onClick={() => scrollToSection("why-us")} className="text-sm text-muted-foreground hover:text-foreground transition">
                Почему мы
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm text-muted-foreground hover:text-foreground transition">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection("contact")} className="hidden md:block">
              Запросить материалы
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Создаём доходные торговые объекты под федеральные сети
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                От участка до сдачи в аренду федеральной сети — мы берём проект под ключ, вы входите как инвестор
              </p>
              <Button size="lg" onClick={() => scrollToSection("contact")} className="text-lg px-8">
                Получить презентацию проектов
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
              <img
                src="https://cdn.poehali.dev/projects/eb0f0b31-e3df-4437-8f36-7d89f5daf40f/files/62a46772-855a-40b0-b096-cb4ba4288136.jpg"
                alt="Строительство торгового объекта"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">Что мы делаем</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный цикл работы с торговыми объектами — от поиска участка до передачи арендатору
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Store" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Согласование помещений</h3>
                <p className="text-muted-foreground">
                  Согласование готовых помещений под аренду с федеральными сетями. Готовим объект под требования арендатора.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Подбор участков</h3>
                <p className="text-muted-foreground">
                  Подбор и согласование земельных участков под строительство торговых помещений с учётом требований федеральных сетей.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Building2" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Реализация под ключ</h3>
                <p className="text-muted-foreground">
                  Реализация проектов с инвесторами — полный цикл: участок → согласование → строительство → сдача или реализация.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="formats" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">Форматы участия инвесторов</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выбирайте формат, который подходит вашим инвестиционным целям
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="TrendingUp" className="text-primary" size={28} />
                  <h3 className="text-xl font-semibold text-foreground">Совместное инвестирование</h3>
                </div>
                <p className="text-muted-foreground">
                  Доля прибыли после реализации проекта. Минимальные риски, прозрачная структура доходности.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Key" className="text-secondary" size={28} />
                  <h3 className="text-xl font-semibold text-foreground">Долевое участие</h3>
                </div>
                <p className="text-muted-foreground">
                  Доля собственности плюс регулярный арендный поток. Долгосрочный актив с постоянным доходом.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Wallet" className="text-primary" size={28} />
                  <h3 className="text-xl font-semibold text-foreground">Финансирование под проект</h3>
                </div>
                <p className="text-muted-foreground">
                  Возврат средств плюс фиксированный доход. Предсказуемая доходность с минимальным участием.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="bg-muted/50 border border-border rounded-lg p-8 text-center">
            <p className="text-lg text-foreground">
              Все проекты имеют готовую финансовую модель и юридическую структуру. <br />
              <span className="text-primary font-semibold">Материалы предоставляются по запросу.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant">
              <img
                src="https://cdn.poehali.dev/projects/eb0f0b31-e3df-4437-8f36-7d89f5daf40f/files/322fef6c-5dcd-4583-8e73-bbd9c7ca4146.jpg"
                alt="Планирование проектов"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8 text-foreground">Почему мы</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Shield" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Только федеральные сети</h3>
                    <p className="text-muted-foreground">
                      Работаем исключительно с федеральными сетями-арендаторами. Надёжность и стабильность гарантированы.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="CheckCircle" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Подтверждённый опыт</h3>
                    <p className="text-muted-foreground">
                      Многолетний опыт согласования участков и помещений. Знаем все тонкости работы с ритейлом.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="FileText" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Прозрачные расчёты</h3>
                    <p className="text-muted-foreground">
                      Детальная отчётность на каждом этапе проекта. Полная прозрачность финансовых потоков.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Award" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Реальные кейсы</h3>
                    <p className="text-muted-foreground">
                      Портфолио успешно реализованных объектов. Готовы поделиться опытом и результатами.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Профессиональная команда</h3>
                    <p className="text-muted-foreground">
                      Эксперты в девелопменте, юриспруденции и работе с арендаторами. Закрываем все этапы проекта.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">Как мы работаем</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Простой и понятный процесс от первого контакта до получения дохода
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Заявка</h3>
                <p className="text-muted-foreground">
                  Вы оставляете заявку, и мы связываемся с вами для обсуждения деталей
                </p>
              </div>
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30"></div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Презентация</h3>
                <p className="text-muted-foreground">
                  Показываем актуальные проекты, финансовые модели и условия участия
                </p>
              </div>
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30"></div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Старт проекта</h3>
                <p className="text-muted-foreground">
                  Подписываем соглашение, запускаем проект и начинаем регулярную отчётность
                </p>
              </div>
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30"></div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Получение дохода</h3>
              <p className="text-muted-foreground">
                Вы получаете долю прибыли или готовый доходный актив с арендным потоком
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
              <img
                src="https://cdn.poehali.dev/projects/eb0f0b31-e3df-4437-8f36-7d89f5daf40f/files/0411699a-530b-4a1d-984f-c899dd8e0cb5.jpg"
                alt="Готовый торговый объект"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Инвесторам и партнёрам</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Мы предлагаем участие в реальных проектах под федеральные сети.
                </p>
                <p>
                  Наша команда берёт на себя весь процесс: подбор участка, согласование, строительство, сдача в аренду.
                </p>
                <p>
                  Инвестор входит деньгами и получает долю прибыли или готовый доходный актив.
                </p>
                <p className="font-semibold text-primary">
                  Финансовые модели и презентации доступны по запросу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Готовы узнать больше?</h2>
            <p className="text-xl text-muted-foreground">
              Получите описание текущих проектов с финансовыми моделями
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 h-12"
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 h-12"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 h-12"
                    placeholder="+7 (900) 123-45-67"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg h-14">
                  Запросить материалы
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">DevInvest</h3>
              <p className="text-white/70">
                Создаём доходные торговые объекты под федеральные сети
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition">
                    Что мы делаем
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("formats")} className="hover:text-white transition">
                    Форматы участия
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("why-us")} className="hover:text-white transition">
                    Почему мы
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>info@devinvest.ru</li>
                <li>+7 (900) 000-00-00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
            © 2025 DevInvest. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
