export class ExerciseModel {
  public atividade: string;
  public maquina: string;
  public serie: number;
  public repeticoes: number;
  public peso: number;
  public tipo: string;

  public toString(): string {
    return this.tipo.concat(',')
    .concat(this.atividade).concat(',')
    .concat(this.maquina).concat(',')
    .concat(this.serie.toString()).concat(',')
    .concat(this.repeticoes.toString()).concat(',')
    .concat(this.peso.toString());
  }
}