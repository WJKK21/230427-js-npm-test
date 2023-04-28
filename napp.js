/* 
const { Command } = require('commander');
const program = new Command();

program
  .action(() => {
    console.log('Hello World!');
  });
  
program.parse(process.argv);
 ?   console.log('Hello World!'); */

/* const { Command } = require('commander');
const program = new Command();

program
  .option('-n, --name <name>', '이름을 입력해주세요')
  .parse(process.argv);

const { name } = program.opts();

console.log(`입력받은 이름: ${name}`); 
 ? */
/* 
const fs = require('fs');

const fileName = 'test.txt';
const fileContent = 'Hello World!';

fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error(`파일 생성 실패: ${err}`);
    process.exit(1);
  }
  console.log(`파일 생성 완료: ${fileName}`);
});

이러면 파일이 생성됨 fs
 */

import inquirer from "inquirer";
/* 
inquirer
  .prompt ([
    {
      type : 'input',
      name : 'title',
      message : '타이틀 명',
    },
    {
      type : 'list',
      name : 'root',
      message : 'root 필요함?',
      choices : 'yes''no',
      //Choices : [`<div></div>`,`<div id = 'root'></div>`]
    },
    {
      
    }
  ]) */


function main() {
  const answers = inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: '타이틀명을 입력하세요',
    },
    {
      type: 'input',
      name: 'file',
      message: '파일명을 입력하세요',
    },
    {
      type: 'confirm',
      name: 'root',
      message: '<div id="root"></div>를 추가하시겠습니까?',
    },    
    {
      type: 'input',
      name: 'p',
      message: '내용 뭐 넣으실래요',
    },
  ]);
  
  const { title, file, root, p } = answers;

  const data = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}<title/>
  </head>
  <body>
    ${root ? '<div id="root"></div>' : '<div></div>'}
    <p>${p}</p>
  </body>
  </html>`;

  fs.writeFile(`./result/${file}.html`, data, (err) => {
    if (err) {
      console.error(`파일 저장 실패: ${err}`);
      process.exit(1);
    }
    console.log(`파일 저장 완료: ./result/${file}`);
  });
}

main();

