'use client'

import { ChevronRight, TrendingUp, Heart, Users, Scale, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  // Mapping Source names for citation
  const sourceMapping = {
    Liu: "Liu and Liu",
    Ogden: "Ogden (ESPN)",
    Gordon: "Gordon (IBM)",
    FCB: "FCBarcelona.com",
    Kidd: "Kidd",
    Jacobs: "Jacobs",
    Qiao: "Qiao",
  };

  const pillars = [
    {
      id: 'performance',
      icon: TrendingUp,
      title: 'Performance & Training',
      description: `Precision tracking beyond the naked eye with 3D computer vision capturing 50+ body points at centimeter-level (Kidd).`,
      color: 'from-cyan-500 to-blue-500',
      stat: '95%',
      statLabel: `Skill Accuracy (Liu and Liu)`,
      url: '/performance',
    },
    {
      id: 'health',
      icon: Heart,
      title: 'Health & Safety',
      description: `Predictive injury modeling using deep learning. Getafe achieved a 66% reduction in non-contact injuries (Ogden (ESPN)).`,
      color: 'from-green-500 to-emerald-500',
      stat: '99.6%',
      statLabel: `Prediction Precision (Qiao)`,
      url: '/health',
    },
    {
      id: 'strategy',
      icon: Users,
      title: 'Strategy & Recruitment',
      description: `AI-powered scouting analyzing 200,000+ qualitative reports using NLP to identify undervalued players (Gordon (IBM)).`,
      color: 'from-blue-500 to-purple-500',
      stat: '200K+',
      statLabel: `Reports Analyzed (Gordon (IBM))`,
      url: '/strategy',
    },
    {
      id: 'ethics',
      icon: Scale,
      title: 'Ethics & Regulation',
      description: `Addressing the black box problem and ensuring compliance with EU AI Act regulations, including human oversight (FCBarcelona.com).`,
      color: 'from-orange-500 to-red-500',
      stat: '€35M',
      statLabel: `Max Non-Compliance Penalty (FCBarcelona.com)`,
      url: '/ethics',
    },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-linear-to-b from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className={`relative max-w-5xl mx-auto text-center transition-all duration-1000 transform`}>
          <div className="inline-block mb-6 px-6 py-2 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm animate-fade-in">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">The Revolution is Real</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The AI Revolution:
            <span className="block mt-2 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Transforming Football
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From the Pitch to the Boardroom
          </p>

          <div className="prose prose-invert prose-lg max-w-4xl mx-auto mb-12">
            <p className="text-gray-400 leading-relaxed">
              Artificial Intelligence is fundamentally and irrevocably transforming elite soccer by enabling unprecedented data-driven improvements in player performance [Liu and Liu; Munoz-Macho et al.], significantly enhancing injury prediction and prevention [Ogden (ESPN); Qiao], and revolutionizing off-field strategic decisions like recruitment [Gordon (IBM); Playbook Sports]; however, the successful implementation of this technology requires rigorous attention to ethical considerations, including data privacy and algorithmic bias [FCBarcelona.com].
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <span>Explore the Four Pillars</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Beyond the 1% Marginal Gain
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The immense economic stakes underscore the necessity of adopting cutting-edge analytical tools (Jacobs).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                $2.2B
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider mb-4">2022 Market Value</div>
              <p className="text-gray-500 text-sm">Current AI sports analytics market valuation (Jacobs).</p>
            </div>

            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                $29.7B
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider mb-4">2032 Projection</div>
              <p className="text-gray-500 text-sm">Expected market growth over the next decade (Jacobs).</p>
            </div>

            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                1250%
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider mb-4">Growth Rate</div>
              <p className="text-gray-500 text-sm">Exponential expansion of AI implementation, fueled by technology adoption (Jacobs).</p>
            </div>
          </div>

          <div className="bg-linear-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-8 mb-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-green-400 mb-3">Featured Case Study</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  How Getafe slashed non-contact injuries by <span className="text-green-400 font-bold">66%</span> using
                  data science and predictive AI modeling [Ogden (ESPN)].
                </p>
              </div>
              
              <Link
                href="/health"
                className="group flex items-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-400 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
              >
                <span>Read More</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Four Pillars of AI Transformation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore how artificial intelligence is reshaping every aspect of modern football
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.id}
                  className={`group relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-opacity-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  href={pillar.url}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${pillar.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`} />

                  <div className={`inline-flex p-3 rounded-lg bg-linear-to-br ${pillar.color} bg-opacity-20 mb-6`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:bg-linear-to-r group-hover:bg-clip-text" style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}>
                    {pillar.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                    <div>
                      <div className={`text-3xl font-bold bg-linear-to-r ${pillar.color} bg-clip-text text-transparent`}>
                        {pillar.stat}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{pillar.statLabel}</div>
                    </div>
                    <ChevronRight className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-300" size={24} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}