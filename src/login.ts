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

    private isInputNotEmpty(input: string): boolean{
        return input.trim() !== '';
    } 

    private isInputGoodLength(input: string): boolean{
        return input.length >= 5 && input.length <= 20;
    }

    private isInputGoodCharacters(input: string): boolean{
        return (/^[a-zA-Z0-9]+$/.test(input));
    }
    
    public validateUserInput(input: string): boolean {
        return this.isInputNotEmpty(input) && this.isInputGoodLength(input) && this.isInputGoodCharacters(input);
    }
}