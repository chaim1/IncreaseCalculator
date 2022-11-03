export class Salary {
    "partTimeJob":number;
    "professionalLevel":number;
    "managementLevel":number;
    "yearsOfSeniority":number;
    "entitledToAdditionalWork":boolean;
    "affinityGroup":number;      
}

export class PostResult {
    "partTimeJob":number;
    "professionalLevel":number;
    "managementLevel":number;
    "yearsOfSeniority":number;
    "entitledToAdditionalWork":boolean;
    "affinityGroup":number;
    "salaryResult":Salary;
    "calculatedFundamentalSalary":number;
    "calculateSenioritySalary":number;
    "additionalSeniorityRate":number;
    "calculateSecondJobSalary":number;
    "calculatedBasicSalary":number;
    "salaryIncreaseAmount":number;
    "rateSalaryIncrease":number;
    "calculatedNewBasicSalary":number;
}