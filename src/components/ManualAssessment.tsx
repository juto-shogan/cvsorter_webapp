import React, { useState } from 'react';

const roles = [
  'software developer',
  'data scientist',
  'customer service',
  'cyber security',
];

const skillsByRole = {
  'software developer': [
    'python',
    'java',
    'c++',
    'javascript',
    'html',
    'css',
    'sql',
    'ruby',
    'php',
    'agile',
    'scrum',
    'restful APIs',
    'microservices',
    'devops',
    'git',
    'docker',
    'kubernetes',
  ],
  'data scientist': [
    'python',
    'r',
    'sql',
    'machine learning',
    'statistics',
    'data analysis',
    'data visualization',
    'big data',
    'deep learning',
    'natural language processing (NLP)',
    'time series analysis',
    'statistical modeling',
    'etl',
  ],
  'customer service': [
    'customer service',
    'communication',
    'problem solving',
    'teamwork',
    'adaptability',
    'active listening',
    'empathy',
    'conflict resolution',
    'phone etiquette',
    'email communication',
    'crm',
    'customer satisfaction',
  ],
  'cyber security': [
    'network security',
    'firewall',
    'encryption',
    'penetration testing',
    'incident response',
    'linux',
    'information security',
    'vulnerability assessment',
    'security analysis',
    'ids/ips',
    'siem',
    'risk management',
    'compliance',
  ],
};

function ManualAssessment() {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      role: selectedRole,
      skills: selectedSkills,
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Manual Assessment</h2>
        <p className="mt-1 text-sm text-gray-400">
          Input candidate information during the interview
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-300"
          >
            Role
          </label>
          <select
            id="role"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-black border-purple-800 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
          >
            <option value="">Select a role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {selectedRole && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Skills
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skillsByRole[selectedRole as keyof typeof skillsByRole].map(
                (skill) => (
                  <label
                    key={skill}
                    className="relative flex items-start py-2"
                  >
                    <div className="min-w-0 flex-1 text-sm">
                      <div className="select-none font-medium text-gray-300">
                        {skill}
                      </div>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                      <input
                        type="checkbox"
                        checked={selectedSkills.includes(skill)}
                        onChange={() => handleSkillToggle(skill)}
                        className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-purple-500 rounded bg-black"
                      />
                    </div>
                  </label>
                )
              )}
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Evaluate Candidate
          </button>
        </div>
      </form>
    </div>
  );
}

export default ManualAssessment;