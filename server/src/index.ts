import "reflect-metadata";
import { Movie } from "./entities/Movie";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

const m: any = {};
m.name = 234;
m.types = ['喜剧'];
m.areas = ['中国大陆'];
m.isClassic = true;
m.timeLong = 5;

const movie = plainToClass(Movie, m as object);
console.log(movie);
validate(movie).then(errors => {
    console.log(errors);
});
