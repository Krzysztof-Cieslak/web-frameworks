import { Controller, Get, Param, Post } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  public getHello(): string {
    return "";
  }

  @Get("/user/:id")
  public getUserId(@Param("id") id: string): string {
    return id;
  }

  @Post("/user")
  public postUser(): string {
    return "";
  }
}
