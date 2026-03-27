export type AssessmentStatus = "Active" | "Completed" | "Processed";
export type QuestionnaireStatus = "Pending" | "Completed";

export type Assessment = {
  id: string;
  title: string;
  scope: string;
  respondents: number;
  completedResponses: number;
  deadline: string;
  dispatched: string;
  status: AssessmentStatus;
  risksIdentified: number;
};

export type QuestionnaireAnswers = {
  q1: string;
  q2: string;
  q3: string;
};

export type Questionnaire = {
  id: string;
  assessmentId: string;
  respondentName: string;
  department: string;
  status: QuestionnaireStatus;
  answers?: QuestionnaireAnswers;
};

export type CreateAssessmentInput = {
  title: string;
  scope: string;
  respondents: number;
  deadline: string;
};