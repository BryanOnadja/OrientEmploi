import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, 'data', 'offres.json');

// File d'attente pour éviter les problèmes si deux requêtes écrivent en même temps
let writeQueue = Promise.resolve();

// Fonction pour lire les offres
export const readOffres = async () => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data).offres;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return []; // Si le fichier n'existe pas, on retourne un tableau vide
    }
    throw error;
  }
};

// Fonction pour écrire (sauvegarder) les offres
export const writeOffres = async (offres) => {
    writeQueue = writeQueue.then(async () => {
        const tempFile = `${DATA_FILE}.tmp`;
        try {
            await fs.writeFile(tempFile, JSON.stringify({ offres }, null, 2), 'utf8');
            await fs.rename(tempFile, DATA_FILE);
        } catch (error) {
            console.error("Erreur lors de l'écriture :", error);
            throw error;
        }
    });
    return writeQueue;
};