const fs = require('fs');
const path = require('path');

function main() {
  const targetFolder = path.resolve(__dirname, '../../');
  const files = fs.readdirSync(targetFolder);
  const url = [];
  files.forEach(item => {
    if (item.match(/\.js$/)) {
      url.push(`${item}`);
    }
  });
  const baseRawUrl = 'https://raw.githubusercontent.com/alanhg/tampermonkey-scripts/main/';
  const urlListStr = url.map(item => `- [${item}](${baseRawUrl}${item})`).join('\n');
  const readmeFile = targetFolder + '/README.md';
  let readmeContent = fs.readFileSync(readmeFile, 'utf8');
  const newReadmeContent = readmeContent.replace(/(?<=<!-- start -->)(\s|\S)+(?=<!-- end -->)/, '\n' + urlListStr + '\n');
  fs.writeFileSync(readmeFile, newReadmeContent);
}

main();
