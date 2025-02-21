import { GenericInterface } from "./interfaces/GenericInterface.interface";

/**@Generics
 * GenericTypes are used to create reusable components that can work with a variety of types rather than a single one.
 */

class GenericClass implements GenericInterface<string, number, string> {
  data: string;
  status: number;
  message: string;

  constructor(data: string, status: number, message: string) {
    this.data = data;
    this.status = status;
    this.message = message;
  }

  getAllData() {
    console.log(`${this.data} ${this.status} ${this.message}`);
  }
}

/**
 * Here we are implementing the GenericInterface with different types.
 * The GenericInterface has three type parameters, so we need to provide three types when implementing it.
 * In this case, we are providing number, string, and boolean as the types for the data, status, and message properties.
 * Overriding the GenericInterface with different types is a common practice when working with generics.
 */
class GenericClass2 implements GenericInterface<number, string, boolean> {
  data: number;
  status: string;
  message: boolean;

  constructor(data: number, status: string, message: boolean) {
    this.data = data;
    this.status = status;
    this.message = message;
  }

  getAllData() {
    console.log(`${this.data} ${this.status} ${this.message}`);
  }
}

/**
 * Finally, we can also implement the GenericInterface with the same type for all the properties.
 */
class GenericClass3 implements GenericInterface {
  data: string;
  status: number;
  message: string;

  constructor(data: string, status: number, message: string) {
    this.data = data;
    this.status = status;
    this.message = message;
  }

  getAllData() {
    console.log(`${this.data} ${this.status} ${this.message}`);
  }
}

new GenericClass("Hello", 200, "Success").getAllData(); // Hello 200 Success
new GenericClass2(100, "Error", true).getAllData(); // 100 Error true
new GenericClass3("Hi", 404, "Not Found").getAllData(); // Hi 404 Not Found
