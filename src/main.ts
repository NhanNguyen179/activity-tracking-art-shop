import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors(
        { 
          origin: ['http://127.0.0.1:3000, https://localhost:3000, https://art-shop-fe.vercel.app/'],
          methods: ['POST', 'PUT', 'DELETE', 'GET']
        }
      );
    await app.listen(5000);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
