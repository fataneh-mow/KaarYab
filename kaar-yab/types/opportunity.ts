export enum OpportunityCategory {
  JOB = "Job",
  INTERNSHIP = "Internship",
  SCHOLARSHIP = "Scholarship",
  ONLINE_COURSE = "Online Course",
  REMOTE_WORK = "Remote Work",
  TRAINING_PROGRAM = "Training Program",
  VOLUNTEER = "Volunteer",
}

export enum OpportunityStatus {
  ACTIVE = "Active",
  CLOSED = "Closed",
  PENDING = "Pending",
}

export enum OpportunityType {
  REMOTE = "Remote",
  ON_SITE = "On-site",
  HYBRID = "Hybrid",
}

export interface Opportunity {

    id:string;

    title:string;

    organization:string;

    category:string;

    location:string;

    type:string;

    deadline:string;

    description:string;

    requirements:string[];

    applyLink:string;

    tags:string[];

    createdBy:string;

    createdAt:string;

}