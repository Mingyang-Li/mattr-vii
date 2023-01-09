import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { main } from '@/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(6000);
}
bootstrap();

main();
