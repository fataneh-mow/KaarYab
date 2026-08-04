import {
    OpportunityCategory,
    OpportunityStatus,
    OpportunityType,
    Opportunity,
} from "@/types/opportunity";


export const opportunities: Opportunity[] = [
    {
        id: "1",
        title: "Frontend Developer Intern",
        organization: "Kabul Tech Community",
        category: OpportunityCategory.INTERNSHIP,
        status: OpportunityStatus.ACTIVE,
        location: "Kabul",
        type: OpportunityType.REMOTE,
        deadline: "2026-08-20",
        description:
            "A beginner-friendly internship for students who want to improve their React and Next.js skills.",
        requirements: [
            "Basic React knowledge",
            "HTML and CSS",
            "Git and GitHub",
        ],
        applyLink: "https://example.com/apply",
        tags: [
            "React",
            "Next.js",
            "Frontend",
        ],
        featured: true,
        createdAt: "2026-08-01",
        createdBy: "mockData"
    },


    {
        id: "2",
        title: "Women in Technology Scholarship",
        organization: "Global Learning Foundation",
        category: OpportunityCategory.SCHOLARSHIP,
        status: OpportunityStatus.ACTIVE,
        location: "Online",
        type: OpportunityType.REMOTE,
        deadline: "2026-09-10",
        description:
            "Scholarship opportunity for women interested in learning technology and digital skills.",
        requirements: [
            "Basic English",
            "Motivation letter",
            "Internet access",
        ],
        applyLink: "https://example.com/scholarship",
        tags: [
            "Women",
            "Technology",
            "Scholarship",
        ],
        featured: true,
        createdAt: "2026-08-02",
        createdBy: "mockData"
    },


    {
        id: "3",
        title: "Junior React Developer",
        organization: "Afghan Digital Solutions",
        category: OpportunityCategory.JOB,
        status: OpportunityStatus.ACTIVE,
        location: "Herat",
        type: OpportunityType.HYBRID,
        deadline: "2026-09-01",
        description:
            "Looking for a junior frontend developer to join our web development team.",
        requirements: [
            "JavaScript",
            "React",
            "REST APIs",
        ],
        applyLink: "https://example.com/job",
        tags: [
            "JavaScript",
            "React",
            "Frontend",
        ],
        featured: true,
        createdAt: "2026-08-03",
        createdBy: "mockData"
    },


    {
        id: "4",
        title: "Full Stack Web Development Course",
        organization: "Online Coding Academy",
        category: OpportunityCategory.ONLINE_COURSE,
        status: OpportunityStatus.ACTIVE,
        location: "Online",
        type: OpportunityType.REMOTE,
        deadline: "2026-10-01",
        description:
            "Learn modern web development with JavaScript, React, Node.js, and databases.",
        requirements: [
            "Basic computer skills",
            "Internet connection",
        ],
        applyLink: "https://example.com/course",
        tags: [
            "Programming",
            "React",
            "Node.js",
        ],
        featured: false,
        createdAt: "2026-08-04",
        createdBy: "mockData"
    },


    {
        id: "5",
        title: "Remote Content Writer",
        organization: "Afghan Media Network",
        category: OpportunityCategory.REMOTE_WORK,
        status: OpportunityStatus.ACTIVE,
        location: "Remote",
        type: OpportunityType.REMOTE,
        deadline: "2026-08-30",
        description:
            "Create educational and technology-related content for online platforms.",
        requirements: [
            "Strong writing skills",
            "English communication",
        ],
        applyLink: "https://example.com/content",
        tags: [
            "Writing",
            "Remote",
            "Media",
        ],
        featured: false,
        createdAt: "2026-08-05",
        createdBy: "mockData"
    },


    {
        id: "6",
        title: "Digital Skills Training Program",
        organization: "Youth Development Center",
        category: OpportunityCategory.TRAINING_PROGRAM,
        status: OpportunityStatus.ACTIVE,
        location: "Herat",
        type: OpportunityType.ON_SITE,
        deadline: "2026-09-15",
        description:
            "Free training program teaching digital skills and professional development.",
        requirements: [
            "Motivation to learn",
            "Basic computer skills",
        ],
        applyLink: "https://example.com/training",
        tags: [
            "Training",
            "Skills",
        ],
        featured: false,
        createdAt: "2026-08-06",
        createdBy: "mockData"
    },


    {
        id: "7",
        title: "Community Volunteer Program",
        organization: "Afghan Youth Organization",
        category: OpportunityCategory.VOLUNTEER,
        status: OpportunityStatus.ACTIVE,
        location: "Mazar-e-Sharif",
        type: OpportunityType.ON_SITE,
        deadline: "2026-09-20",
        description:
            "Volunteer program focused on education and community development.",
        requirements: [
            "Teamwork",
            "Commitment",
        ],
        applyLink: "https://example.com/volunteer",
        tags: [
            "Volunteer",
            "Community",
        ],
        featured: false,
        createdAt: "2026-08-07",
        createdBy: "mockData"
    },


    {
        id: "8",
        title: "Backend Developer Position",
        organization: "Herat Software Company",
        category: OpportunityCategory.JOB,
        status: OpportunityStatus.ACTIVE,
        location: "Herat",
        type: OpportunityType.ON_SITE,
        deadline: "2026-10-05",
        description:
            "Backend developer role working with Node.js and databases.",
        requirements: [
            "Node.js",
            "MongoDB",
            "Express",
        ],
        applyLink: "https://example.com/backend",
        tags: [
            "Node.js",
            "MongoDB",
        ],
        featured: false,
        createdAt: "2026-08-08",
        createdBy: "mockData"
    },


    {
        id: "9",
        title: "UI/UX Design Internship",
        organization: "Creative Studio Afghanistan",
        category: OpportunityCategory.INTERNSHIP,
        status: OpportunityStatus.ACTIVE,
        location: "Kabul",
        type: OpportunityType.HYBRID,
        deadline: "2026-09-25",
        description:
            "Learn professional UI/UX design practices with experienced designers.",
        requirements: [
            "Figma basics",
            "Creative thinking",
        ],
        applyLink: "https://example.com/design",
        tags: [
            "Design",
            "Figma",
        ],
        featured: true,
        createdAt: "2026-08-09",
        createdBy: "mockData"
    },


    {
        id: "10",
        title: "Data Science Online Program",
        organization: "Tech Education Platform",
        category: OpportunityCategory.ONLINE_COURSE,
        status: OpportunityStatus.ACTIVE,
        location: "Online",
        type: OpportunityType.REMOTE,
        deadline: "2026-11-01",
        description:
            "Learn Python, data analysis, and machine learning fundamentals.",
        requirements: [
            "Basic programming",
            "Mathematics basics",
        ],
        applyLink: "https://example.com/data",
        tags: [
            "Python",
            "AI",
            "Data Science",
        ],
        featured: false,
        createdAt: "2026-08-10",
        createdBy: "mockData"
    },
];