import React, { ReactNode } from "react";
import Chart from "./Chart";

type JournalEntry = {
  date: string;
  text: string | ReactNode;
  chart?: number;
};

const entries: JournalEntry[] = [
  {
    date: "2025-08-20",
    text: "Refactored salary details, personal details, payment information and review steps in create employee page.",
    chart: 8,
  },
  {
    date: "2025-08-19",
    text: "Refactored basic details step in create employee page.",
    chart: 6,
  },
  {
    date: "2025-08-18",
    text: "Refactor create company page using with dal and dto.",
    chart: 5,
  },
  {
    date: "2025-08-17",
    text: "Contiued working on further optimisation.",
    chart: 4,
  },
  {
    date: "2025-08-16",
    text: "Discussed design with Frederic. Joined a programming contest.",
  },
  {
    date: "2025-08-15",
    text: "Worked on optimising the page load as it was quite slow. After a lot of investigation, ended up changing the server location....",
  },
  {
    date: "2025-08-14",
    text: "Enhanced dal and dto, and applied them in tax details, statutory components and salary components settings pages.",
  },
  {
    date: "2025-08-13",
    text: "Enhanced dal and dto, and applied them in company details and pay schedule settings pages.",
  },
  {
    date: "2025-08-12",
    text: "Enhanced dal and dto, and applied them in onboarding and create employee pages.",
  },
  {
    date: "2025-08-11",
    text: "Enhanced dal and dto, and applied them in dashboard pages.",
  },
  {
    date: "2025-08-10",
    text: "Had a relaxing Sunday.",
  },
  {
    date: "2025-08-09",
    text: "Joined a programming contest.",
  },
  {
    date: "2025-08-08",
    text: "Improved auth patterns by introducing Data Access Layer and Data Transfer Objects.",
  },
  {
    date: "2025-08-07",
    text: "Created payroll pages and did research on slow page loading issue.",
  },
  {
    date: "2025-08-06",
    text: "Further refactored code.",
  },
  {
    date: "2025-08-05",
    text: "Added draft core engine for calculators.",
  },
  {
    date: "2025-08-04",
    text: "Started making calculators.",
  },
  {
    date: "2025-08-03",
    text: "Had a relaxing day. Fixed a few bugs.",
  },
  {
    date: "2025-08-02",
    text: "Refactored add employee forms. Joined a programming contest.",
  },
  {
    date: "2025-08-01",
    text: "Refactored statutory components settings.",
  },
  {
    date: "2025-07-31",
    text: "Refactored salary components settings.",
  },
  {
    date: "2025-07-30",
    text: "Refactored company settings.",
  },
  {
    date: "2025-07-29",
    text: "Refactored settings and add onboarding in company dashboard.",
  },
  {
    date: "2025-07-28",
    text: "Refactored dashboard and payroll components.",
  },
  {
    date: "2025-07-27",
    text: "Had a relaxing Sunday. Did some practices for a programming contest.",
  },
  {
    date: "2025-07-26",
    text: "Joined a programming contest.",
  },
  {
    date: "2025-07-25",
    text: "Did further research on existing payroll application.",
  },
  {
    date: "2025-07-24",
    text: "Did research on other payslip generator app. Wrote a blog post for Internet Garden.",
  },
  {
    date: "2025-07-23",
    text: "Added TDS and professional tax calculations to the salary calculator.",
  },
  {
    date: "2025-07-22",
    text: "Added PF and ESI calculations to the salary calculator.",
  },
  {
    date: "2025-07-21",
    text: "Started building a salary calculator with basic earnings, deductions, and net pay calculations.",
  },
  {
    date: "2025-07-20",
    text: "Took a day off.",
  },
  {
    date: "2025-07-19",
    text: "Refactor company, employee, and other components.",
  },
  {
    date: "2025-07-18",
    text: "Refactor auth, checkout and dashboard components.",
  },
  {
    date: "2025-07-17",
    text: "Add role-based navigation system, salary structure management, subscription management, enhanced paddle integration, multi-tenant security and testing.",
  },
  {
    date: "2025-07-16",
    text: "Implemented employee dashboard and CRUD operations, and set up invitation email flow.",
  },
  {
    date: "2025-07-15",
    text: "Implemented company dashboard and CRUD operations.",
  },
  {
    date: "2025-07-14",
    text: "Set up paddle, Integrated it in sign up flow, but only with local trial, not customer creation.",
  },
  {
    date: "2025-07-13",
    text: "Further refactored the code, especially the auth flow.",
  },
  {
    date: "2025-07-12",
    text: "Reviewed code with Frederic, connect auth with database, and refactored the code. Joined a programming contest.",
  },
  {
    date: "2025-07-11",
    text: "Refactored service functions and added api routes.",
  },
  {
    date: "2025-07-10",
    text: "Added types and service functions.",
  },
  {
    date: "2025-07-09",
    text: "Implemented basic auth, sign up, login, logout, reset password, etc..",
  },
  {
    date: "2025-07-08",
    text: "Set up prisma and supabase. Running seed and test page worked fine.",
  },
  {
    date: "2025-07-07",
    text: "Did basic project set up including ESLint and Prettier.",
  },
  {
    date: "2025-07-06",
    text: "Had a relaxing day.",
  },
  {
    date: "2025-07-04",
    text: "Finalised the prerequisite documents.",
  },
  {
    date: "2025-07-03",
    text: "Revised the documents based on what we discussed yesterday.",
  },
  {
    date: "2025-07-02",
    text: "Discussed draft problem definition, requirements and software architecture with Frederic.",
  },
  {
    date: "2025-07-01",
    text: "Worked on software architecture for PayrollRabbit.",
  },
  {
    date: "2025-06-30",
    text: "Wrote a problem definition and requirements for PayrollRabbit.",
  },
  {
    date: "2025-06-29",
    text: "Wrote a blog post for Internet Garden. Discussed prerequisites for PayrollRabbit with Frederic.",
  },
  {
    date: "2025-06-28",
    text: "Learn about upstream prerequisites in software development and joined a programming contest.",
  },
  {
    date: "2025-06-27",
    text: "Added scroll progress bar, table of contents and filter to blog pages in PayrollRabbit.",
  },
  {
    date: "2025-06-26",
    text: "Built Income Tax Calculator for PayrollRabbit.",
  },
  {
    date: "2025-06-25",
    text: "Finished building TDS Calculator and built NPS Calculator for PayrollRabbit.",
  },
  {
    date: "2025-06-24",
    text: "Started building TDS Calculator for PayrollRabbit.",
  },
  {
    date: "2025-06-23",
    text: "Built EPF Calculator for PayrollRabbit. Struggled to understand the EPF rules in India!",
  },
  {
    date: "2025-06-22",
    text: "Started writing a blog post for Internet Garden.",
  },
  {
    date: "2025-06-21",
    text: "Implement filter to free tools page, and enhanced date picker in PayrollRabbit. Joined a programming contest.",
  },
  {
    date: "2025-06-20",
    text: "Built Annual Leave Calculator for PayrollRabbit.",
  },
  {
    date: "2025-06-19",
    text: "Built Contractor Pay Calculator and improved existing free tools for PayrollRabbit.",
  },
  {
    date: "2025-06-18",
    text: "Reviewed and fixed a few things in Clock In and Out Calculator and Overtime Pay Calculator. Built Salary Hike Calculator for PayrollRabbit.",
  },
  {
    date: "2025-06-17",
    text: "Built Overtime Pay Calculator for PayrollRabbit.",
  },
  {
    date: "2025-06-16",
    text: "Built Clock In and Out Calculator for PayrollRabbit.",
  },
  {
    date: "2025-06-15",
    text: "Learned for programming contest. Fixed bugs for PayrollRabbit.",
  },
  {
    date: "2025-06-14",
    text: "Added Hindi metadata and refactored language switcher in UPI QR Code Generator. Joined a programming contest.",
  },
  {
    date: "2025-06-13",
    text: "Added digital signature function to Salary Certificate Generator using react-signature-canvas. Worked on SEO optimasation and updated sitemap in UPI QR Code Generator.",
  },
  {
    date: "2025-06-12",
    text: "Built Salary Certificate Generator and added Crisp to PayrollRabbit. Improved GST Calculator.",
  },
  {
    date: "2025-06-11",
    text: "Learned about and built Full and Final Settlement Calculator for PayrollRabbit.",
  },
  {
    date: "2025-06-10",
    text: "Learned about and built Attrition Rate Calculator for PayrollRabbit.",
  },
  {
    date: "2025-06-09",
    text: "Learned about and built Leave Encashment Calculator for PayrollRabbit.",
  },
  {
    date: "2025-06-08",
    text: "Went to the grad show of an art university in the city. Studied for a programming contest.",
  },
  {
    date: "2025-06-07",
    text: "Fixed some bugs in PayrollRabbit, and Joined a programming contest.",
  },
  {
    date: "2025-06-06",
    text: "Learned about and built in-hand salary calculator for PayrollRabbit.",
  },
  {
    date: "2025-06-05",
    text: "Learned about HRA and Statutory Bonus in India, and built HRA Calculator and Statutory Bonus Calculator.",
  },
  {
    date: "2025-06-04",
    text: "Added multi language support (English and Hindi) to UPI QR Code Generator using next-intl. It was painful to create the translation files, it must have been other ways to do this....",
  },
  {
    date: "2025-06-03",
    text: "Learned about Gratuity and built Gratuity Calculator. Fixed issues on Ahrefs.",
  },
  {
    date: "2025-06-02",
    text: "Created the third payslip template with Word and Excel, and updated the salary slip format page.",
  },
  {
    date: "2025-06-01",
    text: "Had a housewarming party with neighbours, finally after moving in to the flat in Februally.",
  },
  {
    date: "2025-05-31",
    text: "Joined a programming contest. Started to create one more payslip template.",
  },
  {
    date: "2025-05-30",
    text: "Added breadcrumbs, added FAQ to free tools pages, and fixed some bugs in PayrollRabbit.",
  },
  {
    date: "2025-05-29",
    text: "Learn about GST and started building GST Calculator.",
  },
  {
    date: "2025-05-28",
    text: "Fixed a bug in UPI QR Code Generator and restructured PayrollRabbit (our new project).",
  },
  {
    date: "2025-05-27",
    text: "I'm still not 100% well, but I feel much better. Added customisation function to UPI QR Code Generator.",
  },
  {
    date: "2025-05-26",
    text: "Felt a bit better and started working, but slowly.",
  },
  {
    date: "2025-05-25",
    text: "Rested in the bed the entire day.",
  },
  {
    date: "2025-05-24",
    text: "Was in the bed the whole day. I've been sick for a week! I think I have a bad cold or something... But joined a programming contest a little bit.",
  },
  {
    date: "2025-05-23",
    text: "Wrote a blog post for Internet Garden.",
  },
  {
    date: "2025-05-22",
    text: "Created another salary slip template, added description list for each component and edited introduction text.",
  },
  {
    date: "2025-05-21",
    text: "Fixed styles of payslip generator and started creating sample payslip templates in word and excel....",
  },
  {
    date: "2025-05-20",
    text: "Refactored code using config file, fix texts and warnings. Started working on payslip template.",
  },
  {
    date: "2025-05-19",
    text: "Fixed errors and added currency selector.",
  },
  {
    date: "2025-05-18",
    text: "Enhanced PDF layout and improved mobile view.",
  },
  {
    date: "2025-05-17",
    text: "Finished styling and added form validation. Joined a programming contest.",
  },
  {
    date: "2025-05-16",
    text: "Started adding styles using tailwind plus.",
  },
  {
    date: "2025-05-15",
    text: "Started building a payslip genrator!",
  },
  {
    date: "2025-05-14",
    text: "Did research on payslip format.",
  },
  {
    date: "2025-05-13",
    text: "Came back from Athens. Started coding for the new idea.",
  },
  {
    date: "2025-05-12",
    text: "Planned how we proceed with the new business idea.",
  },
  {
    date: "2025-05-11",
    text: "Walked around and went to a flea market in Athens!",
  },
  {
    date: "2025-05-10",
    text: "Had a relaxing Saturday. Joined a programming contest.",
  },
  {
    date: "2025-05-09",
    text: "Started to gathering all the info around the idea in Notion.",
  },
  {
    date: "2025-05-08",
    text: "Decided to proceed with an idea, and started to conceptualise.",
  },
  {
    date: "2025-05-07",
    text: "Started to analyse and evaluate ideas.",
  },
  {
    date: "2025-05-06",
    text: "Discussed business ideas with Fredd in a cafe in Athens.",
  },
  {
    date: "2025-05-05",
    text: "Searching for business ideas while strolling and eating good food in Athens...",
  },
  {
    date: "2025-05-04",
    text: "Arrived in Athens to do remote work. Explored the city a bit, and had great food and freddo cappuccino!",
  },
  {
    date: "2025-05-03",
    text: "Joined a programming contest, but couldn't perform well at all today! Need to learn C++ more. In the evening, flied to Athens.",
  },
  {
    date: "2025-05-02",
    text: "Continued searching for business ideas with Ahrefs...",
  },
  {
    date: "2025-05-01",
    text: "Was searching for business inspirations with Ahrefs. Interesting to see various online business, especially bootstrapping and indie hacking!",
  },
  {
    date: "2025-04-30",
    text: "Learned how to do SEO research with Ahrefs, started to do research to find new niches.",
  },
  {
    date: "2025-04-29",
    text: "Fixed UPI QR Code Generator for mobile, especially tooltips overflow issue, with Floating UI. Watched video with Jason Cohen to learn more about ideal bootstrapped business.",
  },
  {
    date: "2025-04-28",
    text: "Fixed styles of UPI QR Code Generator, and updated my personal website.",
  },
  {
    date: "2025-04-27",
    text: "Went to Geneva, visited CERN and joined guided tour! It was very interesting... Want to learn more about particle physics. Fixed Bluesky bot error.",
  },
  {
    date: "2025-04-26",
    text: "Had relaxing morning. Fixed Bluesky investment bot posting the same content issue.",
  },
  {
    date: "2025-04-25",
    text: "Did research on next business ideas, and worked on share function in UPI QR code generator, but couldn't do so much with web share API...",
  },
  {
    date: "2025-04-24",
    text: "Fixed authentication error with Bluesky bots, keeping session, etc. Bots seem to be working now. Still monitoring...",
  },
  {
    date: "2025-04-23",
    text: "Tried to schedule the bot on Github Actions instead of Mac cron, but still figuring out....",
  },
  {
    date: "2025-04-22",
    text: "Further Debugged UPI QR Code Generator, and built FinFeed (a bot to post financial news on Bluesky).",
  },
  {
    date: "2025-04-21",
    text: "Debug UPI QR Code Generator, and started builidng a Bluesky bot to post financial news.",
  },
  {
    date: "2025-04-20",
    text: "Happy Easter! Had a fun time with friends. Arrived home in the night.",
  },
  {
    date: "2025-04-19",
    text: "Had a relaxing time with friends and his family. Their dogs are so cute.",
  },
  {
    date: "2025-04-18",
    text: "Had a break and prepared for the weekend as Fredd and I spend the weekend with friends in Germany.",
  },
  {
    date: "2025-04-17",
    text: "Learned MDX, installed Tailwind typography plugin and added styles to blog posts on Internet Garden. Also, added new blog post I wrote yesterday.",
  },
  {
    date: "2025-04-16",
    text: "Fixed SEO related errors such as image file too large, open graph tags incomplete. Wrote a blog post for Internet Garden.",
  },
  {
    date: "2025-04-15",
    text: "Learned Google Search Console and SEO.",
  },
  {
    date: "2025-04-14",
    text: "Learned Python basics.",
  },
  {
    date: "2025-04-13",
    text: "Learned a lot for competitive programming.",
  },
  {
    date: "2025-04-12",
    text: "Joined a programming contest. I feel I'm getting better at this! I could solve two problems quite fast.",
  },
  {
    date: "2025-04-11",
    text: "Fixed few more things on MarryBirds, and started to do research for the next project. Might need to learn Python!",
  },
  {
    date: "2025-04-10",
    text: "Had a small break. Joined a training for programming contest and started learning vim. Since yesterday, I edit this file in vim editor!",
  },
  {
    date: "2025-04-09",
    text: "Checked entire MarryBirds, and fixed where it was not working.",
  },
  {
    date: "2025-04-08",
    text: "Fixed build errors in Wedding Locations Near Me, edited the previous blog post for Internet Garden, and did research for business ideas using Ahref.",
  },
  {
    date: "2025-04-07",
    text: "Fixed SEO related errors from Ahref by adding canonical tags and robots.ts in Wedding Locations Near Me.",
  },
  {
    date: "2025-04-06",
    text: "Had a relaxing day. Wrote a blog post for Internet Garden and add the seating chart to MarryBirds. Also, wrote a fun script and set up a cron to automatically make a post on Bluesky.",
  },
  {
    date: "2025-04-05",
    text: "Joined a programming contest. Could solve two problems! To solve more problems, need to learn more math...",
  },
  {
    date: "2025-04-04",
    text: "Fix z-index issue (again), and improve moving elements a little bit... in wedding seating chart.",
  },
  {
    date: "2025-04-03",
    text: "Fixed UI update issue with import guests from csv function and other warnings.",
  },
  {
    date: "2025-04-02",
    text: "Fixed downloading pdf with the latest canvas state issue and added import guests from csv function.",
  },
  {
    date: "2025-04-01",
    text: "Made the page responsive in wedding seating chart. Started to make the download chart as PDF function better.",
  },
  {
    date: "2025-03-31",
    text: "Added unassigned guests widget to canvas, enhance add/edit guest dialog and improve UI such as the way to display guest names in wedding seating chart.",
  },
  {
    date: "2025-03-30",
    text: "Had a relaxing day. The weather was nice, so went for a walk in the botanical garden to see flowers.",
  },
  {
    date: "2025-03-29",
    text: "Joined a programming contest, but could only solve one problem, again! Need to keep learning...",
  },
  {
    date: "2025-03-28",
    text: "Changed the chair selection styles, removed chair numbers and added add guest dialog and edit guest dialog.",
  },
  {
    date: "2025-03-27",
    text: "Added zooming and panning in the canvas to wedding seating chart.",
  },
  {
    date: "2025-03-26",
    text: "Removed table type and chair size calculation, and simplified the code. Fixed bugs in edit table dialog and the maximum update depth error.",
  },
  {
    date: "2025-03-25",
    text: "Removed text element and resize handle from wedding seating chart. Enhanced download chart function.",
  },
  {
    date: "2025-03-24",
    text: "Fixed infinite loop, z-index conflicts, etc. in wedding seating chart. Improved UI.",
  },
  {
    date: "2025-03-23",
    text: "Had a very relaxing day. Cooked lunch with Fred, went to the gym, read a book, played games, and learned programming.",
  },
  {
    date: "2025-03-22",
    text: "Joined a programming contest, but could only solve one problem. Decided to learn more about algorithms and data structures.",
  },
  {
    date: "2025-03-21",
    text: "Added table controls (edit, rotate and delete table) to the wedding seating chart maker and modified rotation handle, etc.",
  },
  {
    date: "2025-03-20",
    text: "Tested the wedding seating chart and made a list of features I want to add and things I want to fix. Fixed add table dialog z-index issue.",
  },
  {
    date: "2025-03-19",
    text: "Did research on existing wedding seating chart makers and started refactoring the old code.",
  },
  {
    date: "2025-03-18",
    text: "Enhanced guest list by fixing bugs, improving UI such as making the page resposive, add export feature, etc.",
  },
  {
    date: "2025-03-17",
    text: "Fixed Github Dependabot alerts and improved guest list by allowing users to input custom value for menu and group and adding immediate overview update when user add, edit or remove a guest.",
  },
  {
    date: "2025-03-16",
    text: "Watched the editorial of the programming contest I joined yesterday.",
  },
  {
    date: "2025-03-15",
    text: "Joined a programming contest. Had a friend come over and had dinner together.",
  },
  {
    date: "2025-03-14",
    text: "Fixed the cannot find canvas and color picker issue in Wedding Mood Board and updating a list issue in Wedding Guest List.",
  },
  {
    date: "2025-03-13",
    text: "Started to debug Wedding Mood Board, but had a terrible headache today. Couldn't make much progress.",
  },
  {
    date: "2025-03-12",
    text: "Discussed what we want to make as free tools with Fredd. Started building a free tool which manages wedding guest list.",
  },
  {
    date: "2025-03-11",
    text: "Fixed data retrieval issue in business submission flow in MarryBirds Business, eliminating unnecessary AI extraction for existing venues.",
  },
  {
    date: "2025-03-10",
    text: "Checked the way to receive Logsnag notifications on mobile. (There is an app!) Fixed redirect authenticated users issue in sign in page and improved url validation in business dashboard.",
  },
  {
    date: "2025-03-09",
    text: "Did a review on the MarryBirds website with Fredd and listed all the things we work on this week.",
  },
  {
    date: "2025-03-08",
    text: "Picked up second hand furniture and did some shopping for the flat. Had a nice time with Friends. Reviewed the code of MarryBirds Business.",
  },
  {
    date: "2025-03-07",
    text: "Improved UI, fixed country selector location mismatch due to race condition and improved overall performance.",
  },
  {
    date: "2025-03-06",
    text: "Improved UI of tinder style wedding vendor directory for mobile.",
  },
  {
    date: "2025-03-05",
    text: "Had a review on SEO strategies and fixed redirect loop issue. Had a discussion with Fredd about Internet Garden.",
  },
  {
    date: "2025-03-04",
    text: "Tested in the production environment, and it worked fine. Fixed sanity hydration issue.",
  },
  {
    date: "2025-03-03",
    text: "Tried to solve second load issue (not because of React Strict Mode), but it was not successful. I don't not why it's redering twice otherwise...",
  },
  {
    date: "2025-03-02",
    text: "Went to the zoo and had a relaxing day with family.",
  },
  {
    date: "2025-03-01",
    text: "Joined a programming contest. Was able to solve only one problem... Need to study more! Also, wrote a blog post for internet garden.",
  },
  {
    date: "2025-02-28",
    text: "Replaced display wedding business near user function with country selector.",
  },
  {
    date: "2025-02-27",
    text: "Tried to replace display wedding business near user function with country selector, but it has been challenging to implement. Work in progress!",
  },
  {
    date: "2025-02-26",
    text: "Tried to fix the swiping animation of tinder-style wedding business directory, but it was not successful. Instead, added new features to store user viewing history and to display business near the user.",
  },
  {
    date: "2025-02-25",
    text: "Paused building the wedding seating chart maker for now, and started creating tinder-like interface for wedding business directory.",
  },
  {
    date: "2025-02-24",
    text: "Worked on wedding seating chart maker. It has been quite challenging to conceptualize...",
  },
  {
    date: "2025-02-23",
    text: "Had a relaxing Sunday. Did housework and went to the gym.",
  },
  {
    date: "2025-02-22",
    text: "Joined a programming contest!",
  },
  {
    date: "2025-02-21",
    text: "Changed the concept of wedding seating chart maker. The previous one was more customisable but a little bit confusing, so decided to make it simpler and less steps required. Started working on the new one.",
  },
  {
    date: "2025-02-20",
    text: "Had discussion about the wedding seating chart, added form to handle arrangement templates, changed icons, added select multiple, copy/paste elements functionality.",
  },
  {
    date: "2025-02-19",
    text: "Started building a wedding seating chart maker.",
  },
  {
    date: "2025-02-18",
    text: "Fix bugs, refactor, added text color picker function to wedding mood board.",
  },
  {
    date: "2025-02-17",
    text: "Enhanced resizing elements, added download function and persisting state using IndexedDB to wedding mood board.",
  },
  {
    date: "2025-02-16",
    text: "Did final clean up after moving. Finally felt a little bit more at home.",
  },
  {
    date: "2025-02-15",
    text: "Finished cleaning, recycling and everything after moving. Looked some shop for furnitures for the new flat.",
  },
  {
    date: "2025-02-14",
    text: "Added color picking from canvas functionality to wedding mood board.",
  },
  {
    date: "2025-02-13",
    text: "Added interactive color palette generation functionality to wedding mood board.",
  },
  {
    date: "2025-02-12",
    text: "Started building mood board as a free tool.",
  },
  {
    date: "2025-02-11",
    text: "Built a first version of free tool which generates social media captions for a wedding.",
  },
  {
    date: "2025-02-10",
    text: "Enhanced the landing page and the wedding hashtag generator. Added small new features and improved UI.",
  },
  {
    date: "2025-02-09",
    text: "Cleaned the previous flat the entire day. Still have a lot to do after moving!",
  },
  {
    date: "2025-02-08",
    text: "Joined a programming competition. It was fun and challenging. Want to learn more about algorithms.",
  },
  {
    date: "2025-02-07",
    text: "Built a first version of free tool which generates hashtags for a wedding.",
  },
  {
    date: "2025-02-06",
    text: "Did further unpacking. Now, most of the things found their own place.",
  },
  {
    date: "2025-02-05",
    text: "Did unpacking and built two work desks. Moved more stuff from old flat to the new one.",
  },
  {
    date: "2025-02-04",
    text: "Moved to a new flat! Packed everything in the morning and moved them in the afternoon. Was a great workout....",
  },
  {
    date: "2025-02-03",
    text: "Fixed React Hook dependency warnings in LocationMap component and optimized image components with proper TypeScript types and required alt props.",
  },
  {
    date: "2025-02-02",
    text: "Updated a blog with a new post on Internet Garden.",
  },
  {
    date: "2025-02-01",
    text: "Took a rest as I did not feel very well. Did a workout at a gym.",
  },
  {
    date: "2025-01-31",
    text: "Finished building the free tool and wrote a January blog post for Internet Garden.",
  },
  {
    date: "2025-01-30",
    text: "Started building a free tool which calculates alcohol drinks at a wedding.",
  },
  {
    date: "2025-01-29",
    text: "Changed the file type from next.config.mjs to next.config.ts and updated the OpenAI model in MarryBirds Business. Started building a web scraper to do marketing research.",
  },
  {
    date: "2025-01-28",
    text: "Added subscription cancellation date tracking to User model and implemented UI display of active-until dates for canceled subscriptions.",
  },
  {
    date: "2025-01-27",
    text: "Implemented direct email change functionality using Supabase service role, updating both Auth and database simultaneously.",
  },
  {
    date: "2025-01-26",
    text: "Did a lot of sports. Went for a walk in the forest and did a workout with Freeletics.",
  },
  {
    date: "2025-01-25",
    text: "Enjoyed the sun and being outside after a while. Had a great discussion about Internet Garden and new business ideas with Fredd.",
  },
  {
    date: "2025-01-24",
    text: "Implemented password reset flow with Supabase Auth and complete account deletion flow, including Stripe subscription cancellation.",
  },
  {
    date: "2025-01-23",
    text: "Fixed business submission flow to allow form completion in any order. Changed location queries to use business profile ID instead of website URL, ensuring data persistence across all steps.",
  },
  {
    date: "2025-01-22",
    text: "Added support for custom tags in business venue features form, ensuring they appear alongside predefined tags in MarryBirds Business. Improved accessibility in the mobile navigation sidebar.",
  },
  {
    date: "2025-01-21",
    text: "Fixed a bug in email existence check for sign up and made website field read-only in business submission form to prevent URL modifications after initial search in MarryBirds Business.",
  },
  {
    date: "2025-01-20",
    text: "Implemented conditional dashboard UI rendering and improved business onboarding flow by adding email verification checks for MarryBirds Business.",
  },
  {
    date: "2025-01-19",
    text: "Our friend stayed over a night with us. Had a good time, and went to see a project mapping event. It was beautiful!",
  },
  {
    date: "2025-01-18",
    text: "I went out with friends, walking around the city and the lake. One of them is a C++ programmer, and we had a nice talk.",
  },
  {
    date: "2025-01-17",
    text: "Enhanced business dashboard UX by implementing persistent state management and streamlined the business submission flow, ensuring a seamless transition from dashboard to the get-listed page.",
  },
  {
    date: "2025-01-16",
    text: "Restructured onboarding flow in MarryBirds Business to reduce friction.",
  },
  {
    date: "2025-01-15",
    text: "Updated Stripe subscription configuration and added URL normalization utility to automatically format URLs in MarryBirds Business.",
  },
  {
    date: "2025-01-14",
    text: "Integrated LogSnag event tracking system for real-time monitoring in MarryBirds Business, enabling instant notifications for critical user actions.",
  },
  {
    date: "2025-01-13",
    text: "Set up DMARC and implemented PostHog, Sentry, and LogSnap for MarryBirds.",
  },
  {
    date: "2025-01-12",
    text: "Reviewed the code of MarryBirds and removed unnecessary console logs.",
  },
  {
    date: "2025-01-11",
    text: "Learned about function declaration in C++ and how to plan a sitemap structure based on SEO research.",
  },
  {
    date: "2025-01-10",
    text: "It was my birthday today! This year, I want to deepen my knowledge of JavaScript, TypeScript, React and Next.js while learning new things like SEO. I look forward to building a lot of fun projects!",
  },
  {
    date: "2025-01-09",
    text: "Implemented local storage caching for AI venue data extraction to prevent redundant API calls and improve user experience across multi-step forms in MarryBirds Business.",
  },
  {
    date: "2025-01-08",
    text: "Enhanced venue submission forms by adding Zustand state management to persist extraction state across form steps, and improving form validation in MarryBirds Business.",
  },
  {
    date: "2025-01-07",
    text: "Implemented automated venue data extraction in MarryBirds Business. Integrated GPT-4 API to automatically populate venue submission forms by analyzing websites.",
  },
  {
    date: "2025-01-06",
    text: "Implemented geocoding functionality in MarryBirds. Added fallback address-to-coordinate conversion using Mapbox API.",
  },
  {
    date: "2025-01-05",
    text: "Corrected website input editability states based on venue submission type, enhanced venue form validation, and fixed timeout errors in photo upload API in MarryBirds Business.",
  },
  {
    date: "2025-01-04",
    text: "Started learning SEO with Danny Postma. Debugged and fixed venue listing form data flow in MarryBirds Business.",
  },
  {
    date: "2025-01-03",
    text: "Simplified and fixed the business signup flow in MarryBirds by implementing a location matching system that connects business profiles with venue listings.",
  },
  {
    date: "2025-01-02",
    text: "Fixed RLS policies and implemented explicit update/insert operations for business profile settings in MarryBirds.",
  },
  {
    date: "2025-01-01",
    text: "Added a journal to my website.",
  },
];

export default function JournalEntries() {
  return (
    <div className="space-y-8">
      <Chart entries={entries} title="" height={250} />

      {entries.map((entry, index) => (
        <div key={index} className="border-l-2 border-[var(--color-txt)] pl-4">
          <time className="text-sm opacity-80">{entry.date}</time>
          <p className="mt-2">{entry.text}</p>
        </div>
      ))}
    </div>
  );
}
