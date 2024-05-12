import { SurveyConsolidated } from "src/app/entities/survey-consolidated";

export class ConsolidatedMetrics {
    consolidated : SurveyConsolidated;
    num_responses : number;
    highest_score : number;
    lowest_score : number;
    risk : string;

    constructor(
        consolidated : SurveyConsolidated,
        num_responses : number,
        highest_score : number,
        lowest_score : number,
        risk : string
    ) {
        this.consolidated = consolidated;
        this.num_responses = num_responses;
        this.highest_score = highest_score;
        this.lowest_score = lowest_score;
        this.risk = risk;
    }
}