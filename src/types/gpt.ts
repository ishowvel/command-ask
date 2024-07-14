export type StreamlinedComment = {
  id: number;
  user?: string;
  body?: string;
  org: string;
  repo: string;
  isPull: boolean;
  issueUrl: string;
  specOrBody?: {
    html: string;
    text: string;
  };
};

export type StreamlinedComments = {
  issue: number;
  repo: string;
  org: string;
  comments: StreamlinedComment[];
};
