import { ConfigModule } from "@nestjs/config";

export const CONFIG_ENV = {
  load_env: ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }),
};

export const CONFIG = {
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: process.env.CLOUDINARY_SECURE === 'true',
  },
  database: {
    mongo: process.env.MONGODB_URI,
  },
}
