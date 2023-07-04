import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors(
        { 
          origin: ['http://127.0.0.1:3000', 'https://localhost:3000', 'https://art-shop-fe.vercel.app/', 'http://art-shop-fe.vercel.app', 'http://art-shop-fe.vercel.app', 'https://ec2-34-198-71-168.compute-1.amazonaws.com', 'https://ec2-34-198-71-168.compute-1.amazonaws.com:8000'],
          methods: ['POST', 'PUT', 'DELETE', 'GET', 'OPTIONS'],
          allowedHeaders: 'Content-Type,Authorization',
        }
      );
    await app.listen(5000);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
