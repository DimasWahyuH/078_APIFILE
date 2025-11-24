const db = require('../models');

async function connectDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Database has been connected successfully.');

        await db.sequelize.sync({alter: true});
        console.log('Database synchronized successfully.');
    
    }   catch (error) {
        console.error('Unable to connect to the database:', err.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;
