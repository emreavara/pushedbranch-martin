const generatePassword= (length, options)=>{
    const defaultOptions = {
      useNumbers: true,
      useUpperCaseLetters: true,
      useLowerCaseLetters: true,
      useSpecialCharacters: true,
    };
   
    const mergedOptions = { ...defaultOptions, ...options };
  
    let characterSet = "";
    if (mergedOptions.useNumbers) {
      characterSet += "0123456789";
    }
    if (mergedOptions.useUpperCaseLetters) {
      characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (mergedOptions.useLowerCaseLetters) {
      characterSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (mergedOptions.useSpecialCharacters) {
      characterSet += "!@#$%^&*()_-+";
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet[randomIndex];
    }
  
    return password;
  }

  export default generatePassword;