export class Login{
    
    // public validateUserInput(input: string): boolean { 
    //     if (input.trim() !== '') { 
    //         if (input.length >= 5 && input.length <= 20) { 
    //             if (/^[a-zA-Z0-9]+$/.test(input)) { 
    //                 return true; 
    //             } 
    //         } 
    //     } 
    //     return false; 
    // }

    public validateUserInput(input: string): boolean {
        if (input.trim() === '') {
          return false;
        } 
        if (input.length < 5) {
          return false;
        }
        if (input.length > 20) {
          return false;
        }
      
        if (!/^[a-zA-Z0-9]+$/.test(input)) {
          return false;
        }
      
        return true;
      }
}