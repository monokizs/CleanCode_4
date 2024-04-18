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

      private checkLimit(limit: { limit: number, grade: string }, score: number): string | undefined {
        return score < limit.limit ? limit.grade : undefined;
      }


      public calculateGrade(score: number): string {
        const limits = [{limit: 90, grade: 'B'}, {limit: 80, grade: 'C'}, {limit: 70, grade: 'D'}];
        let grade = 'A';

        limits.forEach(limit => grade = this.checkLimit(limit, score) ?? grade);

        return grade;
      }

}
