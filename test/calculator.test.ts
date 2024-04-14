import { Calculator } from "../src/calculator";


describe("Calculator tests", () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    })

    it.each([
       [100,"A"], 
       [85,"B"],
       [75,"C"],  
       [65,"D"] 
    ])('should a number and returns the appropriate character.', (a: number, expectedResult: string) => {

        // Arrange
        

        // Act
        const result = calculator.calculateGrade(a);

        // Assert
        expect(result).toBe(expectedResult);
    })
})