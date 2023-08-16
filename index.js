const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: 'root',
        database: 'employee_db'
    },
    console.log(`Connected to the movies_db database.`)
);

function init() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "Userchoice",
            // add a new question here
            choices: [
                "View all departments?",
                "View all roles?",
                "View all employees?",
                "Add department?",
                "Add a role?",
                "Add an employee?",
                "Update employee role?"
            ]
        }
    ]).then((data) => {
        console.log(data)
        // create if statement here
        if (data.Userchoice === "View all departments?") {
            ViewDepartments()
        }
        if (data.Userchoice === "View all roles?") {
            ViewRoles()
        }
        if (data.Userchoice === "View all employees?") {
            ViewEmployees()
        }
        if (data.Userchoice === "Add department?") {
            addDepartment()
        }
        if (data.Userchoice === "Add a role?") {
                addRole ()
        }
        if (data.Userchoice === "Add an employee?") {
            addEmployee ()
        }
        if (data.Userchoice ===  "Update employee role?") {
                updateEmployee ()
        }
    })
}
init()


// create a function that goes with the "if" statement (refer back to miniproject if you get stuck)
// query tells what to do to the database
function ViewDepartments() {
    db.query("SELECT * FROM department", (err, data) => {
        console.table(data)
    })
}

function ViewRoles() {
    db.query("SELECT * from role", (err, data) => {
        console.table(data)
    })
}

function ViewEmployees() {
    db.query("SELECT * FROM employee", (err, data) => {
        console.table(data)
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "Whats the new department name?",
            name: "Newdepartment"
        }
    ]).then((data) => {
        db.query(`INSERT INTO department (name) VALUES(?)`, [data.Newdepartment], (err, res) => {
            if (err) throw err
            console.log("Department added successfully!")
            init()
        })
    })
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the role?", 
             name: "Newrole"
        },
        {
            type: "input",
            message: "What is the salary of the role",
            name: "salary"
        },
        {
            type: "input",
            message: "What is the department id of this role",
            name: "departmentid"
        }
    ]).then((data) => {
        db.query(`INSERT INTO role (title, salary, department_id) VALUES(?,?,?)`, [data.Newrole, data.salary, data.departmentid], (err, res) => {
            if (err) throw err
            console.log("New role added successfully!")
            init()
        })
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the employee?", 
             name: "firstname"
        },
        {
            type: "input",
            message: "What is the salary of the employee?",
            name: "salary"
        },
        {
            type: "input",
            message: "What is the department id of the employee?",
            name: "departmentid"
        },
        {
                type: "input",
                message: "What is the manager id of the employee?",
                name: "managerid"
            
        }
    ]).then((data) => {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`, [data.firstname, data.salary, data.departmentid, data.managerid], (err, res) => {
            if (err) throw err
            console.log("New employee added successfully!")
            init()
        })
    })
}

function updateEmployee () {
   inquirer.prompt([
    {
        type: "input",
        message: "What is the first name of the employee?",
        name: "firstname"
    },
    {
        type: "input",
        message: "What is the last name of the employee?",
        name: "lastname"
    },
    {
        type: "input",
        message: "What is the employees role id",
        name: "roleid"
    },
    {
        type: "input",
        message: "What is the employees manager id?",
        name: "managerid"
    }
   ]).then((data)=>{
    db.query(`UPDATE employee SET first_name = ?`,`UPDATE employee SET last_name = ?`,`UPDATE employee SET role_id = ?`, `UPDATE employee SET manager_id = ?`, [data.firstname, data.lastname, data.roleid, data.managerid], (err, res) => {
        if (err) throw err
            console.log("employee updated successfully!")
            init()
    })
   })
}