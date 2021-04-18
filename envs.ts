require('dotenv').config()

// Node
const env = process.env.NODE_ENV || 'development'
const isDevelopment = env === 'development'
const isTest = env === 'test'


// Base
const appUrl: string = process.env.APP_URL || 'localhost'
const port: number = Number(process.env.PORT || '3000')

// Database
const dbUsername: string = process.env.DB_USERNAME || ''
const dbPassword: string = process.env.DB_PASSWORD || ''
const dbName: string = process.env.DB_NAME || ''

export {
    env,
    isDevelopment,
    isTest,
    appUrl,
    port,
    dbUsername,
    dbPassword,
    dbName,   
  }