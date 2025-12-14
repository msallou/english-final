/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/static-components */
"use client"

import { BookOpen, FileText, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const References = () => {
  const [view, setView] = useState<'visual' | 'mla'>('mla');
  const scholarlyReferences = [
    {
      title: 'Performance and Healthcare Analysis in Elite Sports Teams Using Artificial Intelligence: A Scoping Review',
      authors: 'Munoz-Macho, A. A., et al.',
      journal: 'Frontiers in Sports and Active Living',
      year: '2024',
      description:
        'Scoping review confirming that AI and ML are primarily used for performance enhancement and injury prevention in elite sports through predictive modeling and athlete-health analytics.',
      type: 'Scholarly',
      link: 'https://doi.org/10.3389/fspor.2024.1383723',
    },
    {
      title: 'Can Artificial Intelligence Revolutionize Soccer Tactical Analysis?',
      authors: 'Plakias, S., et al.',
      journal: 'TSS Journal',
      year: '2024',
      description:
        'Academic review explaining how AI is redefining tactical analysis through predictive analytics and spatial-tracking systems that support coaching strategy and performance optimization.',
      type: 'Scholarly',
      link: 'https://doi.org/10.23829/TSS.2024.31.3-3',
    },
    {
      title: 'The Application of Artificial Intelligence Technology in the Tactical Training of Football Players',
      authors: 'Liu, C., & Liu, H.',
      journal: 'Entertainment Computing',
      year: '2024',
      description:
        'Presents the PFSTM training module using a concatenated learning network to identify players’ lagging features and improve tactical awareness with a predictive accuracy of 95 percent.',
      type: 'Scholarly',
      link: 'https://doi.org/10.1016/j.entcom.2024.100913',
    },
    {
      title: 'The Application of Artificial Intelligence in Football Risk Prediction',
      authors: 'Zhang, L., et al.',
      journal: 'PMC Research Article (ANN and WSN model)',
      year: '2022',
      description:
        'Demonstrates an ANN-WSN system that predicts injury risk using wearable sensor data, achieving 99.6 percent precision for early detection of high-risk conditions.',
      type: 'Scholarly',
      link: 'http://orbiscascade-washington.primo.exlibrisgroup.com/discovery/fulldisplay?context=PC&vid=01ALLIANCE_UW:UW&search_scope=UW_EVERYTHING&tab=UW_default&docid=cdi_pubmedcentral_primary_oai_pubmedcentral_nih_gov_9208919',
    },
  ];


  const popularReferences = [
    {
      title: 'AI in Sports: Transforming Fan Experience and Team Strategy',
      source: 'American Military University',
      author: 'Dr Brittany Jacobs',
      year: '2024',
      description:
        'Explains how AI is reshaping performance analysis, officiating, stadium security, and fan engagement across the global sports industry.',
      type: 'Popular',
      link: 'http://www.amu.apus.edu/area-of-study/health-sciences/resources/ai-in-sports',
    },
    {
      title: 'Soccer Looks to AI for an Edge: Could an Algorithm Really Predict Injuries?',
      source: 'ESPN',
      author: 'Mark Ogden',
      year: '2021',
      description:
        'Covers real-world adoption of injury-risk AI systems such as Zone7, including Getafe’s reported 66 percent reduction in non-contact injuries.',
      type: 'Popular',
      link: 'http://www.espn.com/soccer/story/_/id/37613690/algorithm-really-predict-injuries',
    },
    {
      title: 'AI Is Changing Soccer Analysis — How We Watch the Game Could Be Next',
      source: 'Forbes',
      author: 'Robert Kidd',
      year: '2025',
      description:
        'Discusses how 3D computer vision tech captures millimeter-level movement data and is set to transform both elite performance and fan experience.',
      type: 'Popular',
      link: 'http://www.forbes.com/sites/robertkidd/2025/06/10/ai-is-changing-soccer-analysis---how-we-watch-the-game-could-be-next',
    },
    {
      title: 'How AI-Powered Recruiting Helps Spain’s Leading Soccer Team Score',
      source: 'IBM Case Study',
      author: 'Jessica Gordon',
      year: '2025',
      description:
        'Details Sevilla FC’s use of watsonx Scout Advisor and NLP to analyze more than 200,000 qualitative scouting reports for improved recruitment decisions.',
      type: 'Popular',
      link: 'http://www.ibm.com/case-studies/blog/watsonx-scout-advisor-fc-sevilla',
    },
    {
      title: 'Top 10 Ways AI Is Revolutionizing Player Scouting and Recruitment',
      source: 'Playbook Sports',
      author: 'Dr. Marcus Johnson',
      year: '2025',
      description:
        'Breaks down how AI transforms scouting through predictive analytics, psychological profiling, development planning, and data-driven recruitment pipelines.',
      type: 'Popular',
      link: 'http://www.callplaybook.com/reports/top-10-ai-scouting-and-recruitment',
    },
    {
      title: 'Risks and Benefits of AI Use in Football',
      source: 'Sports Ethics Journal / FC Data Ethics Report',
      author: 'Álvaro González',
      year: '2024',
      description:
        'Examines the ethical issues in AI deployment including data privacy, algorithmic bias, opaque decision systems, and career-impact risks.',
      type: 'Popular',
      link: 'http://barcainnovationhub.fcbarcelona.com/blog/risks-and-benefits-of-ai-use-in-football',
    },
  ];

  const ScholarlyMLA = ({ refs }: { refs: any[] }) => (
  <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
    {refs.map((r, i) => (
      <li key={i}>
        {r.authors}. “{r.title}.” <i>{r.journal}</i>, {r.year},
        <Link href={r.link} target='_blank' className="text-blue-400 ml-1 underline">{r.link}</Link>.
      </li>
    ))}
  </ul>
);

const PopularMLA = ({ refs }: { refs: any[] }) => (
  <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
    {refs.map((r, i) => (
      <li key={i}>
        {r.author}. “{r.title}.” <i>{r.source}</i>, {r.year},
        <Link href={r.link} target='_blank' className="text-purple-400 ml-1 underline">{r.link}</Link>.
      </li>
    ))}
  </ul>
);


  return (
    <div className={`relative pt-20 transition-opacity duration-1000 opacity-100`}>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-2 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <BookOpen className="text-cyan-400" size={20} />
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Resources</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Works Cited
            </h1>
          </div>

          <div className="flex justify-center mb-5">
            <button
              onClick={() => setView(view === 'visual' ? 'mla' : 'visual')}
              className="px-6 py-2 rounded-full border border-gray-500/40 text-sm font-semibold hover:bg-gray-800/60 transition"
            >
              {view === 'visual' ? 'View MLA Format' : 'View Visual Format'}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-linear-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-8 text-center">
              <FileText className="mx-auto mb-4 text-blue-400" size={48} />
              <div className="text-4xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-sm text-gray-400">Scholarly Sources</div>
            </div>

            <div className="bg-linear-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8 text-center">
              <BookOpen className="mx-auto mb-4 text-purple-400" size={48} />
              <div className="text-4xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-sm text-gray-400">Popular Sources</div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Scholarly References
              </span>
            </h2>

            {/* <div className="space-y-6">
              {scholarlyReferences.map((ref, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-102 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {ref.type}
                    </span>
                  </div>
                  <Link href={ref.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-bold mb-3 text-blue-400 underline underline-offset-3">{ref.title}</h3>
                  </Link>

                  <div className="text-sm text-gray-400 mb-4">
                    <span className="font-semibold">{ref.authors}</span> • {ref.journal} • {ref.year}
                  </div>

                  <p className="text-gray-300 leading-relaxed">{ref.description}</p>
                </div>
              ))}
            </div> */}
            {view === 'visual' ? (
              <div className="space-y-6">
                {scholarlyReferences.map((ref, index) => (
                  <div
                  key={index}
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-102 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {ref.type}
                    </span>
                  </div>
                  <Link href={ref.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-bold mb-3 text-blue-400 underline underline-offset-3">{ref.title}</h3>
                  </Link>

                  <div className="text-sm text-gray-400 mb-4">
                    <span className="font-semibold">{ref.authors}</span> • {ref.journal} • {ref.year}
                  </div>

                  <p className="text-gray-300 leading-relaxed">{ref.description}</p>
                </div>
                ))}
              </div>
            ) : (
              <ScholarlyMLA refs={scholarlyReferences} />
            )}


          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Popular References
              </span>
            </h2>

            {/* <div className="space-y-6">
              {popularReferences.map((ref, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-102 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      {ref.type}
                    </span>
                  </div>
                  <Link href={ref.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-bold mb-3 text-purple-400 underline underline-offset-3">{ref.title}</h3>
                  </Link>

                  <div className="text-sm text-gray-400 mb-4">
                    <span className="font-semibold">{ref.author} • </span>{ref.source} • {ref.year}
                  </div>

                  <p className="text-gray-300 leading-relaxed">{ref.description}</p>
                </div>
              ))}
            </div> */}

              {view === 'visual' ? (
                <div className="space-y-6">
                  {popularReferences.map((ref, index) => (
                    <div
                  key={index}
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-102 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      {ref.type}
                    </span>
                  </div>
                  <Link href={ref.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-bold mb-3 text-purple-400 underline underline-offset-3">{ref.title}</h3>
                  </Link>

                  <div className="text-sm text-gray-400 mb-4">
                    <span className="font-semibold">{ref.author} • </span>{ref.source} • {ref.year}
                  </div>

                  <p className="text-gray-300 leading-relaxed">{ref.description}</p>
                </div>
                  ))}
                </div>
              ) : (
                <PopularMLA refs={popularReferences} />
              )}


          </div>
        </div>
      </section>
    </div>
  );
};

export default References;