const generateTeam = team => {

    const generateEngineer = engineer => {
        return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
        </div>
        <div class="body">
            <ul class="info">
                <li class="item-1">ID#:${engineer.getId()}</li>
                <li class="item-2">Email:${engineer.getEmail()}</li>
                <li class="item-3">GitHub:${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="card-header">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title">${intern.getRole()}</h3>
                </div>
                <div class="body">
                    <ul class="info">
                        <li class="item-1">ID#:${intern.getId()}</li>
                        <li class="item-2">Email:${intern.getEmail()}</li>
                        <li class="item-3">School:${intern.getSchool()}</li>
                    </ul>
                </div>
        `;
    };

    const generateManager = manager => {
        return `
        <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title">${manager.getRole()}</h3>
                </div>
                <div class="body">
                    <ul class="info">
                        <li class="item-1">ID#:${manager.getId()}</li>
                        <li class="item-2">Email:${manager.getEmail()}</li>
                        <li class="item-3">Office number:${manager.getOfficeNumber}</li>
                    </ul>
                </div>
        `;
    };

    const html = [];
    
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
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <!-- integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="style.css">
    </link>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="jumbotron header-1">
                <h1 class="text-center">Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team col-16 flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};