export class SurveyConsolidated {
  asociated_company: number;
  score: number;
  date: string;
  expiration_date: string;

  constructor(
    asociated_company: number,
    score: number,
    date: string,
    expiration_date: string
  ) {
    this.asociated_company = asociated_company;
    this.score = score;
    this.date = date;
    this.expiration_date = expiration_date;
  }
}
