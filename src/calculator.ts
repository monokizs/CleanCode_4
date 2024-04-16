export class Calculator {

    // public calculateGrade(score: number): string { 
    //     if (score >= 90) { 
    //         return 'A'; 
    //     } else { 
    //         if (score >= 80) { 
    //             return 'B'; 
    //         } else { 
    //             if (score >= 70) { 
    //                 return 'C'; 
    //             } else { 
    //                 return 'D'; 
    //             } 
    //         } 
    //     } 
    // } 

    public calculateGrade(score: number): string {
        switch (true) {
          case score >= 90:
            return 'A';
          case score >= 80:
            return 'B';
          case score >= 70:
            return 'C';
          default:
            return 'D';
        }
      }

}