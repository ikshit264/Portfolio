export interface CommandOutput {
    command: string;
    result: string;
  }
  
  export const handleCommand = (
    command: string,
    setOutput: React.Dispatch<React.SetStateAction<CommandOutput[]>>
  ) => {
    const handleHelp = () => {
      setOutput((prevOutput) => [
        ...prevOutput,
        { command, result: "Available commands: help, about, git checkout github, docs, cv, work, projects, education, achievements, skills, contact, exit, clear" }
      ]);
    };
  
    const showAbout = () => {
      setOutput((prevOutput) => [
        ...prevOutput,
        { command, result: "I am a developer with a focus on web technologies..." }
      ]);
    };
  
    const handleDocs = () => {
      setOutput((prevOutput) => [
        ...prevOutput,
        { command, result: "Documentation is available at: https://yourwebsite.com/docs" }
      ]);
    };
  
    const downloadResume = () => {
      setOutput((prevOutput) => [
        ...prevOutput,
        { command, result: "Downloading resume..." }
      ]);
      // Logic to download resume
    };
  
    const showWork = () => {
      setOutput((prevOutput) => [
        ...prevOutput,
        { command, result: "Here is a list of my work experience..." }
      ]);
    };
  
    const showProject = () => {
      setOutput((prevOutput) => [
        ...prevOutput,
        { command, result: "Here is a list of my projects..." }
      ]);
    };
  
    const showEducation = () => {
      setOutput((prevOutput) => [
        ...prevOutput,
        { command, result: "Here is my educational background..." }
      ]);
    };
  
    const showAchievements = () => {
      setOutput((prevOutput) => [
        ...prevOutput,
        { command, result: "Here are some of my achievements..." }
      ]);
    };
  
    const showSkills = () => {
      setOutput((prevOutput) => [
        ...prevOutput,
        { command, result: "Here are some of my skills..." }
      ]);
    };
  
    const showContact = () => {
      setOutput((prevOutput) => [
        ...prevOutput,
        { command, result: "You can contact me via email at example@example.com" }
      ]);
    };
  
    switch (command) {
      case 'man':
        // Add man command logic
        break;
      case 'help':
      case 'ls':
        handleHelp();
        break;
      case 'about':
        showAbout();
        break;
      case 'git checkout github':
        window.open('https://github.com/ikshit264', '_blank');
        setOutput((prevOutput) => [
          ...prevOutput,
          { command, result: "Opened GitHub in a new tab." }
        ]);
        break;
      case 'docs':
        handleDocs();
        break;
      case 'cv':
        downloadResume();
        break;
      case 'work':
        showWork();
        break;
      case 'projects':
        showProject();
        break;
      case 'education':
        showEducation();
        break;
      case 'achievements':
        showAchievements();
        break;
      case 'skills':
        showSkills();
        break;
      case 'contact':
        showContact();
        break;
      case 'exit':
        setOutput((prevOutput) => [
          ...prevOutput,
          { command, result: '> Thank You for visiting my website, thanks :)' }
        ]);
        break;
      case 'clear':
        setOutput([]);
        break;
      default:
        setOutput((prevOutput) => [
          ...prevOutput,
          { command, result: `Command not found: ${command} ` }
        ]);
        break;
    }
  };
  