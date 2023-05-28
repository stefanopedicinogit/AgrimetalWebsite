import fs from 'fs';

export default (req, res) => {
  const images = fs.readdirSync('./public/foto').map((filename) => ({
    caption: filename,
  }));
  res.status(200).json(images);
};