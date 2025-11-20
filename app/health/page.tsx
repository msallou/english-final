import { Heart, TrendingDown, Shield, Activity, AlertTriangle, Check } from 'lucide-react';

const Health = () => {
  const stats = [
    { value: '66%', label: 'Injury Reduction', sublabel: 'Getafe Case Study', color: 'from-green-400 to-emerald-500' },
    { value: '99.6%', label: 'Prediction Precision', sublabel: 'ANN Model Accuracy', color: 'from-blue-400 to-cyan-500' },
    { value: '24/7', label: 'Monitoring', sublabel: 'Continuous Data Collection', color: 'from-purple-400 to-pink-500' },
    { value: '<1s', label: 'Alert Response', sublabel: 'Real-Time Risk Detection', color: 'from-orange-400 to-red-500' },
  ];

  const riskFactors = [
    { category: 'Physical Load', items: ['Training intensity', 'Match minutes', 'Sprint distance', 'Acceleration events'] },
    { category: 'Biomechanics', items: ['Movement asymmetry', 'Joint angles', 'Ground contact time', 'Force distribution'] },
    { category: 'Physiological', items: ['Heart rate variability', 'Sleep quality', 'Blood markers', 'Hydration levels'] },
    { category: 'Environmental', items: ['Playing surface', 'Weather conditions', 'Altitude', 'Recovery time'] },
  ];

  return (
    <div className={`relative pt-20 transition-opacity duration-1000`}>
      <div className="absolute inset-0 bg-linear-to-b from-green-950/20 via-transparent to-transparent pointer-events-none" />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-2 bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
              <Heart className="text-green-400" size={20} />
              <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">Pillar 2</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Health & Safety
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Compelling evidence of AI&apos;s success in predictive injury prevention and player wellness management
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`text-4xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sublabel}</div>
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
                  <h3 className="text-2xl font-bold text-red-400">The High-Stakes Problem</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">Financial Cost of Injuries</div>
                    <p className="text-gray-400 text-sm">
                      A single injury to a key player can cost clubs millions in lost performance, medical expenses,
                      and emergency transfer market activity.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">Squad Depletion</div>
                    <p className="text-gray-400 text-sm">
                      Multiple injuries severely limit tactical options and can derail entire seasons, affecting
                      competitive standings and revenue.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">Career Impact</div>
                    <p className="text-gray-400 text-sm">
                      Long-term injuries can permanently affect player development and career trajectories, especially
                      for younger athletes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="text-green-400" size={28} />
                  <h3 className="text-2xl font-bold text-green-400">The AI Solution</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">Zone7 Deep Learning</div>
                    <p className="text-gray-400 text-sm mb-3">
                      Advanced neural networks analyze millions of data points to identify subtle patterns that precede
                      injuries, often weeks before symptoms appear.
                    </p>
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <Check size={16} />
                      <span>Pattern recognition across multiple variables</span>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">Proven Results</div>
                    <p className="text-gray-400 text-sm mb-3">
                      Getafe CF implemented AI-driven injury prevention protocols and achieved a remarkable 66%
                      reduction in non-contact injuries.
                    </p>
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <Check size={16} />
                      <span>Quantified, measurable impact on player availability</span>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">Preventive Action</div>
                    <p className="text-gray-400 text-sm mb-3">
                      System provides actionable alerts allowing medical staff to adjust training loads, implement
                      recovery protocols, or rest players proactively.
                    </p>
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <Check size={16} />
                      <span>Real-time intervention before injury occurs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-12 mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">
              The Science of Risk Prediction
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Artificial Neural Network (ANN) Model</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Advanced ANN architectures process data from Wireless Sensor Networks (WSN) including GPS trackers,
                  heart rate monitors, and accelerometers to predict knee injury risk with exceptional precision.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.6%</div>
                  <div className="text-sm text-gray-400 mb-4">Prediction Precision Rate</div>
                  <p className="text-xs text-gray-500">
                    Source: The Application of Artificial Intelligence in Football Risk Prediction
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Data Integration</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The model continuously integrates multiple data streams to create a comprehensive risk profile for
                  each player:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Activity className="text-blue-400 mt-1 shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-semibold text-gray-300">Movement Data</div>
                      <div className="text-xs text-gray-500">GPS position, velocity, acceleration, deceleration</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="text-red-400 mt-1 shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-semibold text-gray-300">Physiological Markers</div>
                      <div className="text-xs text-gray-500">Heart rate, HRV, blood chemistry, fatigue indicators</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingDown className="text-yellow-400 mt-1 shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-semibold text-gray-300">Load Metrics</div>
                      <div className="text-xs text-gray-500">Training intensity, match exposure, recovery time</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-green-400 mt-1 shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-semibold text-gray-300">Biomechanics</div>
                      <div className="text-xs text-gray-500">Joint angles, force distribution, movement asymmetry</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Multifactorial Player Health Monitoring
              </span>
            </h2>

            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Health prediction involves comprehensive monitoring beyond just physical load, integrating biomechanical
              analysis, wellness indicators, and internal physiological markers.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {riskFactors.map((factor, index) => (
                <div
                  key={factor.category}
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-bold text-purple-400 mb-4">{factor.category}</h3>
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

            <div className="mt-8 text-center text-sm text-gray-500">
              Source: Performance and healthcare analysis in elite soccer via machine learning
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
            <h2 className="text-3xl font-bold mb-6">The Competitive Advantage</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Clubs implementing AI-driven injury prevention maintain higher player availability, reduce medical costs,
              and gain a decisive competitive edge through optimal squad management and strategic roster planning.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">+20%</div>
                <div className="text-sm text-gray-400">Player Availability</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">-66%</div>
                <div className="text-sm text-gray-400">Non-Contact Injuries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">€Ms</div>
                <div className="text-sm text-gray-400">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;
