import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Option } from 'src/app/core/models/option'
import { PART_JOB_TYPE_LIST, PROFESSIONAL_LAVEL_LIST, MANAGEMENT_LEVEL_LIST, AFFINITY_GROUP_LIST } from 'src/app/core/constants'
import { RestService } from 'src/app/core/rest.service';
import { PostResult } from 'src/app/core/models/postResult';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-increase-calculator',
  templateUrl: './increase-calculator.component.html',
  styleUrls: ['./increase-calculator.component.scss']
})
export class IncreaseCalculatorComponent implements OnInit {

  form: FormGroup;
  partTimeJobList: Option[] = PART_JOB_TYPE_LIST;
  professionalLevelList: Option[] = PROFESSIONAL_LAVEL_LIST;
  managementLevelList: Option[] = MANAGEMENT_LEVEL_LIST;
  affinityGroupList: Option[] = AFFINITY_GROUP_LIST;
  salaryResult:any = [];
  showTableResult = false;

  constructor(
    private fb: FormBuilder,
    private restService: RestService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      PartTimeJob: [1, Validators.required],
      ProfessionalLevel: [0, Validators.required],
      ManagementLevel: [1, Validators.required],
      YearsOfSeniority: [null, Validators.required],
      EntitledToAdditionalWork: [false, Validators.required],
      AffinityGroup: [1, Validators.required],
    });
  }

  onSubmit() {
    this.showTableResult = false;

    let params = this.form.getRawValue();
    !params.EntitledToAdditionalWork ? delete params.AffinityGroup : null;
    params.YearsOfSeniority = Math.floor(params.YearsOfSeniority);

    this.restService.post<PostResult[]>('SalaryCalculation', params).subscribe(
      (res: PostResult[]) => {        
        this.showTableResult = true;
        this.salaryResult[0] = {...res};        
        this.salaryResult[0]["affinityGroup"] = this.affinityGroupList[this.salaryResult[0].salaryBasic.affinityGroup].name;
        this.salaryResult[0]["partTimeJob"] = this.partTimeJobList[this.salaryResult[0].salaryBasic.partTimeJob].name;
        this.salaryResult[0]["professionalLevel"] = this.professionalLevelList[this.salaryResult[0].salaryBasic.professionalLevel].name;
        this.salaryResult[0]["managementLevel"] = this.managementLevelList[this.salaryResult[0].salaryBasic.managementLevel].name;
        this.salaryResult[0]["yearsOfSeniority"] = this.salaryResult[0].salaryBasic.yearsOfSeniority
        this.salaryResult[0]["entitledToAdditionalWorkTxt"] = this.salaryResult[0].salaryBasic.entitledToAdditionalWork ? "כן" : "לא";
        this.salaryResult[0]["entitledToAdditionalWork"] = this.salaryResult[0].salaryBasic.entitledToAdditionalWork;
        delete this.salaryResult.salaryBasic
      },
      (error: HttpErrorResponse) => alert(`שגיאת שרת`)
    );
  }

  get entitledToAdditional() {
    return this.form.get('EntitledToAdditionalWork')?.value;
  }
}
