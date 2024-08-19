import React, { useState, useEffect, useRef, useCallback } from 'react';

const tabs = [
  { id: 'overview', title: 'Overview' },
  { id: 'design', title: 'Design' },
  { id: 'development', title: 'Development' },
  { id: 'deployment', title: 'Deployment' },
  { id: 'technologies', title: 'Technologies Used' },
];

const tabContent = {
  overview: "This section provides an overview of the project, its purpose, and objectives.",
  design: "In this section, I discuss the design choices, including color schemes, layouts, and tools used.",
  development: "Here, I explain the development process, the challenges I faced, and how I overcame them.",
  deployment: "This section covers the deployment process, the hosting platform, and how the site was launched.",
  technologies: "A list of the technologies and tools used in the project, including any libraries or frameworks.",
};

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVertical, setIsVertical] = useState(true);
  const containerRef = useRef(null);

  const updateLayout = useCallback(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setIsVertical(width < 600); // Switch to column layout if width is less than 600px
    }
  }, []);

  useEffect(() => {
    updateLayout(); // Check layout on mount
    window.addEventListener('resize', updateLayout); // Update on resize
    return () => window.removeEventListener('resize', updateLayout); // Cleanup on unmount
  }, [updateLayout]);

  return (
    <div
      ref={containerRef}
      className={`p-2 flex ${isVertical ? 'flex-col' : 'flex-row'} bg-gray-100 border border-gray-600 h-full`}
      style={{ fontFamily: 'Verdana, sans-serif' }}
    >
      <div className={`flex ${isVertical ? 'flex-row mb-2' : 'flex-col mr-2'} bg-gray-300 border-r-2 border-gray-600 gap-2 p-2`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`border border-gray-600 p-2 text-left ${activeTab === tab.id ? 'bg-white text-black' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
            style={{
              boxShadow: activeTab === tab.id ? 'inset 2px 2px 0px #fff, inset -2px -2px 0px #bbb' : '2px 2px 0px #aaa',
              fontSize: '14px',
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="flex-grow bg-white p-4 border border-gray-600 shadow-inner">
        <h2 className="font-bold text-lg mb-2 underline">{tabs.find((tab) => tab.id === activeTab)?.title}</h2>
        <p className="text-sm">{tabContent[activeTab]}</p>
      </div>
    </div>
  );
};

export default InfoTabs;
