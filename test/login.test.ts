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
        it('should return false', () => {
            // Arrange
            const input="Monoki@Zsolt"

            // Act
            const result = login.validateUserInput(input);

            // Assert
            expect(result).toBeFalsy;
        })
    })
})