import { Task } from "./task";

export class TasksMother {
  static tasks(): Task[] {
    return [
      Task.fromPrimitives({
        id: "tarea1",
        title: "Completar curso de introducción a C#",
        isDone: false,
      }),
      Task.fromPrimitives({
        id: "tarea2",
        title: "Realizar ejercicio práctico de POO en C#",
        isDone: false,
      }),
      Task.fromPrimitives({
        id: "tarea3",
        title: "Investigar sobre frameworks de testing en C#",
        isDone: false,
      }),
      Task.fromPrimitives({
        id: "tarea4",
        title: "Desarrollar una aplicación de consola básica en C#",
        isDone: false,
      }),
      Task.fromPrimitives({
        id: "tarea5",
        title: "Depurar y corregir errores en el código C# de la aplicación",
        isDone: false,
      }),
    ];
  }
}
