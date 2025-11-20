import { Activity, Target, Brain, Shield, Eye, Cpu } from 'lucide-react';

const Performance = () => {
  const technologies = [
    { name: '3D Computer Vision', value: '50+', label: 'Body Points Tracked' },
    { name: 'ML Neural Networks', value: '95%', label: 'Prediction Accuracy' },
    { name: 'Real-Time Analysis', value: '<100ms', label: 'Processing Latency' },
    { name: 'Movement Tracking', value: 'mm', label: 'Precision Level' },
  ];

  const features = [
    {
      icon: Eye,
      title: 'Computer Vision Tracking',
      description: 'Advanced 3D computer vision systems capture over 50 body points at millimeter-level precision, providing unprecedented insight into player movement, posture, and biomechanics.',
      stat: '50+',
      statLabel: 'Body Points',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Brain,
      title: 'Neural Network Analysis',
      description: 'Machine learning models analyze complex player movements to predict pass probabilities, identify tactical patterns, and optimize team formations in real-time.',
      stat: '95%',
      statLabel: 'Accuracy',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Target,
      title: 'Personalized Training',
      description: 'PFSTM (Performance-Focused Strategic Training Module) identifies individual "lagging features" to create customized training regimens that target specific skill gaps.',
      stat: '100%',
      statLabel: 'Customized',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Officiating Technology',
      description: 'AI-powered systems like Hawk-Eye, VAR, and Semi-Automated Offside Technology (SAOT) ensure fair play and accurate decision-making at the highest levels of competition.',
      stat: '99.9%',
      statLabel: 'Accuracy',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className={`relative pt-20 transition-opacity duration-1000`}>
      <div className="absolute inset-0 bg-linear-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none" />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
              <Activity className="text-blue-400" size={20} />
              <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Pillar 1</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Performance & Training
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              How AI provides precise data for skill optimization, tactical advantage, and on-field efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {tech.value}
                </div>
                <div className="text-sm text-gray-400 mb-1">{tech.label}</div>
                <div className="text-xs text-gray-500">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center">
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Precision Tracking: Beyond the Naked Eye
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="bg-linear-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">From GPS to Deep Tech</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Traditional GPS tracking has been revolutionized by advanced computer vision systems that provide
                  millimeter-level precision across multiple dimensions.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Modern systems capture biomechanical data that was previously impossible to obtain, enabling coaches
                  to identify and correct subtle technical flaws that impact performance.
                </p>
              </div>

              <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                    <span className="text-gray-300">Posture correction and biomechanical optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                    <span className="text-gray-300">Sprint mechanics and acceleration analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                    <span className="text-gray-300">Technical skill refinement through micro-analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2" />
                    <span className="text-gray-300">Movement pattern recognition and optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full h-96 bg-linear-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-500" />
                </div>
                <div className="relative z-10">
                  <Cpu size={120} className="text-cyan-400/30" />
                </div>
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-8">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-cyan-500/10 rounded animate-pulse"
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-opacity-100 transition-all duration-500 hover:scale-102 animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`} />

                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-2 flex justify-center">
                      <div className={`p-6 rounded-xl bg-linear-to-br ${feature.color} bg-opacity-20`}>
                        <Icon size={48} className="text-white" />
                      </div>
                    </div>

                    <div className="md:col-span-7">
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>

                    <div className="md:col-span-3 text-center">
                      <div className={`text-5xl font-bold bg-linear-to-r ${feature.color} bg-clip-text text-transparent mb-2`}>
                        {feature.stat}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">{feature.statLabel}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Tactical Intelligence and Real-Time Strategy
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-400">Machine Learning Models</h3>
                <p className="text-gray-300 leading-relaxed">
                  Neural networks process vast amounts of match data to identify tactical patterns, predict opponent
                  strategies, and suggest optimal formations based on real-time game conditions.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">Example Applications:</div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Pass probability prediction</li>
                    <li>• Defensive positioning optimization</li>
                    <li>• Space utilization analysis</li>
                    <li>• Player interaction modeling</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-purple-400">Strategic Formulation</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI systems analyze complex player movements to formulate winning strategies, identifying weaknesses
                  in opponent formations and suggesting tactical adjustments in real-time.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">Strategic Insights:</div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Opponent pattern recognition</li>
                    <li>• Formation effectiveness metrics</li>
                    <li>• Pressing trigger identification</li>
                    <li>• Transition opportunity detection</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center text-gray-400 text-sm">
              Source: Can artificial intelligence revolutionize soccer tactical analysis?
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance;
