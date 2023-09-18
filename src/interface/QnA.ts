import { MBTI } from '@/interface/MBTI';

export interface AnswerType {
  answer: string;
  type: MBTI;
}

export interface QnAType {
  question: string;
  options: AnswerType[];
}
