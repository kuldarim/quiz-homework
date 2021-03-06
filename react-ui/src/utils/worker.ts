const isEqual = require('lodash.isequal');

export interface IWorkerProps {
  solution: string,
  param: any,
  result: any,
  kataId: number,
  testId: number,
}

const worker = (params: IWorkerProps) => {
  return new Promise((resolve, reject) => {
    const {
      solution,
      param,
      result,
      kataId,
      testId,
    } = params;

    const response = `
    self.onmessage=function(){
        postMessage(
          eval(((params) => {${solution}})(${JSON.stringify(param)}))
        )
       self.close()
      }
    `;

    const runnable = new Blob([response], { type: 'text/javascript' });
    const w = new Worker(window.URL.createObjectURL(runnable));

    w.onmessage = (e) => {
      const evaluatedResult = e.data;
      const status = isEqual(evaluatedResult, result);
      resolve({kataId, testId, status});
    };

    w.onerror = (e) => {
      e.preventDefault(); // <-- "Hey browser, I handled it!"
      console.warn(e.message); // <-- inform the user about the broken stuff details
      reject({kataId, message: e.message});
    };

    w.postMessage('!WORK');
  });
};

export default worker;
