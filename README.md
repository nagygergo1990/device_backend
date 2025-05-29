## 📥 Telepítés

1. Navigálj a backend mappába:

   ```bash
   cd backend

   ```

2. Telepítsd a függőségeket:
   npm install

3. Hozd létre aa "device_db" nevű adatbázist manuálisan

4. A config/database.js fájlban állítsd be az adatbázis kapcsolati adatokat:
   const sequelize = new Sequelize("device_db", "postgres", "root", {
   host: "localhost",
   dialect: "postgres",
   logging: false,
   });

5. Indítsd el a backend szervert
   node index.js
