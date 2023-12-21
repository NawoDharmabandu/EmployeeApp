using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NebulaApp.Models;
using NebulaApp.Services;
using System.Reflection;
using System.Threading.Tasks;

namespace NebulaApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeHandler;
        public EmployeeController(IEmployeeService employeeHandler)
        {
            _employeeHandler = employeeHandler;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            try
            {
                var result = await this._employeeHandler.GetAllEmployee();
                return Ok(result);
            }
            catch (ArgumentException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception exp)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            try
            {
                var result = await _employeeHandler.GetEmployeeById(id);
                return Ok(result);
            }
            catch (ArgumentException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception exp)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Employee>> CreateEmployee(Employee employee)
        {
            try
            {
                var result = await _employeeHandler.CreateEmployee(employee);
                return Ok(result);
            }
            catch (ArgumentException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception exp)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateEmployee(int id, Employee employee)
        {
            try
            {
                var result = await _employeeHandler.EditEmployee(id, employee);
                return Ok(result);
            }
            catch (ArgumentException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception exp)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEmployee(int id)
        {
            try
            {
                var result = await _employeeHandler.DeleteEmployee(id);
                return Ok(result);
            }
            catch (ArgumentException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception exp)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }

            //if (_employeeContext == null) 
            //{  
            //    return NotFound(); 
            //}

            //var employee = await _employeeContext.Employees
            //    .Include(e => e.Address)
            //    .FirstOrDefaultAsync(e => e.EmpID == id);

            //if (employee == null)
            //{
            //    return NotFound();
            //}

            //if (employee.Address != null)
            //{
            //    _employeeContext.Addresses.Remove(employee.Address);
            //}

            //_employeeContext.Employees.Remove(employee);
            //await _employeeContext.SaveChangesAsync();

            //return Ok();
        }
    }
}
