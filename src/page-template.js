// creates the team

const generateTeam = team => {

    // creates the manager html
    const generateManager = manager => {
        return `
        <div class="card employee-card shadow-lg p-3 mb-5 bg-white rounded mr-2 ml-2" style="width: 18rem;">
        <div class="card-header bg-info">
            <h2 class="card-title text-light">${manager.getName()}</h2>
            <h3 class="card-title text-light"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card shadow-lg p-3 mb-5 bg-white rounded mr-2 ml-2" style="width: 18rem;">
    <div class="card-header bg-info">
        <h2 class="card-title text-light">${engineer.getName()}</h2>
        <h3 class="card-title text-light"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card shadow-lg p-3 mb-5 bg-white rounded mr-2 ml-2" style="width: 18rem;">
    <div class="card-header bg-info">
        <h2 class="card-title text-light">${intern.getName()}</h2>
        <h3 class="card-title text-light"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// exports function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid bg-secondary">
        <div class="row  bg-info">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center text-info">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container mx-auto mt-5">
        <div class="row">
            <div class="team-area sm-col-1 md-col-3 lg-col-4 d-flex justify-content-center flex-wrap">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};