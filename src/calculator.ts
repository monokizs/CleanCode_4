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

    // public calculateGrade(score: number): string {
    //     switch (true) {
    //       case score >= 90:
    //         return 'A';
    //       case score >= 80:
    //         return 'B';
    //       case score >= 70:
    //         return 'C';
    //       default:
    //         return 'D';
    //     }
    //   }

    private  gradeTable: Record<number, string> = {
        10: "A",
        9: "A",
        8: "B",
        7: "C",
        6: "D",
        5: "D",
        4: "D",
        3: "D",
        2: "D",
        1: "D",
        0: "D"
      };
      
      public calculateGrade(score: number): string {
        return this.gradeTable[Math.floor(score/10)];
      }

}
