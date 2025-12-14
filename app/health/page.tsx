import {
  Heart,
  TrendingDown,
  Shield,
  Activity,
  AlertTriangle,
  Check,
} from "lucide-react";

const Health = () => {
  // Mapping Source names to be used in the JSX (matching your annotated bibliography)
  const sourceMapping = {
    ESPN: "Ogden, 2021", // Source 2
    Qiao: "Qiao, 2022", // Source 10
    Jacobs: "Jacobs, 2024", // Source 1
    Munoz: "Munoz-Macho et al., 2024", // Source 7
  };

  const stats = [
    // Source 2: Getafe Case Study
    {
      value: "66%",
      label: "Injury Reduction",
      sublabel: "Getafe Case Study",
      color: "from-green-400 to-emerald-500",
      source: sourceMapping.ESPN,
    },
    // Source 10: ANN Model Accuracy (99.6% precision)
    {
      value: "99.6%",
      label: "Prediction Precision",
      sublabel: "ANN Model Accuracy",
      color: "from-blue-400 to-cyan-500",
      source: sourceMapping.Qiao,
    },
    // Source 7 & 10: Continuous Monitoring of Load/Wellness
    {
      value: "200M",
      label: "Data Hours Analyzed",
      sublabel: "Global Database Volume",
      color: "from-purple-400 to-pink-500",
      source: sourceMapping.ESPN,
    },
    // Source 10: 7.2% Higher risk prediction rate
    {
      value: "+7.2%",
      label: "Risk Prediction Gain",
      sublabel: "Over Traditional Models",
      color: "from-orange-400 to-red-500",
      source: sourceMapping.Qiao,
    },
  ];

  const riskFactors = [
    // Source 7: External Load/Wellness
    {
      category: "Physical Load",
      items: [
        "Training intensity (Munoz-Macho et al., 2024)",
        "Match minutes (Munoz-Macho et al., 2024)",
        "Sprint distance (Munoz-Macho et al., 2024)",
        "Recovery time (Munoz-Macho et al., 2024)",
      ],
    },
    // Source 7: Biomechanics/Physiological
    {
      category: "Biomechanics",
      items: [
        "Movement asymmetry (Munoz-Macho et al., 2024)",
        "Joint angles (Qiao, 2022)",
        "Force distribution (Qiao, 2022)",
        "Biomechanical Modeling (Munoz-Macho et al., 2024)",
      ],
    },
    // Source 7: Physiological/Jacobs
    {
      category: "Physiological",
      items: [
        "Blood markers (Munoz-Macho et al., 2024)",
        "Sleep quality (Munoz-Macho et al., 2024)",
        "Wellness indicators (Munoz-Macho et al., 2024)",
        "Heart rate (Jacobs, 2024; Qiao, 2022)",
      ],
    },
    // Source 2: Zone7 Alerts / Source 1: Reduced Practice
    {
      category: "Intervention Alerts",
      items: [
        "Daily risk alerts (Ogden, 2021)",
        "In-game substitution support (Ogden, 2021)",
        "Reduced/No-contact practices (Jacobs, 2024)",
        "Medical ultrasound confirmation (Ogden, 2021)",
      ],
    },
  ];

  return (
    <div className={`relative pt-20 transition-opacity duration-1000`}>
      <div className="absolute inset-0 bg-linear-to-b from-green-950/20 via-transparent to-transparent pointer-events-none" />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-2 bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
              <Heart className="text-green-400" size={20} />
              <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
                Pillar 2
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Health & Safety
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              AI has moved sports medicine to a proactive, predictive system,
              representing the &quot;holy grail of sports scientists&quot;
              (Ogden, 2021).
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`text-4xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.sublabel} (Source: {stat.source})
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center">
              <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                The Holy Grail: Predictive Injury Modeling
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="bg-linear-to-br from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="text-red-400" size={28} />
                  <h3 className="text-2xl font-bold text-red-400">
                    The High-Stakes Problem
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">
                      Financial and Career Cost
                    </div>
                    <p className="text-gray-400 text-sm">
                      A depleted squad can lead to negative results, costing the
                      coach their job (Ogden, 2021). Long-term injuries can end
                      a player&apos;s career (Qiao, 2022). Preventing injuries is
                      arguably the most important challenge facing any coach in
                      the pursuit of marginal gains (Ogden, 2021).
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">
                      Data Overload
                    </div>
                    <p className="text-gray-400 text-sm">
                      Clubs collect data on strength, flexibility, GPS, and
                      sleep, creating a puzzle that &quot;a human brain
                      wasn&apos;t really meant to solve&quot; (Ogden, 2021).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="text-green-400" size={28} />
                  <h3 className="text-2xl font-bold text-green-400">
                    The AI Solution
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">
                      Pattern Recognition and Volume
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      The implementation of deep learning with AI has allowed for the opportunity to
                      find repeating patterns before specific injuries occur. The massive 200 million
                      hours of football data that has been analyzed enabled the program to effectively
                      predict the risk of injury (Ogden, 2021).
                    </p>
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <Check size={16} />
                      <span>
                        AI successfully predicted five of seven muscular
                        injuries during a trial period (Ogden, 2021).
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">
                      Proactive Intervention
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      The system provides alerts for players who may be straying
                      close to the &quot;danger zone,&quot; allowing staff to
                      address potential muscular damage before the injury occurs
                      (Ogden, 2021).
                    </p>
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <Check size={16} />
                      <span>
                        This information informs player rotation and
                        substitution decisions during games (Ogden, 2021).
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-12 mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">
              The Science of Risk Prediction (Qiao, 2022)
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  Artificial Neural Network (ANN) Model
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  An advanced ANN algorithm, implemented with Wireless Sensor
                  Network (WSN) technology, is used to predict knee injury risk
                  with exceptional precision (Qiao, 2022). The model achieved a
                  99.6% precision rate (Qiao, 2022).
                </p>
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    +7.2%
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    Prediction Gain Over Fuzzy Logic
                  </div>
                  <p className="text-xs text-gray-500">
                    The ANN model&apos;s risk prediction is 7.2% higher in
                    comparison to the existing fuzzy logic model (Qiao, 2022).
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  Proactive Safety Protocols
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  AI predicts that a player may get injured in a few days due to
                  pressure, frequency of training, and exercise intensity
                  (Qiao, 2022).
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Activity
                      className="text-blue-400 mt-1 shrink-0"
                      size={20}
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-300">
                        Data Source
                      </div>
                      <div className="text-xs text-gray-500">
                        Tight tops worn under the jersey contain GPS,
                        accelerometers, gyroscopes, and related sensors (Qiao, 2022).
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="text-red-400 mt-1 shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-semibold text-gray-300">
                        Life-Saving IoT
                      </div>
                      <div className="text-xs text-gray-500">
                        Life-saving IoT is implemented to avoid major risk,
                        making football a safer sport (Qiao, 2022).
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingDown
                      className="text-yellow-400 mt-1 shrink-0"
                      size={20}
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-300">
                        Intervention
                      </div>
                      <div className="text-xs text-gray-500">
                        Proper rest is given to the player after AI
                        identification, preventing career-ending injuries
                        (Qiao, 2022).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Multifactorial Health Monitoring (Munoz-Macho et al., 2024; Jacobs, 2024)
              </span>
            </h2>

            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Health prediction involves comprehensive monitoring beyond just
              physical load, integrating biomechanical analysis, wellness
              indicators, and internal physiological markers (Munoz-Macho et
              al.).
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {riskFactors.map((factor, index) => (
                <div
                  key={factor.category}
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-bold text-purple-400 mb-4">
                    {factor.category}
                  </h3>
                  <ul className="space-y-2">
                    {factor.items.map((item) => (
                      <li key={item} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                        <span className="text-sm text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-linear-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-12 text-center">
            <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-6">
              <Check size={48} className="text-green-400" />
            </div>
            <h2 className="text-3xl font-bold mb-6">
              The Competitive Advantage
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Clubs implementing AI-driven injury prevention maintain higher
              player availability, reduce medical costs, and gain a decisive
              competitive edge through optimal squad management and strategic
              roster planning (Jacobs, 2024).
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  Optimal
                </div>
                <div className="text-sm text-gray-400">Squad Availability</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  -66%
                </div>
                <div className="text-sm text-gray-400">
                  Non-Contact Injuries (Ogden, 2021)
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  Proactive
                </div>
                <div className="text-sm text-gray-400">
                  Risk Management (Qiao, 2022)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;
