import { sql } from '@vercel/postgres';

const likes = 100;

await sql`CREATE TABLE models (
    username string, 
    status string, 
    customer_id INT
);`;
await fetch('https://go.bbrdbr.com/api/models?limit=0')
  .then((response) => response.json())
  .then(({ count, total, models }) => {
  console.log('models', models.length, total);
});

const { rows, fields } = await sql`SELECT * FROM models WHERE likes > ${likes} LIMIT 5;`;

console.log('data', rows, fields);
