using IncreaseCalculatorApi.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IncreaseCalculatorApi.BL
{
    public class SalaryCalculationBL
    {
        public static object CalculationSalaryBL(Salary data)
        {
            CalculatedSalary calculatedSalary = CalculateBasicSalary(data);

            return calculatedSalary;
        }

        // Returns base salary calculation by part-time position
        private static CalculatedSalary CalculateBasicSalary(Salary data)
        {
            CalculatedSalary calculatedSalary = new CalculatedSalary();
            calculatedSalary.SalaryBasic = data;

            int AverageFullTime = 170; // Average full time

            int BasicSalary = 100; // Basic hourly wage

            int AdditionalManagementAndProfessional = 20; // Addendum to management and level

            int CalculatedBasicSalary = (BasicSalary + ((data.ProfessionalLevel + data.ManagementLevel) * AdditionalManagementAndProfessional)); // Calculation of hourly wages

            calculatedSalary.CalculatedFundamentalSalary = CalculatedBasicSalary * (AverageFullTime * data.PartTimeJob); // Add hourly wage calculated times the part-time position according to the hourly wage

            return CalculateSenioritySalary(calculatedSalary);
        }

        // Calculation of seniority supplement to salary
        private static CalculatedSalary CalculateSenioritySalary(CalculatedSalary calculatedSalary)
        {
            double PercentageSeniority = 0.0125; // Percentage increase for seniority year

            calculatedSalary.AdditionalSeniorityRate = (calculatedSalary.SalaryBasic.YearsOfSeniority * PercentageSeniority);

            calculatedSalary.CalculateSenioritySalary = (calculatedSalary.CalculatedFundamentalSalary * calculatedSalary.AdditionalSeniorityRate);

            return CalculateAdditionalWorkSalary(calculatedSalary);
        }

        // Calculation of additional work
        private static CalculatedSalary CalculateAdditionalWorkSalary(CalculatedSalary calculatedSalary)
        {
            calculatedSalary.CalculateSecondJobSalary = ( (calculatedSalary.SalaryBasic.AffinityGroup / 100) * calculatedSalary.CalculatedFundamentalSalary); // Fundamental salary twice the percentage of overtime

            calculatedSalary.CalculatedBasicSalary = calculatedSalary.CalculatedFundamentalSalary + calculatedSalary.CalculateSenioritySalary + calculatedSalary.CalculateSecondJobSalary; // Basic salary 

            return CalculateIncreaseSalary(calculatedSalary);
        }

        // Salary increase calculation
        private static CalculatedSalary CalculateIncreaseSalary(CalculatedSalary calculatedSalary)
        {
            calculatedSalary.CalculateSecondJobSalary = ((calculatedSalary.SalaryBasic.AffinityGroup / 100) * calculatedSalary.CalculatedFundamentalSalary); // Fundamental salary twice the percentage of overtime

            calculatedSalary.CalculatedBasicSalary = calculatedSalary.CalculatedFundamentalSalary + calculatedSalary.CalculateSenioritySalary + calculatedSalary.CalculateSecondJobSalary; // Basic salary 

            return CalculateAdditionalBasicSalary(calculatedSalary);
        }

        // Salary basic calculation
        private static CalculatedSalary CalculateAdditionalBasicSalary(CalculatedSalary calculatedSalary)
        {

            switch (calculatedSalary.CalculatedBasicSalary) // Calculation of salary increase percentage
            {
                case double n when (n > 30000):
                    calculatedSalary.RateSalaryIncrease = 0.1;
                    break;

                case double n when (n <= 30000 && n > 20000):
                    calculatedSalary.RateSalaryIncrease = 0.125;
                    break;

                case double n when (n <= 20000):
                    calculatedSalary.RateSalaryIncrease = 0.15;
                    break;
            }
            calculatedSalary.RateSalaryIncrease += ((calculatedSalary.AdditionalSeniorityRate / 100) + 0.1);

            calculatedSalary.SalaryIncreaseAmount = calculatedSalary.CalculatedBasicSalary * calculatedSalary.RateSalaryIncrease; // Salary increase amount

            calculatedSalary.CalculatedNewBasicSalary = calculatedSalary.SalaryIncreaseAmount + calculatedSalary.CalculatedBasicSalary; // New basic salary 

            return calculatedSalary;
        }
    }
}
