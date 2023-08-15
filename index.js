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

  function init () {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "Userchoice",
            // add a new question here
            choices: [
                "View all departments?",
                "View all roles?",
                "Add department?"
            ]
        }
    ]).then((data)=>{
        console.log(data)
        // create if statement here
        if(data.Userchoice === "View all departments?"){
                ViewDepartments()
        }
        if(data.Userchoice === "Add department?"){
            addDepartment()
    }

    })
  }
  init() 


  // create a function that goes with the "if" statement (refer back to miniproject if you get stuck)
  // query tells what to do to the database
  function ViewDepartments() {
    db.query("SELECT * FROM department", (err, data) =>{
        console.table(data)
    })
  }

  function addDepartment () {
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