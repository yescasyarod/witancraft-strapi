export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cehpjsta499fabn7qadg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'witancraft_postgresql'),
      user: env('DATABASE_USERNAME', 'witancraft_postgresql_user'),
      password: env('DATABASE_PASSWORD', 'Kr3xCB3DnSFJZg9h0jTjLiaMxybCgl4M'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
