/* Experience.js — section number updated to 04 */

import './Experience.css';

const ENTRIES = [
  {
    id: 1,
    date: '2022 — present',
    role: 'BS Computer Science',
    org: 'University of Santo Tomas, Manila',
    bullets: [
      'Focus on AI, NLP, and data engineering.',
      'Led thesis project EmoTox — a hybrid CNN–LSTM / BiLSTM ensemble for toxicity detection via emotion and sarcasm analysis.',
      'Active in machine learning and cybersecurity modules.',
    ],
    tags: ['AI/ML', 'NLP', 'Data Engineering', 'Cybersecurity'],
  },
  {
    id: 2,
    date: '2024',
    role: 'OJT Intern',
    org: 'Rakso Computer Technology Inc.',
    bullets: [
      'Hands-on experience in a professional tech environment.',
      'Contributed to internal tooling and software development tasks.',
      'Bridged academic ML knowledge with real-world application requirements.',
    ],
    tags: ['Internship', 'Software Development'],
  },
  {
    id: 3,
    date: '2023 — 2024',
    role: 'Certifications',
    org: 'AWS · Google Cloud · TryHackMe',
    bullets: [
      'AWS: ML Basics, Cloud Game Development.',
      'Google Cloud Skills Boost — data and ML track.',
      'TryHackMe — SOC / Blue Team pathway.',
    ],
    tags: ['AWS', 'GCP', 'TryHackMe', 'Cloud', 'Security'],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>

      <div className="experience__timeline">
        {ENTRIES.map((entry) => (
          <div key={entry.id} className="experience__entry">
            <p className="experience__date">{entry.date}</p>
            <h3 className="experience__role">{entry.role}</h3>
            <p className="experience__org">{entry.org}</p>
            <ul className="experience__desc">
              {entry.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            {entry.tags.length > 0 && (
              <div className="experience__tags">
                {entry.tags.map((tag) => (
                  <span key={tag} className="experience__tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;