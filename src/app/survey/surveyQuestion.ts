export interface SurveyQuestion {
    id: number;
    statement: string;
    associated_risk: string;
    type_question: TypeQuestion;
    question_config: any; 
  }
  
  export enum TypeQuestion {
    NUMERIC = "NUMERIC",
    PERCENTAGE = "PERCENTAGE",
    SELECT = "SELECT",
    TEXT = "TEXT",
    YES_NO = "YES_NO",
  }