import { isEqual } from 'lodash';

/*
* @param solution function to evaluate
* @param param params to pass for function to test
* @param result expected result of evaluation
* @param callback code to execute with tests results
*/
const worker = (
  solution: string,
  param: any,
  result: any,
  putAlerts: (...args: any[]) => any,
  callback: (...args: any[]) => any,
) => {
  const response = `
  self.onmessage=function(){
      postMessage(
        eval(((...params) => {${solution}})(${JSON.stringify(param)}))
      )
     self.close()
    }
  `;

  const runnable = new Blob([response], { type: 'text/javascript' });
  const w = new Worker(window.URL.createObjectURL(runnable));

  w.onmessage = (e) => {
    const evaluatedResult = e.data;
    const status = isEqual(evaluatedResult, result);
    putAlerts({});
    callback(status);
  };

  w.onerror = (e) => {
    e.preventDefault(); // <-- "Hey browser, I handled it!"
    putAlerts({tests: true});
    console.warn(e.message);
  };

  w.postMessage('WORK!!!');
};

export default worker;
