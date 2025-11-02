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
              <span className="text-2xl font-bold text-foreground tracking-tight">RetailerRF</span>
            </div>
            <div className="hidden lg:flex gap-10">
              <button onClick={() => scrollToSection("directions")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
                Направления
              </button>
              <button onClick={() => scrollToSection("investors")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
                Инвесторам
              </button>
              <button onClick={() => scrollToSection("why-us")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
                Почему мы
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

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/eb0f0b31-e3df-4437-8f36-7d89f5daf40f/files/f19eb6dc-60d3-41a4-8afd-5a8b82ae545f.jpg"
            alt="Современный торговый объект"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              RetailerRF
            </h1>
            <p className="text-2xl text-blue-200 mb-8 font-medium">
              Инвестиции в торговую недвижимость под федеральные сети
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-10 max-w-2xl">
              Мы создаём доходные объекты для федеральных арендаторов — от подбора земельного участка и согласования разрешений до строительства и сдачи в аренду.<br/><br/>
              Вы входите как инвестор — мы берём проект под ключ. Финансовые модели и расчёты предоставляем по запросу.
            </p>
            <Button size="lg" onClick={() => scrollToSection("contact")} className="text-base px-10 h-14 shadow-xl bg-primary hover:bg-primary/90">
              Получить презентацию проектов
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Map" className="text-primary" size={28} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Компания по согласованию и строительству торговых объектов под федеральные сети
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный цикл — от идеи до готового арендного бизнеса.
          </p>
        </div>
      </section>

      <section id="directions" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Наши направления</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексное сопровождение инвестиционных проектов под федеральные торговые сети
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Store" className="text-primary" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Согласование готовых помещений
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Согласование готовых помещений под федеральные сети с учётом всех требований арендаторов
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="MapPin" className="text-primary" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Подбор и согласование участков
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Подбор и согласование земельных участков под строительство торговых объектов
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Building2" className="text-primary" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Комплексное сопровождение
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Комплексное сопровождение инвестиционных проектов: проектирование, строительство, сдача в аренду
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="investors" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/eb0f0b31-e3df-4437-8f36-7d89f5daf40f/files/2fec96e4-6bed-4064-8d48-93346d8844a5.jpg"
                  alt="Партнёрство"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Инвесторам и партнёрам</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы приглашаем инвесторов к совместному участию в проектах по строительству торговых объектов под федеральные сети.
              </p>
              
              <div className="space-y-6 pt-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Форматы участия:</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Coins" className="text-accent" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Совместное инвестирование</h4>
                        <p className="text-sm text-muted-foreground">Доля прибыли после реализации проекта</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="TrendingUp" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Долевое участие</h4>
                        <p className="text-sm text-muted-foreground">Доля собственности и регулярный арендный поток</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="FileText" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Финансирование проектов</h4>
                        <p className="text-sm text-muted-foreground">Под готовую финансовую модель с прозрачными расчётами</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-lg">
                  <p className="text-foreground leading-relaxed">
                    Наша команда берёт проект под ключ — от подбора и согласования земельного участка до строительства и сдачи объекта в аренду федеральной сети.<br/><br/>
                    <span className="font-semibold text-primary">Финансовые модели и расчёты предоставляем по запросу.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональный подход и прозрачность на всех этапах сотрудничества
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-5 p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-border hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle2" className="text-primary" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Работаем напрямую с федеральными арендаторами</h3>
                <p className="text-muted-foreground">
                  Прямые контакты с «Магнит», «Пятёрочка», «Чижик», «Fix Price» и другими федеральными сетями
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-border hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Workflow" className="text-primary" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Полный цикл — от идеи до готового доходного объекта</h3>
                <p className="text-muted-foreground">
                  Берём на себя все этапы: от поиска участка до передачи ключей федеральному арендатору
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-border hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="FileBarChart" className="text-primary" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Прозрачные финмодели и отчётность для инвесторов</h3>
                <p className="text-muted-foreground">
                  Детальные финансовые расчёты, регулярная отчётность и прозрачность на каждом этапе проекта
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-border hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Опытная команда с реализованными проектами по всей России</h3>
                <p className="text-muted-foreground">
                  Профессионалы с многолетним опытом в девелопменте, юриспруденции и работе с федеральными сетями
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-slate-50 to-blue-50 border-2 border-primary/20 rounded-2xl p-10 text-center">
            <p className="text-xl text-foreground font-medium mb-4">
              Кейсы и реализованные проекты предоставляем по запросу
            </p>
            <Button size="lg" onClick={() => scrollToSection("contact")} variant="outline" className="mt-4">
              Запросить информацию о проектах
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300">
              Оставьте заявку, и мы предоставим детальную презентацию и финансовую модель проекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/5 backdrop-blur border-white/10">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium text-gray-200">Ваше имя *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 h-12 text-base bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Иван Петров"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-medium text-gray-200">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 h-12 text-base bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="ivan@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium text-gray-200">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 h-12 text-base bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="+7 (900) 000-00-00"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg h-14 mt-4 bg-primary hover:bg-primary/90">
                    Запросить презентацию и финмодель проекта
                  </Button>
                  <p className="text-sm text-gray-400 text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-8">Наши контакты</h3>
                <div className="space-y-6">
                  <a href="tel:+79002530077" className="flex items-center gap-4 text-lg hover:text-blue-300 transition group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition">
                      <Icon name="Phone" size={24} className="text-blue-300" />
                    </div>
                    <span>+7 900 253-00-77</span>
                  </a>
                  <a href="mailto:biznes0308@mail.ru" className="flex items-center gap-4 text-lg hover:text-blue-300 transition group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition">
                      <Icon name="Mail" size={24} className="text-blue-300" />
                    </div>
                    <span>biznes0308@mail.ru</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 bg-slate-950 text-white border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name="Building2" className="text-primary" size={22} />
              </div>
              <span className="text-2xl font-bold">RetailerRF</span>
            </div>
            <p className="text-gray-400 text-sm text-center">
              Гарантированный доход от недвижимости под федеральные сети
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 RetailerRF
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
