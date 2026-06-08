import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ComplianceFlagship from "./components/ComplianceFlagship";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import RealEstateIllustration from "./components/illustrations/RealEstateIllustration";
import MusicTeacherIllustration from "./components/illustrations/MusicTeacherIllustration";
import EmailReplyIllustration from "./components/illustrations/EmailReplyIllustration";
import GovBotIllustration from "./components/illustrations/GovBotIllustration";
import FbAdCheckerIllustration from "./components/illustrations/FbAdCheckerIllustration";
import ReferralIllustration from "./components/illustrations/ReferralIllustration";
import ChurchIllustration from "./components/illustrations/ChurchIllustration";

const projects = [
  {
    id: "email",
    headline: "AI Chat Tool That Drafts Customer Email Replies Instantly",
    subhead:
      "Custom AI support tool for a SaaS company that doubled revenue, then immediately got buried in customer emails.",
    tagline:
      "Their support team was drowning. I built a tool that drafts the reply before they finish reading the email.",
    problem:
      "A SaaS company had just doubled their monthly revenue. Support volume doubled with it, and their team wasn't ready. Reps were starting every reply from a blank page, digging through documentation, and taking far too long on emails that should have been routine. New hires made it worse, with no good way to get someone up to speed without weeks of on-the-job exposure.",
    solution:
      "A chat interface where a support rep pastes an incoming customer email and instantly gets back a professionally drafted reply, trained on the company's actual voice, real policies, and their full FAQ library. The tool handles multi-turn conversations, so reps can refine the draft, ask follow-up questions, or adjust tone. For new hires, it's effectively a knowledge base and writing coach in one.",
    techStack: ["Next.js", "OpenAI API", "Prompt Engineering", "API Integration"],
    imageSlug: "ai-email-reply",
    imageAlt: "AI Email Reply Tool - abstract visualization of email flow",
  },
  {
    id: "music",
    headline: "Music Teacher Admin System: 15 Hours → 15 Minutes",
    subhead:
      "Purpose-built web application that handles parent communication, attendance, and student management automatically.",
    tagline:
      "A guitar teacher was doing 15 hours of admin every week. I cut it to 15 minutes.",
    problem:
      "A guitar teacher running multiple class sections was spending 15+ hours every week on things that had nothing to do with teaching: writing individual parent updates, tracking attendance across classes, managing student progression, and keeping records straight. Nearly two full workdays every week doing admin work.",
    solution:
      "A web application designed specifically around how this teacher actually works. During class, the teacher logs attendance and quick notes. From there, the system takes over: every parent gets a personalized weekly update with a single button click, level promotions trigger congratulatory messages, and full student history is always one click away. The result: 15 minutes of admin instead of 15 hours, plus better retention worth $10,000+/yr.",
    techStack: [
      "React",
      "Node.js",
      "AI Content Generation",
      "CRM Architecture",
      "Automated Notifications",
    ],
    imageSlug: "music-teacher-admin",
    imageAlt:
      "Music Teacher Admin System - abstract representation of chaos to simplicity",
  },
  {
    id: "realestate",
    headline: "Automated Lead Finder for Real Estate Investors",
    subhead:
      "24/7 automated lead system that finds expired listings, enriches owner contact data, and delivers ready-to-call leads before competitors move.",
    tagline:
      "The moment a listing expires, my client already has the owner's phone number in their CRM.",
    problem:
      "In real estate investing, expired listings are high-intent leads. The seller tried to sell and failed. The window to reach them is short, and the investors who win are the ones who get there first. Doing this manually meant hours every day checking for expirations, then more hours tracking down owner contact info.",
    solution:
      "A fully automated system that monitors listings around the clock. The moment a property listing expires, the system identifies the property, researches and enriches owner contact data, and delivers a ready-to-call lead directly into the client's CRM. Built-in cost safeguards prevent runaway API spend, and a full activity log creates accountability.",
    techStack: [
      "Automation",
      "CRM Integration",
      "Lead Enrichment APIs",
      "Database Architecture",
      "Cost Controls",
    ],
    imageSlug: "real-estate-leads",
    imageAlt: "Real Estate Lead Finder - abstract map with highlighted property",
  },
  {
    id: "govbot",
    headline:
      "Bot That Navigates Gov't Websites & Captures Leads Automatically",
    subhead:
      "Browser automation agent built to extract leads from a county government website that blocks traditional scraping tools.",
    tagline:
      "It solves the CAPTCHA, fills the form, extracts the results, and delivers the lead. Completely unattended.",
    problem:
      "County government websites are built for humans, and deliberately difficult to automate. They have session-based navigation, security challenges, multi-step forms, and no API. Most people give up trying to access this data at scale. This client needed leads from that data, daily, without assigning a person to spend hours manually working through the site.",
    solution:
      "A system that operates a real web browser on autopilot, the same way a human researcher would, but without the human. The bot navigates to the government site, handles the security challenge, fills out search forms, extracts results, and enriches them with owner contact information. Finished leads land in the client's CRM every day, ready to work.",
    techStack: [
      "Browser Automation",
      "AI Agent Development",
      "Lead Enrichment",
      "CRM Integration",
      "Web Scraping",
    ],
    imageSlug: "govt-website-bot",
    imageAlt:
      "Government Website Bot - abstract browser automation visualization",
  },
  {
    id: "fbads",
    headline:
      "Automated Facebook Ad Checker: Upload a List, Get Results Back in 25 Minutes",
    subhead:
      "Automated web service that checks whether companies are running Facebook ads. Upload a CSV, get results emailed back as a spreadsheet.",
    tagline:
      "What used to take a VA 20+ hours now takes 25 minutes and doesn't require anyone.",
    problem:
      "Knowing which businesses are actively running Facebook ads is useful sales intelligence. It signals marketing budget and willingness to spend. The client was using a VA to check Meta's Ad Library one company at a time. 20+ hours to process 1,000 contacts, with delayed and expensive results.",
    solution:
      "A self-service web tool that handles the entire process automatically. The user uploads a CSV and pays through Stripe. The system verifies every contact against Meta's official Ad Library, compiles results into a clean spreadsheet, and emails it back. 1,000 contacts checked in under 25 minutes. No VA. No manual steps.",
    techStack: [
      "Web Application",
      "Stripe",
      "Meta Ad Library API",
      "Automation",
      "Lead Intelligence",
    ],
    imageSlug: "facebook-ad-checker",
    imageAlt: "Facebook Ad Checker - abstract data transformation visual",
  },
  {
    id: "referral",
    headline:
      "AI Tool That Writes Personalized Referral Texts for Any Business Type",
    subhead:
      "AI-powered web app that clarifies what a business does, identifies who it helps, and hands the user a ready-to-send referral text in seconds.",
    tagline:
      "The problem wasn't that they didn't have referrals. The problem was nobody understood what they did.",
    problem:
      "Most referral tools assume the problem is friction in the asking process. This client's real problem was earlier: the people in their network didn't actually understand what they did, who it could help, or how to describe it. So they never referred anyone, not because they didn't want to, but because they didn't know what to say.",
    solution:
      "An AI-powered web app that walks a user through understanding what the business owner actually does, in plain language, specific to the business type. It then generates a personalized, conversational referral text the user can copy and send immediately. The underlying prompt architecture handles personalization dynamically, so output never feels templated.",
    techStack: [
      "AI App Development",
      "Prompt Engineering",
      "OpenAI API",
      "React",
      "UI Design",
    ],
    imageSlug: "referral-text-generator",
    imageAlt: "Referral Text Generator - abstract input to output flow",
  },
  {
    id: "church",
    headline: "Church Prayer & Community Platform",
    subhead:
      "Complete web application with invite-code access, engagement dashboards, automated notifications, and content moderation, all running with zero manual admin effort.",
    tagline:
      "Built a full multi-tenant platform for churches to manage prayer requests, track answered prayers, and keep their congregation connected.",
    problem:
      "Most churches have no digital infrastructure for what happens between Sundays. Prayer requests get shared verbally, tracked in spreadsheets or group chats, and eventually fall through the cracks. Pastors and administrators have no visibility into engagement: who's active, who's dropped off, what's resonating.",
    solution:
      "A full web application built as a multi-tenant platform: one system, multiple congregations, each with their own private space. Members join through invite codes, post prayer requests, pray alongside others, and mark prayers as answered. Administrators get a real-time dashboard showing engagement metrics they've never had before. Behind the scenes: automated notifications, member approval workflow, and content moderation tools.",
    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "SaaS Architecture",
      "Automated Notifications",
      "Multi-Tenant Design",
    ],
    imageSlug: "church-prayer-platform",
    imageAlt: "Church Prayer Platform - abstract community network",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          {/* GFCU Flagship */}
          <ComplianceFlagship />

          {/* Divider */}
          <div className="max-w-content mx-auto px-6 py-12">
            <div className="h-px bg-border" />
          </div>

          {/* Other Projects Grid */}
          <div className="max-w-content mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  illustration={
                    project.id === "realestate" ? <RealEstateIllustration /> :
                    project.id === "music" ? <MusicTeacherIllustration /> :
                    project.id === "email" ? <EmailReplyIllustration /> :
                    project.id === "govbot" ? <GovBotIllustration /> :
                    project.id === "fbads" ? <FbAdCheckerIllustration /> :
                    project.id === "referral" ? <ReferralIllustration /> :
                    project.id === "church" ? <ChurchIllustration /> :
                    undefined
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
