
export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  export const initializeFloatingStars = () => {
    const floatingStars = document.querySelector('.floating-stars');
  
    // Check if the floatingStars element exists before proceeding
    if (!floatingStars) {
      console.error("Element with class 'floating-stars' not found.");
      return;
    }
  
    const totalStars = 250; // Change this value to control the number of stars
  
    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${getRandomNumber(0, 100)}vw`;
      star.style.top = `${getRandomNumber(0, 100)}vh`;
      star.style.animationDelay = `${getRandomNumber(0, 10)}s`;
  
      floatingStars.appendChild(star);
    }
  };
  