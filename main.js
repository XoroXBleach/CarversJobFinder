document.addEventListener("DOMContentLoaded", () => {
    const questions = [
      "Software Development",       // 0
      "Hardware Development",       // 1
      "Person-to-person interaction", // 2
      "Computer Networking",        // 3
      "Game Development",           // 4
      "Database Management",        // 5
      "DevOps",                     // 6
      "Mobile App Development",     // 7
      "API & Web Development",      // 8
      "Incident Response",          // 9
      "Digital Forensics",          // 10
      "AI & Machine Learning",      // 11
      "Cloud Development",          // 12
      "Reverse Engineering",        // 13
      "Frontend",                   // 14
      "Backend",                    // 15
      "Robotics"                    // 16
    ];
  
    // Initialize answer variables
    let softdev = 0, harddev = 0, hell = 0, networking = 0, gamer = 0;
    let database = 0, devops = 0, app = 0, api = 0, increp = 0;
    let forensics = 0, ai = 0, cloud = 0, rev = 0, fullfrontal = 0;
    let fullbackal = 0, robots = 0;
  
    let currentQuestionIndex = 0;
  
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const resultContainer = document.getElementById("result");
  
    function showQuestion(index) {
      answerButtons.innerHTML = "";
      questionElement.textContent = questions[index];
  
      const options = [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 },
        { text: "4", value: 4 },
        { text: "5", value: 5 },
        { text: "I don't know", value: 0 }
      ];
  
      options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option.text;
        btn.classList.add("answer-btn");
        btn.addEventListener("click", () => selectAnswer(option.value, btn));
        answerButtons.appendChild(btn);
      });
  
      nextButton.disabled = true;
    }
  
    function selectAnswer(value, button) {
      // Map responses to variable
      if (currentQuestionIndex === 0) softdev = value;
      else if (currentQuestionIndex === 1) harddev = value;
      else if (currentQuestionIndex === 2) hell = value;
      else if (currentQuestionIndex === 3) networking = value;
      else if (currentQuestionIndex === 4) gamer = value;
      else if (currentQuestionIndex === 5) database = value;
      else if (currentQuestionIndex === 6) devops = value;
      else if (currentQuestionIndex === 7) app = value;
      else if (currentQuestionIndex === 8) api = value;
      else if (currentQuestionIndex === 9) increp = value;
      else if (currentQuestionIndex === 10) forensics = value;
      else if (currentQuestionIndex === 11) ai = value;
      else if (currentQuestionIndex === 12) cloud = value;
      else if (currentQuestionIndex === 13) rev = value;
      else if (currentQuestionIndex === 14) fullfrontal = value;
      else if (currentQuestionIndex === 15) fullbackal = value;
      else if (currentQuestionIndex === 16) robots = value;
  
      Array.from(answerButtons.children).forEach(btn => {
        btn.classList.remove("selected");
      });
      button.classList.add("selected");
  
      nextButton.disabled = false;
    }
  
    const jobs = [
        { title: "Help Desk Technician / IT Support", majors: ["IT", "CS", "Cybersecurity"], description: "Entry-level role solving hardware/software issues. Good for hands-on troubleshooting.", score: 0, weight: ["hell", "harddev", "networking", "increp"] },
        { title: "Software Developer / Engineer", majors: ["CS", "Cybersecurity Engineering"], description: "Builds applications, websites, or systems. Programming-heavy.", score: 0, weight: ["softdev", "fullbackal", "fullfrontal", "api"] },
        { title: "Web Developer", majors: ["CS", "IT"], description: "Front-end/back-end dev for websites and web apps. HTML/CSS/JS-heavy.", score: 0, weight: ["api", "fullfrontal", "fullbackal", "softdev"] },
        { title: "System Administrator", majors: ["IT", "Cybersecurity", "Cyber Eng."], description: "Manages networks, servers, and IT infrastructure. Linux/Windows server knowledge is key.", score: 0, weight: ["networking", "harddev", "cloud", "devops"] },
        { title: "Network Administrator / Engineer", majors: ["IT", "Cybersecurity", "Cyber Eng."], description: "Designs and maintains network systems. Cisco/CCNA stuff here.", score: 0, weight: ["networking", "harddev", "hell"] },
        { title: "Penetration Tester / Ethical Hacker", majors: ["Cybersecurity", "Cyber Eng.", "CS"], description: "Legally hacks systems to find vulnerabilities. Tools: Metasploit, Burp Suite.", score: 0, weight: ["rev", "forensics", "increp", "softdev"] },
        { title: "Cybersecurity Analyst", majors: ["Cybersecurity", "Cyber Eng.", "IT"], description: "Monitors for threats, investigates alerts, writes reports. SOC role.", score: 0, weight: ["increp", "forensics", "networking", "cloud"] },
        { title: "Security Operations Center Analyst", majors: ["Cybersecurity", "Cyber Eng."], description: "Real-time monitoring of security events. Good entry point in security.", score: 0, weight: ["increp", "forensics", "hell"] },
        { title: "DevOps Engineer", majors: ["CS", "Cyber Eng.", "IT"], description: "Combines dev and operations: CI/CD pipelines, infrastructure automation.", score: 0, weight: ["devops", "cloud", "api", "softdev"] },
        { title: "Cloud Engineer", majors: ["CS", "Cyber Eng.", "IT"], description: "Works with AWS, Azure, GCP to build cloud infrastructure.", score: 0, weight: ["cloud", "devops", "networking", "harddev"] },
        { title: "Database Administrator", majors: ["IT", "CS"], description: "Manages data storage solutions, SQL-heavy.", score: 0, weight: ["database", "softdev", "api", "cloud"] },
        { title: "Data Analyst", majors: ["CS", "IT"], description: "Analyzes data to inform decisions. Uses Python, Excel, SQL, Tableau.", score: 0, weight: ["database", "softdev", "ai", "api"] },
        { title: "Machine Learning Engineer (Entry)", majors: ["CS", "Cyber Eng."], description: "Builds and trains ML models. Python + math skills needed.", score: 0, weight: ["ai", "softdev", "database", "cloud"] },
        { title: "IT Auditor", majors: ["Cybersecurity", "IT"], description: "Ensures compliance with policies and regulations.", score: 0, weight: ["forensics", "increp", "hell"] },
        { title: "Information Security Analyst", majors: ["Cybersecurity", "Cyber Eng.", "IT"], description: "Implements and maintains security measures.", score: 0, weight: ["increp", "forensics", "networking", "rev"] },
        { title: "Mobile App Developer", majors: ["CS", "Cyber Eng."], description: "Builds apps for Android/iOS. Java/Kotlin/Swift.", score: 0, weight: ["app", "softdev", "api", "fullfrontal"] },
        { title: "Game Developer", majors: ["CS", "IT"], description: "Designs and builds video games. Unity/Unreal engine.", score: 0, weight: ["gamer", "softdev", "fullbackal", "app"] },
        { title: "UX/UI Designer (Entry Level)", majors: ["CS", "IT"], description: "Focuses on design and user experience of digital products. Good for creative + technical minds.", score: 0, weight: ["fullfrontal", "app", "softdev"] }
      ];
      
  
    function showResult() {
      const interests = {
        softdev, harddev, hell, networking, gamer,
        database, devops, app, api, increp,
        forensics, ai, cloud, rev, fullfrontal,
        fullbackal, robots
      };
  
      // Example scoring logic (you can customize this):
      jobs.forEach(job => {
        job.score = job.weight.reduce((acc, key) => acc + (interests[key] || 0), 0);
      });
  
      jobs.sort((a, b) => b.score - a.score);
  
      resultContainer.innerHTML = "<h2>Recommended Careers:</h2>";
      jobs.slice(0, 3).forEach(job => {
        resultContainer.innerHTML += `<h3>${job.title}</h3><p>${job.description}</p><hr>`;
      });
    }
  
    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
      } else {
        questionElement.style.display = "none";
        answerButtons.style.display = "none";
        nextButton.style.display = "none";
        showResult();
      }
      resultContainer.classList.remove("hidden");
    });
  
    showQuestion(currentQuestionIndex);
  });
  function showResult() {
    const interests = {
      softdev, harddev, hell, networking, gamer,
      database, devops, app, api, increp,
      forensics, ai, cloud, rev, fullfrontal,
      fullbackal, robots
    };
  
    // Calculate score based on user input
    jobs.forEach(job => {
      job.score = job.weight.reduce((acc, key) => acc + (interests[key] || 0), 0);
    });
  
    // Sort and select top 3
    const topJobs = jobs.sort((a, b) => b.score - a.score).slice(0, 3);
  
    // Display
    resultContainer.innerHTML = "<h2>Recommended Careers:</h2>";
    topJobs.forEach(job => {
      resultContainer.innerHTML += `<h3>${job.title}</h3><p>${job.description}</p><hr>`;
    });
  }
  
