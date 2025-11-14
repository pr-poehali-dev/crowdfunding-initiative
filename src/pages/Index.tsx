import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const campaigns = [
    {
      id: 1,
      title: 'Помощь детскому приюту "Надежда"',
      description: 'Собираем средства на ремонт и новое оборудование для детского приюта',
      raised: 450000,
      goal: 1000000,
      donors: 234,
      image: '🏠',
      category: 'Благотворительность'
    },
    {
      id: 2,
      title: 'Спасение редких животных',
      description: 'Поддержите программу по сохранению популяции амурских тигров',
      raised: 820000,
      goal: 1500000,
      donors: 467,
      image: '🐅',
      category: 'Экология'
    },
    {
      id: 3,
      title: 'Стартап: Эко-упаковка',
      description: 'Запуск производства биоразлагаемой упаковки для продуктов',
      raised: 1200000,
      goal: 2000000,
      donors: 589,
      image: '♻️',
      category: 'Бизнес'
    },
    {
      id: 4,
      title: 'Лечение Маши',
      description: 'Срочный сбор на операцию для 5-летней Маши',
      raised: 680000,
      goal: 900000,
      donors: 892,
      image: '❤️',
      category: 'Медицина'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🚀</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Выручайка
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('campaigns')} className="text-sm font-medium hover:text-primary transition-colors">
              Активные сборы
            </button>
            <button onClick={() => scrollToSection('create')} className="text-sm font-medium hover:text-primary transition-colors">
              Создать сбор
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О проекте
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </button>
          </div>
          <Button onClick={() => scrollToSection('create')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Запустить сбор
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Делайте добро вместе
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Краудфандинговая платформа для реализации мечты, помощи людям и поддержки важных проектов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => scrollToSection('create')} size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6">
              <Icon name="Rocket" size={20} className="mr-2" />
              Создать сбор
            </Button>
            <Button onClick={() => scrollToSection('campaigns')} size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
              <Icon name="Heart" size={20} className="mr-2" />
              Помочь проекту
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-3">💰</div>
              <div className="text-3xl font-bold text-primary mb-2">₽2.5млрд+</div>
              <div className="text-muted-foreground">Собрано средств</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-3">🎯</div>
              <div className="text-3xl font-bold text-secondary mb-2">12,500+</div>
              <div className="text-muted-foreground">Успешных проектов</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl mb-3">👥</div>
              <div className="text-3xl font-bold text-accent mb-2">850,000+</div>
              <div className="text-muted-foreground">Активных участников</div>
            </div>
          </div>
        </div>
      </section>

      <section id="campaigns" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Активные сборы</h2>
            <p className="text-xl text-muted-foreground">Помогите проектам, которые меняют мир к лучшему</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaigns.map((campaign, index) => (
              <Card key={campaign.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-2" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-5xl">{campaign.image}</div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {campaign.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{campaign.title}</CardTitle>
                  <CardDescription className="text-base">{campaign.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-lg">
                          ₽{campaign.raised.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground">
                          из ₽{campaign.goal.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={(campaign.raised / campaign.goal) * 100} className="h-3" />
                      <div className="mt-2 text-sm text-muted-foreground">
                        {Math.round((campaign.raised / campaign.goal) * 100)}% от цели
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Users" size={18} />
                      <span>{campaign.donors} человек помогли</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                    <Icon name="Heart" size={18} className="mr-2" />
                    Поддержать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="create" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Создать свой сбор</h2>
            <p className="text-xl text-muted-foreground">Расскажите о своём проекте и начните собирать поддержку</p>
          </div>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Название проекта</Label>
                  <Input id="title" placeholder="Например: Помощь приюту для животных" className="text-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Категория</Label>
                  <select id="category" className="w-full px-4 py-2 border rounded-lg text-lg">
                    <option>Благотворительность</option>
                    <option>Медицина</option>
                    <option>Бизнес</option>
                    <option>Экология</option>
                    <option>Образование</option>
                    <option>Творчество</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal">Цель сбора (₽)</Label>
                  <Input id="goal" type="number" placeholder="1000000" className="text-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Описание проекта</Label>
                  <Textarea id="description" placeholder="Расскажите подробно о вашем проекте, почему он важен и на что пойдут средства..." rows={6} className="text-lg" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Запустить сбор средств
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О проекте Выручайка</h2>
            <p className="text-xl text-muted-foreground">Мы помогаем людям помогать друг другу</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="text-4xl mb-3">🎯</div>
                <CardTitle>Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Создать доступную платформу, где каждый может найти поддержку для своих идей и проектов, а благотворители - найти достойные начинания для помощи.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <div className="text-4xl mb-3">🔒</div>
                <CardTitle>Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Все проекты проходят модерацию. Мы гарантируем прозрачность сборов и защиту личных данных участников платформы.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <div className="text-4xl mb-3">💳</div>
                <CardTitle>Удобные платежи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Принимаем оплату картами, электронными кошельками и банковскими переводами. Минимальная комиссия платформы.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <div className="text-4xl mb-3">📊</div>
                <CardTitle>Отчётность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Авторы проектов публикуют отчёты о расходовании средств. Вы всегда знаете, куда идут ваши пожертвования.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на самые популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-semibold">
                Как создать сбор средств?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нажмите кнопку "Создать сбор", заполните форму с описанием проекта, укажите цель сбора и категорию. После модерации (1-2 дня) ваш проект появится на платформе.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-2 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-semibold">
                Какая комиссия платформы?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы берём 5% от собранной суммы на поддержку платформы. Это одна из самых низких комиссий на рынке краудфандинга.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-2 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-semibold">
                Как я получу собранные средства?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Средства поступают на указанный вами банковский счёт или карту в течение 3-5 рабочих дней после завершения сбора или достижения промежуточной цели.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-2 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-semibold">
                Можно ли отменить пожертвование?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, вы можете отменить пожертвование в течение 24 часов после его совершения. После этого срока средства передаются автору проекта.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-2 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-semibold">
                Как проверяется достоверность проектов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Каждый проект проходит модерацию. Мы проверяем документы, связываемся с авторами и запрашиваем подтверждающие материалы. Сомнительные проекты не публикуются.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-2 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-semibold">
                Что делать, если не собрана полная сумма?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Вы получите все собранные средства, даже если цель не достигнута. Главное - предоставить отчёт об их использовании.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы запустить свой проект?</h2>
          <p className="text-xl mb-8 opacity-90">Присоединяйтесь к тысячам успешных сборов на Выручайке</p>
          <Button onClick={() => scrollToSection('create')} size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
            <Icon name="Sparkles" size={20} className="mr-2" />
            Создать сбор бесплатно
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🚀</div>
                <span className="text-xl font-bold">Выручайка</span>
              </div>
              <p className="text-gray-400">
                Платформа для краудфандинга и реализации мечты
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Проекты</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Активные сборы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Успешные проекты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Создать сбор</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О платформе</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@viruchayka.ru" className="hover:text-white transition-colors">info@viruchayka.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+78001234567" className="hover:text-white transition-colors">8 (800) 123-45-67</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Выручайка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
