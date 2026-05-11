const http = require('https');

const photoIds = [
  '1486297678152-eb5e5effb842', 
  '1559598467-3d92c4627182',
  '1511690655006-25b42a9a0fcc',
  '1516053896570-5b5bfd1dbce6',
  '1593922617652-32a8ba71302b',
  '1481070555726-8f4b0f5b7e5e',
  '1506377247377-2a5b3b417ebb',
  '1464305417935-30dd9be48259',
  '1480456108151-5b1285ee1d33',
  '1528698827591-e1bfce0ce079',
  '1508422213973-50ba759eb5da',
  '1550508546-b31ac72afef2',
  '1560940561-12c823f66a7b',
  '1583337130417-3346a1be7dee',
  '1414235077428-97114553444a',
  '1572887642595-3ab83d540306',
  '1580252119131-0dfed1fbaf41',
  '1590408545892-7da4122dace0',
  '1612716182992-0b3cb1c981ff',
  '1615309117627-5eaee4410a62',
  '1566417713940-fe7c70099caa'
];

async function testImages() {
  for (const id of photoIds) {
    const url = `https://images.unsplash.com/photo-${id}?w=200&q=80`;
    await new Promise(resolve => {
      http.get(url, (res) => {
        console.log(`${id}: ${res.statusCode}`);
        resolve();
      });
    });
  }
}

testImages();
