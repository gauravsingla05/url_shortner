const validateUrl = (url) => {
  try {
    const trimmedUrl = url.trim();
  
    const fullUrl = !trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')
      ? 'http://' + trimmedUrl
      : trimmedUrl;
  
    const parsedUrl = new URL(fullUrl);
  
    const hostname = parsedUrl.hostname;
  
    // Check if the hostname contains at least one dot
    if (hostname.indexOf('.') === -1) {
      return false;
    }
  
    // Check if the last part of the hostname after the last dot is at least two characters long
    const lastDotIndex = hostname.lastIndexOf('.');
    const lastPart = hostname.slice(lastDotIndex + 1);
    if (lastPart.length < 2) {
      return false;
    }
  
    return true;
  } catch (error) {
    return false;
  }
};

export default validateUrl;
