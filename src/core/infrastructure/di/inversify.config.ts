import { Container } from "inversify";
import "reflect-metadata";
import {
  IHomeRepository,
  HomeRepositorySymbol,
} from "@/features/home/domain/IHomeRepository";
import { HomeApiRepository } from "@/features/home/infrastructure/repositories/HomeApiRepository";
import { SubmitContactFormUseCase } from "@/features/home/application/SubmitContactFormUseCase";

const container = new Container({
  autobind: true,
  defaultScope: "Singleton",
});

container.bind<IHomeRepository>(HomeRepositorySymbol).to(HomeApiRepository);
container.bind<SubmitContactFormUseCase>(SubmitContactFormUseCase).toSelf();

export { container };
