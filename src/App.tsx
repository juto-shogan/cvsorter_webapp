import React, { useState } from 'react';
import { Upload, UserCircle, FileText } from 'lucide-react';
import CVUpload from './components/CVUpload';
import ManualAssessment from './components/ManualAssessment';

function App() {
  const [activeTab, setActiveTab] = useState<'upload' | 'manual'>('upload');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900">
      <nav className="bg-black shadow-lg border-b border-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-semibold text-white">CV Analyzer</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-black rounded-lg shadow-xl overflow-hidden border border-purple-800">
          <div className="border-b border-purple-900">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('upload')}
                className={`${
                  activeTab === 'upload'
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-purple-300 hover:border-purple-300'
                } flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base transition-colors duration-200`}
              >
                <Upload className="w-5 h-5 inline-block mr-2" />
                CV Upload
              </button>
              <button
                onClick={() => setActiveTab('manual')}
                className={`${
                  activeTab === 'manual'
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-purple-300 hover:border-purple-300'
                } flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base transition-colors duration-200`}
              >
                <UserCircle className="w-5 h-5 inline-block mr-2" />
                Manual Assessment
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'upload' ? <CVUpload /> : <ManualAssessment />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;