import dashboardImage from "@/assets/images/helpDesk/articles/posting-job1.png";
import jobDetailsImage from "@/assets/images/helpDesk/articles/posting-job2.png";
import companyProfileImage from "@/assets/images/helpDesk/articles/getting-started-1.png";
import dashboardSettingsImage from "@/assets/images/helpDesk/articles/getting-started-2.png";
import candidateFilterImage from "@/assets/images/helpDesk/articles/candidate-management1.png";
import interviewScheduleImage from "@/assets/images/helpDesk/articles/candidate-management2.png";
import teamManagementImage from "@/assets/images/helpDesk/articles/employer-account1.png";
import notificationSettingsImage from "@/assets/images/helpDesk/articles/employer-account2.png";
import paymentMethodImage from "@/assets/images/helpDesk/articles/plans-billing1.png";
import subscriptionPlanImage from "@/assets/images/helpDesk/articles/plans-billing2.png";
import troubleshootingImage from "@/assets/images/helpDesk/articles/tech-support1.png";
import supportTeamImage from "@/assets/images/helpDesk/articles/tech-support2.png";
export const jobPostingArticles = [
  {
    id: 1,

    slug: "job-posting",

    category: "Employer Guide",

    title: "How to Create a Successful Job Posting",

    description:
      "Learn how to create compelling job postings that attract qualified candidates, improve application quality, and simplify your hiring process.",

    publishDate: "July 16, 2026",

    readTime: "6 min read",

    author: "Digni Team",

    relatedArticles: [
      "writing-an-effective-job-description",
      "managing-active-job-posts",
      "boost-your-job-visibility",
    ],

    sections: [
      {
        id: 1,

        heading: "1. Create a Clear Job Title",

        content:
          "Your job title is the first thing candidates notice. Choose a title that clearly reflects the position and avoids internal company terminology or unnecessary abbreviations. A simple, descriptive title improves search visibility and attracts more relevant applicants.",
      },

      {
        id: 2,

        heading: "2. Write an Engaging Job Description",

        content:
          "Provide a detailed overview of the role, day-to-day responsibilities, and expectations. Highlight your company culture, growth opportunities, and what makes the position unique so candidates understand why they should apply.",

        image: dashboardImage,

        imageAlt: "Create Job Dashboard",
      },

      {
        id: 3,

        heading: "3. Define Required Skills and Qualifications",

        content:
          "Clearly separate required qualifications from preferred skills. Mention education, certifications, technical expertise, and years of experience only where necessary to avoid discouraging qualified applicants.",
      },

      {
        id: 4,

        heading: "4. Add Salary and Benefits",

        content:
          "Whenever possible, include a salary range along with benefits such as health insurance, flexible working hours, remote work options, bonuses, or professional development opportunities. Transparent listings generally receive higher engagement.",

        image: jobDetailsImage,

        imageAlt: "Job Details Form",
      },

      {
        id: 5,

        heading: "5. Review and Publish",

        content:
          "Before publishing, review your job posting for spelling, formatting, and accuracy. Ensure all information is complete and up to date. Once everything looks good, publish the job and monitor incoming applications from your employer dashboard.",
      },
    ],
  },
  {
    id: 2,

    slug: "getting-started",

    category: "Getting Started",

    title: "Getting Started with Digni Talent Connect",

    description:
      "Learn the essentials of using Digni Talent Connect. Set up your employer account, complete your company profile, and begin your hiring journey with confidence.",

    publishDate: "July 18, 2026",

    readTime: "5 min read",

    author: "Digni Team",

    relatedArticles: [
      "job-posting",
      "employer-account",
      "candidate-management",
    ],

    sections: [
      {
        id: 1,

        heading: "1. Create Your Employer Account",

        content:
          "Sign up using your business email address and create a secure password. Once your account is created, verify your email to unlock all employer features and access your recruitment dashboard.",
      },

      {
        id: 2,

        heading: "2. Complete Your Company Profile",

        content:
          "Add your company logo, business description, website, industry, company size, and office location. A complete profile builds trust with candidates and increases the chances of receiving quality applications.",

        image: companyProfileImage,

        imageAlt: "Complete Company Profile",
      },

      {
        id: 3,

        heading: "3. Explore Your Employer Dashboard",

        content:
          "Your dashboard gives you quick access to job postings, candidate applications, interviews, company settings, and analytics. Take a few minutes to explore the available tools before creating your first job.",
      },

      {
        id: 4,

        heading: "4. Configure Your Hiring Preferences",

        content:
          "Set your preferred hiring locations, notification preferences, recruiter permissions, and communication settings. Personalizing these options helps streamline your recruitment workflow.",

        image: dashboardSettingsImage,

        imageAlt: "Employer Dashboard Settings",
      },

      {
        id: 5,

        heading: "5. Start Hiring with Confidence",

        content:
          "Once your profile is complete and preferences are configured, you're ready to publish your first job. Use the platform's hiring tools to attract qualified talent, manage applications, and build your team efficiently.",
      },
    ],
  },
  {
    id: 3,

    slug: "candidate-management",

    category: "Candidate Management",

    title: "Manage Candidates Efficiently",

    description:
      "Learn how to organize applications, review candidate profiles, schedule interviews, and streamline your hiring process from a single dashboard.",

    publishDate: "July 20, 2026",

    readTime: "7 min read",

    author: "Digni Team",

    relatedArticles: ["job-posting", "getting-started", "employer-account"],

    sections: [
      {
        id: 1,

        heading: "1. Review Incoming Applications",

        content:
          "Access all applications submitted for your job postings from the Candidates section. Quickly review resumes, portfolios, cover letters, and application details to identify the most qualified candidates.",
      },

      {
        id: 2,

        heading: "2. Filter and Organize Candidates",

        content:
          "Use filters such as experience, skills, education, location, and application status to narrow down your search. Organizing applicants into categories makes it easier to manage large hiring campaigns.",

        image: candidateFilterImage,

        imageAlt: "Filter Candidates",
      },

      {
        id: 3,

        heading: "3. Shortlist Top Talent",

        content:
          "Move promising candidates to your shortlist for quick access during the hiring process. Keeping a shortlist helps your recruitment team stay organized and focus on the strongest applicants.",
      },

      {
        id: 4,

        heading: "4. Schedule Interviews and Communicate",

        content:
          "Invite shortlisted candidates for interviews directly through the platform. Send interview invitations, update application statuses, and maintain clear communication throughout the recruitment process.",

        image: interviewScheduleImage,

        imageAlt: "Interview Scheduling",
      },

      {
        id: 5,

        heading: "5. Track Hiring Progress",

        content:
          "Monitor every stage of the hiring pipeline, from application review to final selection. Keeping candidate statuses updated ensures a smooth recruitment workflow and improves collaboration among hiring team members.",
      },
    ],
  },
  {
    id: 4,

    slug: "employer-account",

    category: "Employer Account",

    title: "Manage Your Employer Account",

    description:
      "Learn how to manage your company profile, account security, team members, and employer settings to keep your organization up to date.",

    publishDate: "July 22, 2026",

    readTime: "6 min read",

    author: "Digni Team",

    relatedArticles: [
      "getting-started",
      "candidate-management",
      "plans-and-billing",
    ],

    sections: [
      {
        id: 1,

        heading: "1. Update Your Company Profile",

        content:
          "Keep your company information accurate by updating your logo, business description, website, office locations, and company details. A complete and professional profile builds trust with candidates and strengthens your employer brand.",
      },

      {
        id: 2,

        heading: "2. Manage Team Members and Permissions",

        content:
          "Invite recruiters, HR managers, and hiring managers to collaborate on hiring. Assign role-based permissions so every team member has access only to the features they need.",

        image: teamManagementImage,

        imageAlt: "Manage Team Members",
      },

      {
        id: 3,

        heading: "3. Secure Your Account",

        content:
          "Protect your employer account by using a strong password, enabling two-factor authentication, reviewing recent login activity, and regularly updating your security settings.",
      },

      {
        id: 4,

        heading: "4. Configure Notifications and Preferences",

        content:
          "Customize email notifications, hiring alerts, interview reminders, and communication preferences to stay informed without unnecessary distractions.",

        image: notificationSettingsImage,

        imageAlt: "Notification Preferences",
      },

      {
        id: 5,

        heading: "5. Keep Your Account Up to Date",

        content:
          "Regularly review your account information, subscription details, recruiter access, and company profile to ensure your hiring team always has accurate and up-to-date information.",
      },
    ],
  },
  {
    id: 5,

    slug: "plans-and-billing",

    category: "Plans & Billing",

    title: "Manage Your Subscription, Billing & Payments",

    description:
      "Learn how to manage your subscription plan, update payment methods, download invoices, and keep your billing information up to date.",

    publishDate: "July 24, 2026",

    readTime: "5 min read",

    author: "Digni Team",

    relatedArticles: ["employer-account", "job-posting", "technical-support"],

    sections: [
      {
        id: 1,

        heading: "1. Choose the Right Subscription Plan",

        content:
          "Explore the available subscription plans and choose the one that best fits your hiring needs. Compare features, recruitment limits, and premium tools before upgrading your account.",
      },

      {
        id: 2,

        heading: "2. Update Your Payment Method",

        content:
          "Securely add or update your payment method using supported debit cards, credit cards, or online payment options. Keeping your payment details current helps avoid interruptions to your subscription.",

        image: paymentMethodImage,

        imageAlt: "Update Payment Method",
      },

      {
        id: 3,

        heading: "3. View Billing History and Invoices",

        content:
          "Access your billing history to review previous transactions, download invoices, and keep financial records organized for accounting and business reporting purposes.",
      },

      {
        id: 4,

        heading: "4. Upgrade, Downgrade or Cancel Your Plan",

        content:
          "Change your subscription at any time based on your hiring requirements. Upgrade for additional features or downgrade when your recruitment activity decreases, with changes reflected according to your billing cycle.",

        image: subscriptionPlanImage,

        imageAlt: "Subscription Management",
      },

      {
        id: 5,

        heading: "5. Keep Billing Information Updated",

        content:
          "Regularly review your billing details, company information, tax information, and payment methods to ensure uninterrupted service and accurate invoice generation.",
      },
    ],
  },
  {
    id: 6,

    slug: "technical-support",

    category: "Technical Support",

    title: "Resolve Technical Issues Quickly",

    description:
      "Find solutions to common technical problems, troubleshoot platform issues, and learn how to get support when you need assistance.",

    publishDate: "July 26, 2026",

    readTime: "6 min read",

    author: "Digni Team",

    relatedArticles: [
      "employer-account",
      "plans-and-billing",
      "candidate-management",
    ],

    sections: [
      {
        id: 1,

        heading: "1. Identify the Issue",

        content:
          "Before contacting support, identify the exact issue you're experiencing. Check whether it's related to login, job posting, candidate management, billing, or account settings. A clear understanding of the problem helps resolve it much faster.",
      },

      {
        id: 2,

        heading: "2. Troubleshoot Common Problems",

        content:
          "Try basic troubleshooting steps such as refreshing the page, clearing your browser cache, using a supported browser, checking your internet connection, or signing out and back into your account. Many common issues can be resolved within minutes.",

        image: troubleshootingImage,

        imageAlt: "Troubleshooting Common Problems",
      },

      {
        id: 3,

        heading: "3. Report a Technical Issue",

        content:
          "If the issue persists, submit a support request with detailed information. Include screenshots, error messages, browser details, and the steps you followed so our support team can investigate the issue more efficiently.",
      },

      {
        id: 4,

        heading: "4. Contact Our Support Team",

        content:
          "Reach out to our technical support team through email or the Help Desk. Our specialists are available to assist with account issues, platform errors, subscription questions, and recruitment-related technical problems.",

        image: supportTeamImage,

        imageAlt: "Contact Technical Support",
      },

      {
        id: 5,

        heading: "5. Stay Updated on Issue Resolution",

        content:
          "Track the progress of your support request and review updates from our team. You'll receive notifications when your issue has been resolved or if additional information is required.",
      },
    ],
  },
];
