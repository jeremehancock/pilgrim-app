export async function fetchReadings() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const uniqueCallbackName = "universalisCallback";
    
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0].replace(/-/g, ''); // Format: YYYYMMDD
    const url = `https://universalis.com/Europe.England.Westminster/${formattedDate}/jsonpmass.js`;

    script.src = `${url}?callback=${uniqueCallbackName}`;

    // Define the callback function that will be invoked by the JSONP response
    window[uniqueCallbackName] = (data) => {
      resolve(data);
      // Clean up: remove the script and callback
      delete window[uniqueCallbackName];
      document.body.removeChild(script);
    };

    // Handle JSONP script loading errors
    script.onerror = () => {
      reject(new Error(`JSONP request to ${url} failed`));
      delete window[uniqueCallbackName];
      document.body.removeChild(script);
    };

    document.body.appendChild(script);
  });
}
