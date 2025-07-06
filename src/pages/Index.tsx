import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const videoData = [
    {
      id: 1,
      title: "Изучаем React за 30 минут",
      channel: "TechGuru",
      views: "1.2M",
      duration: "30:45",
      thumbnail: "/img/3ae289c5-7119-4124-9937-361b1dfce2c6.jpg",
      avatar: "/img/00c19d72-4486-4582-8ae6-b825b4d660e1.jpg",
    },
    {
      id: 2,
      title: "Топ 10 игр 2024 года",
      channel: "GameZone",
      views: "890K",
      duration: "15:22",
      thumbnail: "/img/2bcd0004-853f-4c21-b936-7c55eba4d3cf.jpg",
      avatar: "/img/00c19d72-4486-4582-8ae6-b825b4d660e1.jpg",
    },
    {
      id: 3,
      title: "Создаем сайт с нуля",
      channel: "WebMaster",
      views: "543K",
      duration: "45:10",
      thumbnail: "/img/00c19d72-4486-4582-8ae6-b825b4d660e1.jpg",
      avatar: "/img/3ae289c5-7119-4124-9937-361b1dfce2c6.jpg",
    },
    {
      id: 4,
      title: "Обзор новых технологий",
      channel: "TechNews",
      views: "2.1M",
      duration: "25:33",
      thumbnail: "/img/3ae289c5-7119-4124-9937-361b1dfce2c6.jpg",
      avatar: "/img/2bcd0004-853f-4c21-b936-7c55eba4d3cf.jpg",
    },
    {
      id: 5,
      title: "Секреты игровой индустрии",
      channel: "GameDev",
      views: "675K",
      duration: "20:15",
      thumbnail: "/img/2bcd0004-853f-4c21-b936-7c55eba4d3cf.jpg",
      avatar: "/img/00c19d72-4486-4582-8ae6-b825b4d660e1.jpg",
    },
    {
      id: 6,
      title: "Программирование для начинающих",
      channel: "CodeSchool",
      views: "1.8M",
      duration: "40:28",
      thumbnail: "/img/00c19d72-4486-4582-8ae6-b825b4d660e1.jpg",
      avatar: "/img/3ae289c5-7119-4124-9937-361b1dfce2c6.jpg",
    },
  ];

  const categories = [
    "Рекомендуемые",
    "Технологии",
    "Игры",
    "Образование",
    "Развлечения",
    "Музыка",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
              <h1 className="text-2xl font-bold text-primary">VidTube</h1>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input placeholder="Поиск видео..." className="pr-12 h-10" />
                <Button
                  size="icon"
                  className="absolute right-0 top-0 h-10 w-12 rounded-l-none"
                >
                  <Icon name="Search" size={20} />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Icon name="Video" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/img/00c19d72-4486-4582-8ae6-b825b4d660e1.jpg" />
                <AvatarFallback>П</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-background border-r border-border h-screen sticky top-16 overflow-y-auto">
          <div className="p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="Home" size={20} className="mr-3" />
              Главная
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="Compass" size={20} className="mr-3" />
              Рекомендации
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="Clock" size={20} className="mr-3" />
              История
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="PlaySquare" size={20} className="mr-3" />
              Ваши видео
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="Heart" size={20} className="mr-3" />
              Понравившиеся
            </Button>
          </div>

          <div className="border-t border-border p-4">
            <h3 className="font-semibold mb-2">Подписки</h3>
            <div className="space-y-2">
              {["TechGuru", "GameZone", "WebMaster"].map((channel) => (
                <Button
                  key={channel}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <Avatar className="h-6 w-6 mr-3">
                    <AvatarImage src="/img/00c19d72-4486-4582-8ae6-b825b4d660e1.jpg" />
                    <AvatarFallback>{channel[0]}</AvatarFallback>
                  </Avatar>
                  {channel}
                </Button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Categories */}
          <div className="mb-6">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    category === "Рекомендуемые" ? "default" : "secondary"
                  }
                  className="whitespace-nowrap cursor-pointer hover:bg-primary/80"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videoData.map((video) => (
              <Card
                key={video.id}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white hover:text-white"
                    >
                      <Icon name="Play" size={32} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={video.avatar} />
                      <AvatarFallback>{video.channel[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">
                      {video.channel}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{video.views} просмотров</span>
                    <span>•</span>
                    <span>2 дня назад</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trending Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Icon name="TrendingUp" size={24} className="mr-2" />
              Трендовые видео
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoData.slice(0, 3).map((video) => (
                <Card
                  key={video.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={video.avatar} />
                          <AvatarFallback>{video.channel[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">
                          {video.channel}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Icon name="Heart" size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Icon name="Share" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
