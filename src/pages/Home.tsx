import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <header>
        <h1>HRnet</h1>
        <Link to="/employees">View Current Employees</Link>
      </header>
      <section>
        <h2>Create Employee</h2>
        <form>
          <label>
            <span>First Name</span>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Employee's first name"
            />
          </label>
          <label>
            <span>Last Name</span>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Employee's last name"
            />
          </label>
          <label>
            <span>Date of Birth</span>
            <input type="date" name="dob" id="dob" placeholder="dd/mm/yyyy" />
          </label>
          <label>
            <span>Start Date</span>
            <input
              type="date"
              name="startDate"
              id="startDate"
              placeholder="Employee's starting date"
            />
          </label>
          <fieldset>
            <legend>Adress</legend>
            <label>
              <span>Street</span>
              <input
                type="text"
                name="street"
                id="street"
                placeholder="street number and name"
              />
            </label>
            <label>
              <span>City</span>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City name"
              />
            </label>
            <label>
              <span>State</span>
              <select name="state" id="state">
                <option value="alabama">Alabama</option>
                <option value="alabama">Alabama</option>
                <option value="alabama">Alabama</option>
                <option value="alabama">Alabama</option>
                <option value="alabama">Alabama</option>
                <option value="alabama">Alabama</option>
                <option value="alabama">Alabama</option>
              </select>
            </label>
            <label>
              <span>Zip Code</span>
              <input type="number" name="zipCode" id="zipCode" />
            </label>
          </fieldset>
          <label htmlFor="">
            <span>Department</span>
            <select name="department" id="department">
              <option value="sales">Sales</option>
              <option value="marketing">Narketing</option>
              <option value="engineering">Engineering</option>
              <option value="human-resources">Human Resources</option>
              <option value="legal">Legal</option>
            </select>
          </label>
          <button>Save</button>
        </form>
      </section>
    </>
  )
}
