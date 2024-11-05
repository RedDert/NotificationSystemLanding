import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Installation: React.FC = () => {
  const [installationContent, setInstallationContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/RedDert/notificationSystem/readme',
          {
            headers: {
              Accept: 'application/vnd.github.v3.raw',
            },
          }
        );

        if (response.ok) {
          const readmeContent = await response.text();
          const installationMatch = readmeContent.match(
            /## Installation([\s\S]*?)(## |$)/
          );

          if (installationMatch) {
            setInstallationContent(installationMatch[1].trim());
          } else {
            setInstallationContent("Installation section not found.");
          }
        } else {
          setInstallationContent("Unable to load installation instructions.");
        }
      } catch (error) {
        setInstallationContent("Unable to load installation instructions.");
      }
    };

    fetchReadme();
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

