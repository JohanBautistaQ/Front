/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SurveyApiService } from './surveyApi.service';

describe('Service: SurveyApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyApiService]
    });
  });

  it('should ...', inject([SurveyApiService], (service: SurveyApiService) => {
    expect(service).toBeTruthy();
  }));
});
