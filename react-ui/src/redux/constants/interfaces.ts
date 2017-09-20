export interface IState {
  katas: IKata[],
  user: string,
  alerts: IAlert
}

export interface ITest {
  param: string;
  status: boolean;
  result: any;
}

export interface IKata {
  id: number;
  solution: string;
  tests: ITest[];
  description: string;
  example: string;
  footer: string;
  task: string;
}

export interface IAlert {
  user?: boolean,
  katas?: boolean,
  tests?: boolean,
  submit?: boolean[]
}
