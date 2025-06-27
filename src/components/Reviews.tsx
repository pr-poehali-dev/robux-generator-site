import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "GameMaster2024",
      avatar: "🎮",
      rating: 5,
      comment:
        "Офигенный генератор! Ракета прям как в космосе летит, а робуксы сыпятся как дождь!",
    },
    {
      name: "RobloxPro",
      avatar: "👾",
      rating: 5,
      comment: "Лучший сайт для робуксов! Анимация с ракетой просто космос 🚀",
    },
    {
      name: "MinecraftFan",
      avatar: "⛏️",
      rating: 5,
      comment:
        "Перешел с Майнкрафта на Роблокс благодаря этому генератору! Теперь у меня куча робуксов!",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-roblox-purple to-roblox-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Отзывы игроков</h2>
          <p className="text-xl text-white/70">Что говорят наши пользователи</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="glass-window rounded-3xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{review.avatar}</div>
                <div>
                  <h3 className="font-bold text-white text-lg">
                    {review.name}
                  </h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-lg">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
