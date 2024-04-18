import { Login } from "../src/login";

describe('login tests', () => {
    let login: Login;

    beforeEach(() => {
        login = new Login();
    })
    describe('Happy path',()=>{
        it('should return true', () => {
            // Arrange
            const input="Monoki"

            // Act
            const result = login.validateUserInput(input);

            // Assert
            expect(result).toBeTruthy;
        })
    })

    describe('Error path',()=>{
        
        it.each([
            ["", false],
            ["MZs",false],
            ["Monoki Zsolt Monoki Zsolt",false],
            ["Monoki@Zsolt", false]
            
        ])('should return false because input is bad', (input: string, expectedResult: boolean) => {
    
            // Arrange
                
            // Act
            const result = login.validateUserInput(input)
    
            // Assert
            expect(result).toBe(expectedResult);
        })
    })
})