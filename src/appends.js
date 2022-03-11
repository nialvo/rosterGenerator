const inquirer = require('inquirer');
const fs = require('fs');
function Appends() {};


Appends.prototype.rosterInit = ({team},p) => {

    p.a = `./dist/${team}.html`;


    const roster = 
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${team} Roster</title>
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
    <header>
        <h1>${team}</h1>
    </header>
        `

    const style = 
    `*{
        font-family: Arial, sans-serif;
    }
    body {
        margin:0;
        display: flex;
        justify-content:center;
        flex-wrap:wrap;
        line-height: 1.3;
    }
    header{
        background-color: rgb(232,71,86);
        color:white;
        width:100%;
        height:20%;
        display: flex;
        justify-content:center;
        margin-bottom:50px;

    }
    h1{
        display: flex;
        justify-content:center;
    }

    .tab {
        font-size:14px;
        line-height:20px;
        width: 230px;
        padding: 15px;
        background-color: white;
        color: black;
        border: 1px solid rgb(200,200,200);
        border-radius:2px;
        vertical-align:middle;
        display:flex;
        flex-wrap:wrap;
       
    }
   
      
    .card {
        position:relative;
        box-shadow: 5px 5px 8px rgb(119,119,119);
        height:280px;
        width: 305px;
        align-items: center;
        border-radius:3px;
        margin:30px;
    }
    .name{
        font-size:32px;
        font-weight:bold;
        margin-bottom:5px;

    }
    .jobTitle{
        font-size:20px;
        font-weight:bold;
        display:flex;
        

    }
    .cardHead{
        background-color:rgb(0,119,247);
        color:white;
        position:absolute;
        left:0;
        top:0;
        width:275px;
        height:80px;
        padding-top:10px;
        padding-left:15px;
        padding-right:15px;
        padding-bottom:10px;
        border-radius:3px 3px 0px 0px;
    }
    .cardBody{
        background-color:rgb(245,246,248);
        color:black;
        position:absolute;
        left:0;
        top:100px;
        padding:20px;
        width:265px;
        height:140px;
        display: flex;
        flex-direction: column;
        flex:1 1 auto ;
        justify-content:center;
        border-radius:0px 0px 3px 3px;
    }
    img{
        width:30px;
        height:30px;
        margin-right:10px;
    }
    
    
    
    `

    fs.writeFile(p.a,roster,(err)=>{});
    fs.writeFile(`./dist/style.css`,style,(err)=>{});

}

Appends.prototype.Manager = (M,p) => {
    const appendage = 
    `<div class="card">
        <div class="cardHead">
            <div class="name">${M.name}</div>
            <div class="jobTitle"><img src="../images/coffee.png">Manager</div>
        </div>
        <div class="cardBody">
            <div class="tab">
                ID: ${M.id}
            </div>
            <div class="tab">
                Email: <a href='mailto:${M.email}'>${M.email}</a>
            </div>
            <div class="tab">
                Office Number: ${M.officeNumber}
            </div>
        </div>
    </div>`
    fs.appendFile(p.a,appendage,(err)=>{});
}

Appends.prototype.Engineer = (M,p) => {
    const appendage = 
    `<div class="card">
        <div class="cardHead">
            <div class="name">${M.name}</div>
            <div class="jobTitle"><img src="../images/diamond.png">Engineer</div>
        </div>
        <div class="cardBody">
            <div class="tab">
                ID: ${M.id}
            </div>
            <div class="tab">
                Email: <a href='mailto:${M.email}'>${M.email}</a>
            </div>
            <div class="tab">
                Github: <a href='https://github.com/${M.github}' target='_blank'>${M.github}</a>
            </div>
        </div>
    </div>`
    fs.appendFile(p.a,appendage,(err)=>{});
}

Appends.prototype.Intern = (M,p) => {
    const appendage = 
    `<div class="card">
        <div class="cardHead">
            <div class="name">${M.name}</div>
            <div class="jobTitle"><img src="../images/runner.png">Intern</div>
        </div>
        <div class="cardBody">
            <div class="tab">
                ID: ${M.id}
            </div>
            <div class="tab">
                Email: <a href='mailto:${M.email}'>${M.email}</a>
            </div>
            <div class="tab">
                School: ${M.school}
            </div>
        </div>
    </div>`
    fs.appendFile(p.a,appendage,(err)=>{});
}

Appends.prototype.Finish = (p) => {
    const appendage = 
    `</body>

    </html>`
    fs.appendFile(p.a,appendage,(err)=>{});
}


module.exports = Appends;