#!/usr/bin/env node
import chalk from 'chalk';
import boxen from 'boxen';
import figlet from 'figlet';
import gradient from 'gradient-string';
// import inquirer from 'inquirer';

const { default: inquirer } = await import('inquirer');

const profile = {
  name: "Arafat Hossain",
  title: "Full Stack Developer",
  contact: {
    phone: "01789404345",
    email: "arafatweb000@gmail.com",
    website: "www.arafatdev.com",
    github: "www.github.com/arafat-web"
  },
  summary: "Full Stack Developer with 4+ years of experience in PHP, Laravel, Vue.js, Nuxt.js, and API integration. Specialized in building high-performance web apps, especially in ERP and E-Commerce.",
  experience: [
    {
      company: "ADVENTURE DHAKA LTD",
      period: "OCT 2024 - PRESENT",
      position: "Software Engineer",
      responsibilities: [
        "Develop API for Microservices",
        "Integrate Different Microservices",
        "Follow clean code architecture",
        "Team collaboration and communication"
      ]
    },
    {
      company: "RAZINSOFT",
      period: "SEP 2023 - OCT 2024",
      position: "Fullstack Laravel Developer",
      responsibilities: [
        "Developed web applications using Laravel and Vue.js",
        "Implemented performance optimizations",
        "Enhanced security for fintech standards"
      ]
    }
  ],
  education: [
    {
      institution: "SHANTO-MARIAM UNIVERSITY OF CREATIVE TECHNOLOGY",
      degree: "Bachelor of Science",
      field: "Computer Science & Engineering",
      period: "2020-2023",
      gpa: "3.67/4.00"
    }
  ],
  skills: {
    languages: ["PHP", "Java", "JavaScript"],
    frameworks: ["Laravel", "Vue.js", "Nuxt.js"],
    databases: ["MySQL", "PostgreSQL"],
    tools: ["GitHub", "Jira", "ClickUp"]
  }
};

// Display functions
function showHeader() {
  console.log(
    gradient.rainbow(
      figlet.textSync('Arafat', { horizontalLayout: 'full' })
    )
  );
  console.log(
    boxen(
      chalk.bold(`${profile.name}`) + 
      `\n${profile.title}\n\n` +
      chalk.cyan.bold("Contact:") + 
      `\n📱 ${profile.contact.phone}` +
      `\n📧 ${profile.contact.email}` +
      `\n🌐 ${profile.contact.website}` +
      `\n💻 ${profile.contact.github}`,
      { padding: 1, margin: 1, borderStyle: 'round' }
    )
  );
}

function showMenu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to know?',
      choices: [
        'Professional Summary',
        'Work Experience',
        'Education',
        'Skills',
        'Exit'
      ]
    }
  ]).then(answers => {
    switch(answers.option) {
      case 'Professional Summary':
        showSummary();
        break;
      case 'Work Experience':
        showExperience();
        break;
      case 'Education':
        showEducation();
        break;
      case 'Skills':
        showSkills();
        break;
      default:
        process.exit();
    }
  });
}

function showSummary() {
  console.log(
    boxen(
      chalk.bold.cyan("PROFESSIONAL SUMMARY") + 
      `\n\n${profile.summary}`,
      { padding: 1, borderStyle: 'round' }
    )
  );
  showMenu();
}

function showExperience() {
  let expText = chalk.bold.cyan("WORK EXPERIENCE\n\n");
  profile.experience.forEach(job => {
    expText += chalk.bold(`${job.position} at ${job.company}\n`);
    expText += chalk.italic(`${job.period}\n`);
    job.responsibilities.forEach(resp => {
      expText += `• ${resp}\n`;
    });
    expText += `\n`;
  });
  
  console.log(boxen(expText, { padding: 1, borderStyle: 'round' }));
  showMenu();
}

function showEducation() {
  let eduText = chalk.bold.cyan("EDUCATION\n\n");
  profile.education.forEach(edu => {
    eduText += chalk.bold(`${edu.degree} in ${edu.field}\n`);
    eduText += `${edu.institution}\n`;
    eduText += `${edu.period} | GPA: ${edu.gpa}\n\n`;
  });
  
  console.log(boxen(eduText, { padding: 1, borderStyle: 'round' }));
  showMenu();
}

function showSkills() {
  let skillsText = chalk.bold.cyan("TECHNICAL SKILLS\n\n");
  
  skillsText += chalk.bold("Languages:\n");
  skillsText += `• ${profile.skills.languages.join(', ')}\n\n`;
  
  skillsText += chalk.bold("Frameworks:\n");
  skillsText += `• ${profile.skills.frameworks.join(', ')}\n\n`;
  
  skillsText += chalk.bold("Databases:\n");
  skillsText += `• ${profile.skills.databases.join(', ')}\n\n`;
  
  skillsText += chalk.bold("Tools:\n");
  skillsText += `• ${profile.skills.tools.join(', ')}\n`;
  
  console.log(boxen(skillsText, { padding: 1, borderStyle: 'round' }));
  showMenu();
}

// Start the application
showHeader();
showMenu();