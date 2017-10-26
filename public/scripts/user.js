export class User {
    static async register(email, password) {
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password);

            return result;
        } catch (error) {
            alert(error.message);
        }
    }

    static async login(email, password) {
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);

            return result;
        } catch (error) {
            alert(error.message);
        }
    }
}
