export class Message {
    /**
     * @param {*} values
     */
    constructor(values) {
        this.id = null;
        this.message = '';

        for (const property in values) {
            if (!this.hasOwnProperty(property)) {
                continue;
            }

            this[property] = values[property];
        }
    }

    /**
     * @param {string} message
     */
    static async add(message) {
        try {
            const entry = firebase.database().ref('messages').push();

            await entry.set({
                message
            });

            return entry;
        } catch (error) {
            alert(error.message);
        }
    }

    /**
     * @returns Message[]
     */
    static async get() {
        try {
            return await firebase.database().ref('messages').once('value').then(snapshot => {
                const entries = [];

                snapshot.forEach(function(entry) {
                    const values = entry.val();

                    values.id = entry.key;
                    entries.push(new Message(values));
                });

                return entries;
            });
        } catch (error) {
            alert(error.message);
        }
    }
}
