import sql from "mssql"


const dbSettings = {
    user: "YOUR_USER",
    password: "YOUR_PASSWORD",
    server: "localhost",
    database: "DATABASE_NAME",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
}

export async function getConnection(){
    
    try {
        const pool = await sql.connect(dbSettings)
        return pool;
    } catch (e) {
        console.log(e)
    } 
}

export {sql}


