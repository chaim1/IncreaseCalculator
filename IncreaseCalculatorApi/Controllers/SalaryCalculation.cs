using IncreaseCalculatorApi.BL;
using IncreaseCalculatorApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IncreaseCalculatorApi.Controllers
{
    [Route("api/SalaryCalculation")]
    [ApiController]
    public class SalaryCalculation : ControllerBase
    {
        [HttpPost]
        public object CalculationSalary([FromBody] Salary data)
        {
            try
            {
                return SalaryCalculationBL.CalculationSalaryBL(data);
            }
            catch (Exception ex)
            {
                return ex;
            }
        }
    }
}
