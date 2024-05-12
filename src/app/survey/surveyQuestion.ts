export interface SurveyQuestion {
    id: number;
    statement: string;
    asociated_risk: string;
    type_question: TypeQuestion;
    questionConfig: any; 
  }
  
  export enum TypeQuestion {
    NUMERIC = "NUMERIC",
    PERCENTAGE = "PERCENTAGE",
    SELECT = "SELECT",
    TEXT = "TEXT",
    YES_NO = "YES_NO",
  }