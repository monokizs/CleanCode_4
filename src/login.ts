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

    
    // public validateUserInput(input: string): boolean {
    //     if (input.trim() === '') {
    //       return false;
    //     } 
    //     if (input.length < 5) {
    //       return false;
    //     }
    //     if (input.length > 20) {
    //       return false;
    //     }
      
    //     if (!/^[a-zA-Z0-9]+$/.test(input)) {
    //       return false;
    //     }
      
    //     return true;
    //   }

    private inputNotEmpty(input: string): boolean{
        return input.trim() !== '';
    } 

    private inputGoodLength(input: string): boolean{
        return input.length >= 5 && input.length <= 20;
    }

    private inputGoodCharacters(input: string): boolean{
        return (/^[a-zA-Z0-9]+$/.test(input));
    }
    
    public validateUserInput(input: string): boolean {
        return this.inputNotEmpty(input) && this.inputGoodLength(input) && this.inputGoodCharacters(input);
    }
}