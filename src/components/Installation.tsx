import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { strings } from '../data/strings';

const Installation: React.FC = () => {
  const [installationContent, setInstallationContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstallationInstructions = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/${strings.org}/${strings.repo}/main/README.md`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch installation instructions');
        }

        const text = await response.text();

        // Optional: Use a regex to extract only the "Installation" section
        const installationMatch = text.match(/## Installation([\s\S]*?)(## |$)/);
        const installationInstructions = installationMatch
          ? installationMatch[1].trim()
          : 'Installation section not found.';

        setInstallationContent(installationInstructions);
      } catch (error) {
        console.error(error);
        setInstallationContent('Unable to load installation instructions.');
      }
    };

    fetchInstallationInstructions();
  }, []);

  return (
    <section className="py-20 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6">Installation</h2>
      {installationContent ? (
        <div className="prose mx-auto">
          <ReactMarkdown>{installationContent}</ReactMarkdown>
        </div>
      ) : (
        <p className="text-center">Loading installation instructions...</p>
      )}
    </section>
  );
};

export default Installation;

