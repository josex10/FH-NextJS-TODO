# Development

Steps to run the App on Dev

* Deploy the DB on docker

```
docker compose up -d
```

* Rename .env.template to .env

* Change the values of the variables on .env file

* Execute the seed endpoint [create the base of the DB](localhost:3000/api/seed)

* Run the app
```
npm run dev
```

# Prod

# Stage


# Documentation

* Initialized Prisma 

```
npx prisma init
npx prisma migrate dev
npx prisma generate 
```

Next steps:
    1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
    2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
    3. Run npx prisma db pull to turn your database schema into a Prisma schema.
    4. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.

