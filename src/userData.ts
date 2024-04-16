export class UserData{
    
    // public processUserData(x: number, y: string, z: boolean, a: string[], b: number, c: boolean, d: string, e: number): string { 
    //     let result = ''; 
    //     if (z && c) { 
    //         for (let i = 0; i < a.length; i++) { 
    //             if (a[i] === d) { 
    //                 result += 'User found: ' + d + ' at index ' + i; 
    //                 break; 
    //             } 
    //         } 
    //     } else if (!z && c) { 
    //         let count = 0; 
    //         while (count < e) { 
    //             result += 'Processing... '; 
    //             count++; 
    //         } 
    //     } else { 
    //         result = 'No action taken.'; 
    //     } 
    //     return result; 
    // }

    public processUserData(x: number, y: string, activeUser: boolean, accounts: string[], b: number, accessUser: boolean, account: string, numberOfTry: number): string { 
        let result = ''; 
        if (activeUser && accessUser) { 
            for (let i = 0; i < accounts.length; i++) { 
                if (accounts[i] === account) { 
                    result += 'User found: ' + account + ' at index ' + i; 
                    break; 
                } 
            } 
        } else if (!activeUser && accessUser) { 
            let count = 0; 
            while (count < numberOfTry) { 
                result += 'Processing... '; 
                count++; 
            } 
        } else { 
            result = 'No action taken.'; 
        } 
        return result; 
    }
}