const heicConvert = require('heic-convert');
const fs = require('fs');
const path = require('path');

async function convertHeicToJpeg() {
  const publicDir = path.join(__dirname, 'public');
  const files = fs.readdirSync(publicDir);

  const heicFiles = files.filter(file => file.toLowerCase().endsWith('.heic'));

  console.log(`Found ${heicFiles.length} HEIC files to convert`);

  for (const file of heicFiles) {
    const inputPath = path.join(publicDir, file);
    const outputFileName = file.replace(/\.heic$/i, '.jpg');
    const outputPath = path.join(publicDir, outputFileName);

    try {
      const inputBuffer = fs.readFileSync(inputPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.9
      });

      fs.writeFileSync(outputPath, outputBuffer);
      console.log(`✅ Converted ${file} → ${outputFileName}`);
    } catch (error) {
      console.error(`❌ Failed to convert ${file}:`, error.message);
    }
  }

  console.log('Conversion complete!');
}

convertHeicToJpeg().catch(console.error);