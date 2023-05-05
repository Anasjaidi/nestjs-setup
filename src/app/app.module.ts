import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import logger from 'morgan';
import helmet from 'helmet';
import appConf from 'src/config/app.conf';
import { ConfigModule } from '@nestjs/config';

// select settings for choosen mode
const env = process.env.NODE_ENV || 'development';
const conf = appConf(env)!;
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(logger('dev'), helmet()).forRoutes('*');
  // }
}
