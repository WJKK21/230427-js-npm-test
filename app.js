
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




import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices";

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
      Choices : [`<div></div>`,`<div id = 'root'></div>`]
    },
    {

    }
  ])

 */

  const fs = require('fs');

//node.js 메서드 (fs file system 파일시스템 CRUD 가능) 
const { Command } = require('commander');
// commander 호출
const program = new Command();
// Command 클래스를 통해 새로운 명령어 정의 뭔 말이지
// 아무거나 써도 된다 그럼 어떻게 판단하지?
program
  .option('-r, --root, <root>', 'root 원함?', false)
  .option('-t, --title, <string>', '타이틀명 입력')
  .option('-f, --file, <file>', '파일명 입력')
  .option('-p, --paragraph, <paragraph>', '파일명 입력')
  .parse(process.argv); //parse 메서드

const { root, title, file, paragraph } = program.opts();


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
 <p>${paragraph}</p>
</body>
</html>`;
//리액트식? if문  ${root ? '<div id="root"></div>' : '<div></div>'} 
fs.writeFile(`./result/${file}.html`, data, (err) => { //fs.writeFile 자체가 메서드 ./result 위치지정됨
  if (err) {
    console.error(`파일 저장 실패: ${err}`);
    process.exit(1); // 멈춤 기능 에러 발생알리고 멈추기 가능
  }
  console.log(`파일 저장 완료: ${file}`);
});

