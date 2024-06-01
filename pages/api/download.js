import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
    const filePath = path.resolve('.', 'public', 'andrewFerruoloContact.vcf');
    const fileContents = fs.readFileSync(filePath, 'utf8');

    res.setHeader('Content-Type', 'text/vcard');
    res.setHeader('Content-Disposition', 'attachment; filename=contacts.vcf');
    res.status(200).send(fileContents);
}
