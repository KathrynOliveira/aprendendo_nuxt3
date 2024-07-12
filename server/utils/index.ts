import mysql from 'mysql2/promise';

interface Options {
  query: string;
  values?: any[];
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export const sql = async ({ query, values = [] }: { query: string; values?: any[] }) => {
    const [results] = await pool.query(query, values);
    return results;
};