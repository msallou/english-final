import {
  Users,
  Search,
  TrendingUp,
  DollarSign,
  Target,
  FileText,
  BarChart3,
  Activity,
} from "lucide-react";

const Strategy = () => {
  // Mapping Source names to be used in the JSX (matching your annotated bibliography)
  const sourceMapping = {
    IBM: "Gordon, 2025", // Source 4
    Playbook: "Playbook Sports, 2025", // Source 5
    Plakias: "Plakias et al., 2024", // Source 8
    Jacobs: "Jacobs, 2024", // Source 1
    FCB: "FCBarcelona.com, 2025", // Source 6
    Munoz: "Munoz-Macho et al., 2024", // Source 7
  };

  // STAT BLOCK DATA
  const statData = [
    // Source 4: Sevilla FC had over 200,000 reports
    {
      value: "200K+",
      label: "Scout Reports Analyzed",
      sublabel: "Sevilla FC Case Study",
      source: sourceMapping.IBM,
      color: "from-blue-400 to-purple-500",
    },
    // Source 4: Qualitative analysis was previously 200-300 hours per player for 40 reports. NLPs drastically reduce this time (efficiency gain).
    {
      value: "200+",
      label: "Hours Saved/Player",
      sublabel: "Qualitative Data Processing",
      source: sourceMapping.IBM,
      color: "from-purple-440 to-pink-500",
    },
    // Source 5: AI fundamentally changes scouting from basic statistics.
    {
      value: "4D",
      label: "Analysis Dimensions",
      sublabel: "Physical, Technical, Tactical, Psychological",
      source: sourceMapping.Playbook,
      color: "from-green-400 to-emerald-500",
    },
    // Source 5: Mentions reducing scouting time by up to 70% in academies.
    {
      value: "70%",
      label: "Scouting Time Reduction",
      sublabel: "Video Analysis Automation",
      source: sourceMapping.Playbook,
      color: "from-cyan-400 to-blue-500",
    },
  ];

  // SCOUTING DIMENSIONS (Synthesized from multiple sources, predominantly Playbook)
  const scoutingDimensions = [
    // Source 5: Physical performance metrics
    {
      icon: Activity,
      title: "Physical",
      metrics: [
        "Physical performance metrics",
        "Injury history/risk assessment",
        "Development trajectory",
      ],
      color: "from-red-500 to-orange-500",
    },
    // Source 5: Technical skills assessment
    {
      icon: Target,
      title: "Technical",
      metrics: [
        "Technical skills assessment",
        "Skills refinement",
        "Automated event tagging",
        "Player tracking",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    // Source 5: Tactical understanding, Opposition pattern recognition
    {
      icon: BarChart3,
      title: "Tactical",
      metrics: [
        "Tactical understanding",
        "Opposition pattern recognition",
        "Formation and shape analysis",
        "Pressing triggers",
      ],
      color: "from-green-500 to-emerald-500",
    },
    // Source 5: Psychological profiling, Mental resilience
    {
      icon: Users,
      title: "Psychological",
      metrics: [
        "Psychological profiling",
        "Mental resilience",
        "Cognitive functions",
        "Leadership potential",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className={`relative pt-20 transition-opacity duration-1000`}>
      <div className="absolute inset-0 bg-linear-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none" />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
              <Users className="text-blue-400" size={20} />
              <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                Pillar 3
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Strategy & Recruitment
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              AI is fundamentally changing how teams build their rosters. The
              process moves from relying solely on scout intuition to using
              data-driven insights for strategic decision-making (Playbook
              Sports; Jacobs).
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {statData.map((stat) => (
              <div
                key={stat.label}
                className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.sublabel} ({stat.source})
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
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                The End of Gut Instinct: Comprehensive Scouting
              </span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto">
              AI systems analyze vast amounts of data from multiple sources,
              providing an unprecedented level of insight into a player’s
              potential and fit. This minimizes the risk of overlooking talent
              due to human bias (Playbook Sports).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {scoutingDimensions.map((dimension, index) => {
              const Icon = dimension.icon;
              return (
                <div
                  key={dimension.title}
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-opacity-100 transition-all duration-500 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`inline-flex p-3 rounded-lg bg-linear-to-br ${dimension.color} bg-opacity-20 mb-4`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4">{dimension.title}</h3>

                  <ul className="space-y-2">
                    {dimension.metrics.map((metric) => (
                      <li key={metric} className="flex items-start space-x-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${dimension.color} mt-2 shrink-0`}
                        />
                        <span className="text-sm text-gray-400">{metric}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-gray-500 mt-4">
                    ({sourceMapping.Playbook})
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-12">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Methodology: Data-Driven Discovery
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Search className="text-blue-400" size={28} />
                  <h4 className="text-xl font-bold text-blue-400">
                    Automated Analysis and Efficiency
                  </h4>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The analytical speed of AI systems is a beneficial aspect
                  (Jacobs, 2024). AI-powered video analysis can process hours of
                  footage in minutes, automating event tagging and generating
                  instant scouting reports (Playbook Sports).
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>
                      AI tracks player movements to spot rising stars (Jacobs,
                      2024).
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>
                      Clubs utilize computer vision and deep learning for
                      tactical analysis (Plakias et al., 2024).
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>
                      AI sifts through millions of objective data points to
                      match team needs (FCBarcelona.com, 2025).
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="text-purple-400" size={28} />
                  <h4 className="text-xl font-bold text-purple-400">
                    Predictive Modeling and Risk
                  </h4>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Predictive analytics can forecast a player&apos;s future
                  performance and development trajectory with remarkable
                  accuracy (Playbook Sports). This helps teams invest in
                  undervalued players before their market value skyrockets
                  (Playbook Sports).
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span>
                      AI models predict potential peak performance (Playbook
                      Sports).
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span>
                      Risk analysis includes predicting how well a player might
                      fit into different tactical systems (Playbook Sports).
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span>
                      Long trips and sometimes unreliable scout reports are no
                      longer necessary (FCBarcelona.com, 2025).
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center">
              <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Generative AI for Qualitative Decisions
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="bg-linear-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="text-green-400" size={32} />
                  <h3 className="text-2xl font-bold text-green-400">
                    Sevilla FC Case Study ({sourceMapping.IBM})
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Sevilla FC implemented &quot;Scout Advisor,&quot; an
                  AI-powered system using Natural Language Processing (NLP)
                  built on the IBM watsonx platform. The primary goal was to
                  efficiently analyze their massive database of over 200,000
                  qualitative scout reports (Gordon, 2025).
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">
                      Qualitative Analysis
                    </div>
                    <p className="text-gray-400 text-sm">
                      NLP processes subjective assessments like player attitude,
                      character, team fit, and alignment with team philosophy
                      (Gordon, 2025). Scout reports must include qualitative
                      data alongside quantitative metrics like pass percentages
                      (Gordon, 2025).
                    </p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">
                      High-Stakes Decisions
                    </div>
                    <p className="text-gray-400 text-sm">
                      Scout Advisor confirms that clubs are never going to sign
                      a player with data alone, but never without resorting to
                      data either (Gordon, 2025). This ensures better decisions
                      on multi-million-dollar investments (Gordon, 2025).
                    </p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">
                      Efficiency Gains
                    </div>
                    <p className="text-gray-400 text-sm">
                      The process of extracting qualitative information was
                      previously much slower than accessing quantitative data
                      (Gordon, 2025). The AI solves the &quot;avalanche of
                      paperwork&quot; that plagued the club (Gordon, 2025).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h4 className="text-xl font-bold mb-4 text-cyan-400">
                  Key Qualitative Factors
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Player Attitude",
                    "Work Ethic",
                    "Team Chemistry",
                    "Leadership",
                    "Adaptability",
                    "Mental Strength",
                    "Cultural Fit",
                    "Communication",
                  ].map((factor) => (
                    <div key={factor} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-sm text-gray-300">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h4 className="text-xl font-bold mb-4 text-purple-400">
                  NLP Capabilities
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                    <span className="text-gray-300 text-sm">
                      NLP processes prompts in natural language to generate
                      richer search results, such as searching for
                      &quot;talented winger&quot; (Gordon, 2025).
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                    <span className="text-gray-300 text-sm">
                      The solution presents a curated list of players matching
                      the semantic search criteria (Gordon, 2025).
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                    <span className="text-gray-300 text-sm">
                      The NLP system uses semantic language to provide richer
                      search results (Gordon, 2025).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Financial Optimization
            </h2>

            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              AI informs the business side of player acquisition, helping clubs
              maximize their budget and avoid costly mistakes in the transfer
              market (Playbook Sports).
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <DollarSign className="text-yellow-400" size={40} />
                </div>
                <h4 className="text-lg font-bold text-center mb-3 text-yellow-400">
                  Transfer Market Analysis
                </h4>
                <p className="text-sm text-gray-400 text-center">
                  Advanced algorithms can predict how a player&apos;s value
                  might change over time, helping clubs decide the optimal time
                  to buy, sell, or renew contracts (Playbook Sports).
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <BarChart3 className="text-orange-400" size={40} />
                </div>
                <h4 className="text-lg font-bold text-center mb-3 text-orange-400">
                  Contract Valuation
                </h4>
                <p className="text-sm text-gray-400 text-center">
                  Data-driven assessment of player worth ensures competitive yet
                  financially sustainable contract offers, ensuring better
                  return on investment (ROI) for acquisitions (Playbook Sports).
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="text-red-400" size={40} />
                </div>
                <h4 className="text-lg font-bold text-center mb-3 text-red-400">
                  Global Talent Mapping
                </h4>
                <p className="text-sm text-gray-400 text-center">
                  AI helps optimize scouting resources by identifying
                  undervalued talent markets and regions most likely to produce
                  compatible players (Playbook Sports). This replaces the long
                  trips previously undertaken (FCBarcelona.com, 2025).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strategy;
