export default class Studento {
  constructor(public name: string, public age: number) {}

  writeExams() {
    console.log(`${this.name} is writing exams`);
  }
}
