import isEqual from 'lodash/isEqual';

/*
* @param solution function to evaluate
* @param param params to pass for function to test
* @param result expected result of evaluation
* @param callback code to execute with tests results
*/
export const worker = (solution, param, result, callback) => {
  const response = `
  self.onmessage=function(){
      postMessage(
        eval(((...params) => {${solution}})(${JSON.stringify(param)}))
      )
     self.close()
  
    }
  `;
  
  const runnable = new Blob([response], { type: "text/javascript" });
  const worker = new Worker(window.URL.createObjectURL(runnable));

  worker.onmessage = (e) => {
    const evaluatedResult = e.data;
    const status = isEqual(evaluatedResult, result);
    callback(status);
  };

  worker.postMessage("WORK!!!");
};
