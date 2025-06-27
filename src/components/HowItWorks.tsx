const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Нажмите кнопку",
      description: "Просто нажмите на кнопку генерации робуксов",
      icon: "👆",
    },
    {
      step: 2,
      title: "Ракета запускается",
      description: "Наша космическая ракета отправляется за робуксами",
      icon: "🚀",
    },
    {
      step: 3,
      title: "Получите робуксы",
      description: "Ракета возвращается с кучей бесплатных робуксов!",
      icon: "💎",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Как это работает?
          </h2>
          <p className="text-xl text-white/70">Простой процесс в 3 шага</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="glass-window rounded-3xl p-8 h-full">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="bg-roblox-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/70 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
