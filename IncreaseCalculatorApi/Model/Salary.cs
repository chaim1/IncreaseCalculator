using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IncreaseCalculatorApi.Model
{
    public class Salary
    {
        public double   PartTimeJob { get; set; }
        public int      ProfessionalLevel { get; set; }
        public int      ManagementLevel { get; set; }
        public int      YearsOfSeniority { get; set; }
        public bool     EntitledToAdditionalWork { get; set; }
        public double   AffinityGroup { get; set; }
    }

    public class CalculatedSalary
    {
        public Salary   SalaryBasic { get; set; }
        public double   CalculatedFundamentalSalary { get; set; }
        public double   CalculateSenioritySalary { get; set; }
        public double   AdditionalSeniorityRate { get; set; }
        public double   CalculateSecondJobSalary { get; set; }
        public double   CalculatedBasicSalary { get; set; }
        public double   SalaryIncreaseAmount { get; set; }
        public double   RateSalaryIncrease { get; set; }
        public double   CalculatedNewBasicSalary { get; set; }

    }
}
