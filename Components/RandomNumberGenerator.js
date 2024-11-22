const RandomNumberGenerator = () => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(2); // Get last two digits of year
    const month = date.getMonth() + 1; // Months are zero-indexed
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const randomNum = Math.floor(Math.random() * 1000); // Generate random 3-digit number
  
    return `OD${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}${seconds.toString().padStart(2, '0')}-${randomNum}`;
  };
  
  export default RandomNumberGenerator;
