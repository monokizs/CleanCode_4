import { Calculator } from "../src/calculator";


describe("Calculator tests", () => {
    it.each([
        [100,"A"],
        [90,"A"],
        [85,"B"],
        [80,"B"],
        [75,"C"],  
        [70,"C"],  
        [65,"D"],
        [0,"D"] 
    ])('should a number and returns the appropriate character.', (a: number, expectedResult: string) => {

        // Arrange
        let calculator = new Calculator();

        // Act
        const result = calculator.calculateGrade(a);

        // Assert
        expect(result).toBe(expectedResult);
    })
})