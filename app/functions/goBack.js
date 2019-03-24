
let history = undefined;

/**
 * controls navigation on back page.
 * @return {boolean} 
 *  true: intercept click physical button.
 *  false: dont intercept.
 */
export default () => {
  if(history && history.index > 0) {
    history.goBack();
    return true;
  }
  return false;  
}

// Stores the history to handle, if necessary.
export const registerHistory = h => {
  history = h;
}