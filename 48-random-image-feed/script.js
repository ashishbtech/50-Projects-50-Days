const container = document.querySelector('.container');


const imageIDs = [
  '1536440136628-849c177e76a1',
  '1440404653325-ab127d49abc1',
  '1585647347384-2593bc35786b',
  '1590608897129-79da98d15969',
  '1574717024653-61fd2cf4d44d',
  '1512466699144-8846f4144547',
  '1582711012124-a56cf82307a0',
  '1605806616949-1e87b487cb2a',
  '1485846234645-a62644f84728',
  '1542204165-65bf26472b9b',
  '1524985069026-dd73afe6a545',
  '1626814026160-2237a95fc5a0'
];

const rows = 5;
const imagesPerRow = 3;

for (let i = 0; i < rows * imagesPerRow; i++) {
  const img = document.createElement('img');
  
  const randomID = imageIDs[Math.floor(Math.random() * imageIDs.length)];
  const randomWidth = getRandomSize();
  const randomHeight = getRandomSize();
  
  img.src = `https://images.unsplash.com/photo-${randomID}?auto=format&fit=crop&w=${randomWidth}&h=${randomHeight}&q=80`;
  img.alt = 'Cinematic Mood Board Asset';
  
  container.appendChild(img);
}

function getRandomSize() {
  return Math.floor(Math.random() * 10) + 300;
}