const validateUrl = (url) => {
    try {
      const trimmedUrl = url.trim();
  
      const fullUrl = !trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')
        ? 'http://' + trimmedUrl
        : trimmedUrl;
  
   
      const parsedUrl = new URL(fullUrl);
  
      const hostname = parsedUrl.hostname;
  
      const lastDotIndex = hostname.lastIndexOf('.');
      if (lastDotIndex === -1 || lastDotIndex >= hostname.length - 3) {
        return false;
      }
  
    
      return true;
    } catch (error) {
      return false;
    }
  };
  
  
  export default validateUrl;
  