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
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building2" className="text-white" size={22} />
              </div>
              <span className="text-2xl font-bold text-foreground tracking-tight">RealtyInvest</span>
            </div>
            <div className="hidden lg:flex gap-10">
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
                О компании
              </button>
              <button onClick={() => scrollToSection("advantages")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
                Преимущества
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
                Проекты
              </button>
              <button onClick={() => scrollToSection("partnership")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
                Партнёрство
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
                Контакты
              </button>
            </div>
            <a href="tel:+79002530077">
              <Button className="hidden md:flex gap-2">
                <Icon name="Phone" size={18} />
                8 900 253 00 77
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-28 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Icon name="TrendingUp" size={16} />
                Инвестиции в доходную недвижимость
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                Инвестиции с федеральными сетями
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Создаём доходные объекты под «Магнит», «Пятёрочку», «Чижик», «Fix Price». Гарантированная окупаемость и стабильный арендный поток.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" onClick={() => scrollToSection("contact")} className="text-base px-8 h-14 shadow-lg">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("projects")} className="text-base px-8 h-14">
                  Посмотреть проекты
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-3xl opacity-30"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/eb0f0b31-e3df-4437-8f36-7d89f5daf40f/files/6fb017ec-0220-464a-9cae-6eefa3cb0e39.jpg"
                  alt="Премиальный торговый объект"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">О компании</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы специализируемся на создании инвестиционных проектов в коммерческой недвижимости. Работаем только с федеральными сетями — это гарантия надёжности и прозрачности.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Shield" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Надёжность</h3>
                <p className="text-muted-foreground">
                  Работаем по договору, с полной юридической защитой и прозрачной финансовой моделью.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Экспертность</h3>
                <p className="text-muted-foreground">
                  Многолетний опыт согласований с федеральными арендаторами и реализации проектов под ключ.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="LineChart" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Доходность</h3>
                <p className="text-muted-foreground">
                  Гарантированная окупаемость инвестиций и долгосрочный арендный доход от федеральных сетей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Преимущества работы с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем готовые решения для инвесторов и собственников земли — от участка до стабильного дохода.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Building" className="text-primary" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Работа с федеральными арендаторами</h3>
                <p className="text-muted-foreground">
                  «Магнит», «Пятёрочка», «Чижик», «Fix Price» — только проверенные партнёры с долгосрочными контрактами.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="FileCheck" className="text-primary" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Полное сопровождение проекта</h3>
                <p className="text-muted-foreground">
                  От подбора участка и согласований до строительства и передачи арендатору — всё берём на себя.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Calculator" className="text-primary" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Прозрачная финансовая модель</h3>
                <p className="text-muted-foreground">
                  Детальный расчёт окупаемости, доходности и графика платежей. Отчётность на каждом этапе.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Гибкие форматы участия</h3>
                <p className="text-muted-foreground">
                  Инвестиции, долевое участие, финансирование под проект — выбирайте удобный формат.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Shield" className="text-primary" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Юридическая защита</h3>
                <p className="text-muted-foreground">
                  Все сделки оформляются договором с чёткой структурой прав, обязанностей и гарантий.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Актуальные проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры объектов под федеральные сети с готовой финансовой моделью и согласованными арендаторами.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/eb0f0b31-e3df-4437-8f36-7d89f5daf40f/files/d7aafb40-c048-4fd0-8bc3-b997bf770f30.jpg"
                  alt="Проект 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
                  Пятёрочка
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">Торговый объект 450 м²</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span>Московская область</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} className="text-primary" />
                    <span>Доходность: 14% годовых</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} className="text-primary" />
                    <span>Окупаемость: 7 лет</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Объект под «Пятёрочку» с долгосрочным договором аренды и гарантированными выплатами.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/eb0f0b31-e3df-4437-8f36-7d89f5daf40f/files/62a46772-855a-40b0-b096-cb4ba4288136.jpg"
                  alt="Проект 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
                  Магнит
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">Торговый комплекс 600 м²</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span>Ленинградская область</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} className="text-primary" />
                    <span>Доходность: 16% годовых</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} className="text-primary" />
                    <span>Окупаемость: 6 лет</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Строительство под «Магнит» на участке с утверждённым проектом и разрешениями.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/eb0f0b31-e3df-4437-8f36-7d89f5daf40f/files/0411699a-530b-4a1d-984f-c899dd8e0cb5.jpg"
                  alt="Проект 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
                  Fix Price
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">Магазин формата «у дома» 400 м²</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span>Краснодарский край</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} className="text-primary" />
                    <span>Доходность: 15% годовых</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} className="text-primary" />
                    <span>Окупаемость: 6,5 лет</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Готовое помещение под «Fix Price» с подписанным предварительным договором аренды.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" onClick={() => scrollToSection("contact")} className="px-10">
              Запросить полный список проектов
            </Button>
          </div>
        </div>
      </section>

      <section id="partnership" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/eb0f0b31-e3df-4437-8f36-7d89f5daf40f/files/7c323727-9961-4889-af6b-ab3f2e838f20.jpg"
                  alt="Партнёрство"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Ваш объект под федерального арендатора</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Если у вас есть земельный участок или готовое помещение от 400 м², мы поможем превратить его в доходный актив с федеральным арендатором.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Для собственников земли</h3>
                    <p className="text-muted-foreground">
                      Согласуем участок с федеральной сетью, построим объект и обеспечим долю в прибыли или выкупим по договорённости.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Для инвесторов</h3>
                    <p className="text-muted-foreground">
                      Входите на любом этапе — от участка до готового арендного бизнеса. Получаете долю прибыли или доходный актив.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Для партнёров</h3>
                    <p className="text-muted-foreground">
                      Совместные проекты с прозрачными условиями и юридической защитой на всех этапах сделки.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button size="lg" onClick={() => scrollToSection("contact")} className="px-8">
                  Оставить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы предоставим детальную презентацию проектов с финансовыми расчётами
            </p>
          </div>
          <Card className="border-2 shadow-xl">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">Ваше имя *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 h-12 text-base"
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 h-12 text-base"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base font-medium">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 h-12 text-base"
                    placeholder="+7 (900) 000-00-00"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg h-14 mt-4">
                  Получить консультацию
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
              
              <div className="mt-10 pt-10 border-t border-border space-y-4">
                <h3 className="font-bold text-lg text-foreground mb-4">Наши контакты</h3>
                <a href="tel:+79002530077" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span className="text-base">8 900 253 00 77</span>
                </a>
                <a href="mailto:biznes0308@mail.ru" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span className="text-base">biznes0308@mail.ru</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Building2" className="text-white" size={22} />
                </div>
                <span className="text-2xl font-bold">RealtyInvest</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Гарантированный доход от недвижимости под федеральные сети
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Навигация</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition">
                    О компании
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("advantages")} className="hover:text-white transition">
                    Преимущества
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("projects")} className="hover:text-white transition">
                    Проекты
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("partnership")} className="hover:text-white transition">
                    Партнёрство
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>
                  <a href="tel:+79002530077" className="hover:text-white transition">
                    8 900 253 00 77
                  </a>
                </li>
                <li>
                  <a href="mailto:biznes0308@mail.ru" className="hover:text-white transition">
                    biznes0308@mail.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-8 text-center text-white/50 text-sm">
            © 2025 RealtyInvest. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
