import { NestFactory } from '@nestjs/core';

// strat importing module

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');
  await app.listen(3000, () => {
    console.log(`* Environment : ${'env'}`);
    console.log(`* Debugger : ${'debug' ? 'On' : 'Off'}`);
    console.log(`* Running on http://localhost:${'port'} (CTRL + C to quit)`);
  });
}
bootstrap();
