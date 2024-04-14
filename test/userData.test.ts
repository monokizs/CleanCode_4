import { UserData } from "../src/userData";

describe("UserData tests", () => {
    let userData: UserData;

    beforeEach(() => {
        userData = new UserData();
    })

    it.each([
       [0, "", true, ["Monoki","Zsolt"], 0, true, "Zsolt", 3, "User found: Zsolt at index 1"], 
       [0, "", false, ["Monoki","Zsolt"], 0, true, "Zsolt", 3, "Processing... Processing... Processing... "], 
       [0, "", false, ["Monoki","Zsolt"], 0, false, "Zsolt", 3, "No action taken."] 
    ])('should parameters and returns the appropriate string.', (x: number, y: string, z: boolean, a: string[], b: number, c: boolean, d: string, e: number, expectedResult: string) => {

        // Arrange
        

        // Act
        const result = userData.processUserData(x,y,z,a,b,c,d,e);

        // Assert
        expect(result).toBe(expectedResult);
    })
})