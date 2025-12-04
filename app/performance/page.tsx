import { Activity, Target, Brain, Eye, Cpu } from 'lucide-react';

const Performance = () => {
  // Mapping Source names to be used in the JSX (matching your annotated bibliography)
  const sourceMapping = {
    Kidd: "Kidd", // Source 3
    'Liu & Liu': "Liu and Liu", // Source 9
    'Plakias et al.': "Plakias et al.", // Source 8
    Jacobs: "Jacobs", // Source 1
    'Munoz et al.': "Munoz-Macho et al.", // Source 7
  };

  const technologies = [
    { name: '3D Vision Tracking', value: '50+', label: 'Body Points Captured', source: sourceMapping.Kidd },
    { name: 'PFSTM Predictive Model', value: '95%', label: 'Skill Gain Accuracy', source: sourceMapping['Liu & Liu'] },
    { name: 'Opponent Analysis Window', value: '3', label: 'Matches Scanned', source: sourceMapping.Kidd },
    { name: 'Biomechanics Precision', value: '1 cm', label: 'Movement Resolution', source: sourceMapping.Kidd },
  ];

  const features = [
    {
      icon: Eye,
      title: 'Computer Vision Tracking',
      description: '3D tracking systems identify more than 50 anatomical landmarks per player, producing millimeter-level motion models. These datasets expose micro-faults in biomechanics that affect reaction time, recovery steps, and defensive orientation.',
      stat: '50+',
      statLabel: 'Body Points',
      color: 'from-cyan-500 to-blue-500',
      source: sourceMapping.Kidd,
    },
    {
      icon: Brain,
      title: 'Neural Network Analysis',
      description: 'Neural networks segment player actions, predict passing lanes, and classify tactical structures with high precision. Modern AI surpasses human pattern recognition by quantifying spatial occupation and tactical valence in real time.',
      stat: 'Deeper',
      statLabel: 'Insights',
      color: 'from-blue-500 to-purple-500',
      source: sourceMapping['Plakias et al.'],
    },
    {
      icon: Target,
      title: 'Personalized Training',
      description: "Liu and Liu's PFSTM isolates “lagging features” using concatenated learning networks. The model raised strategic awareness and passing accuracy with a predictive reliability of 95 percent, verifying targeted training effectiveness.",
      stat: '95%',
      statLabel: 'Accuracy',
      color: 'from-purple-500 to-pink-500',
      source: sourceMapping['Liu & Liu'],
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
              The integration of Artificial Intelligence (AI) and Machine Learning (ML) fundamentally redefines performance analysis in elite soccer, ensuring player efficiency and competitive advantage.
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
                <div className="text-xs text-gray-500">{tech.name} ({tech.source})</div>
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
                Precision Tracking & Biomechanics
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="bg-linear-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">From GPS to Deep Tech</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  AI integration evolved from basic statistical analyses to complex predictive modeling and real-time decision-making systems, harnessing AI for performance analysis, biomechanics, and sports technique (Jacobs; Munoz-Macho et al.).
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Data acquisition relies on tracking technologies like Global Positioning System (GPS) and Global Navigation Satellite System (GNSS) to monitor distances, speeds, decelerations, and accelerations constantly during training and matches (Munoz-Macho et al.). This continuous information helps precisely define what, when, and where actions occur (Munoz-Macho et al.).
                </p>
              </div>

              <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                    <span className="text-gray-300">Micro-posture correction is used to gain valuable milliseconds in anticipation (Kidd).</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                    <span className="text-gray-300">Predicting performance is achieved from anthropometric data and performance tests (Munoz-Macho et al.).</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                    <span className="text-gray-300">The utilization of Key Performance Indicators (KPIs) provides a nuanced understanding of physical demands on athletes (Munoz-Macho et al.).</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2" />
                    <span className="text-gray-300">AR/VR training tracks motion data, enabling players to practice against high-quality opponents (Jacobs).</span>
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
                      <p className="text-gray-400 leading-relaxed">{feature.description} ({feature.source}).</p>
                    </div>

                    <div className="md:col-span-3 text-center">
                      <div className={`text-5xl font-bold bg-linear-to-r ${feature.color} bg-clip-text text-transparent mb-2`}>
                        {feature.stat}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">{feature.statLabel}</div>
                      <div className="text-xs text-gray-500">({feature.source})</div>
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
          <div className="bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-12 space-y-10">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Tactical Intelligence and Real-Time Strategy
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-400">AI-Driven Game Planning and Analysis</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI provides a comprehensive view of opponents’ strategies, strengths, and vulnerabilities (Plakias et al.), and AI efficiency enables deeper scrutiny of team behavior (Plakias et al.).
                </p>
                <ul className="space-y-2 text-sm text-gray-300 bg-gray-800/50 rounded-lg p-4">
                  <li>AI tools allow coaches to study an opponent&apos;s past three matches to extract tendencies (Kidd).</li>
                  <li>This intelligence is used to build decision-tree simulations that project the opponent&apos;s most probable responses and prescribe optimal counter-tactics (Kidd).</li>
                  <li>ML algorithms expedite game footage review and aggregate hundreds of data points about player performance within minutes, vastly improving analysis efficiency (Jacobs).</li>
                  <li>AI is integrated into training to improve decision-making capabilities and functional responsibilities (Liu and Liu).</li>
                  <li>AI algorithms analyze gameplay data and optimize training methods, highlighting specific benefits in developing player skills and strategies (Liu and Liu).</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-purple-400">In-Game and Wellness Optimization</h3>
                <p className="text-gray-300 leading-relaxed">
                  The application of AI helps optimize player management to maintain peak condition and provide real-time competitive advantages.
                </p>
                <ul className="space-y-2 text-sm text-gray-300 bg-gray-800/50 rounded-lg p-4">
                  <li>AI and ML algorithms are used to predict performance and manage training load, which includes modeling complex systems like player wellness (Munoz-Macho et al.).</li>
                  <li>The utilization of Key Performance Indicators (KPIs) provides a nuanced understanding of physical demands during training and matches (Munoz-Macho et al.).</li>
                  <li>AI models support real-time decision-making, including providing early match forecasts to assist coaches in making well-informed substitution decisions (Munoz-Macho et al.).</li>
                  <li>AI-enhanced equipment can track player movements, enabling coaches and staff to make faster strategy decisions based on trends (Jacobs).</li>
                  <li>Training must ensure optimal performance without the risk of injury, using AI to determine when a player should engage in reduced or no-contact practices (Jacobs).</li>
                  <li>AI can also help develop recommendations for player wellness, including trip planning and sleep management (Munoz-Macho et al.).</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-cyan-400">AI Methodology in Performance Research</h3>
              <p className="text-gray-300 leading-relaxed">
                The core objective of Machine Learning (ML) is to enable machines to learn from data, thereby improving their performance on a given task without being explicitly programmed (Munoz-Macho et al.). Research validates that AI/ML is increasingly used in team sports (Munoz-Macho et al.).
              </p>
              <ul className="space-y-2 text-sm text-gray-300 bg-gray-800/50 rounded-lg p-4">
                <li>Of the 32 articles reviewed in one study, 15 articles focused on performance improvement (Munoz-Macho et al.).</li>
                <li>The most frequently used AI techniques include Tree-based methods (36%), Ada/XGBoost (19%), and Neural Networks (9%) (Munoz-Macho et al.).</li>
                <li>AI is applied to achieve performance enhancement, technical and tactical support, and talent identification (Munoz-Macho et al.).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance;