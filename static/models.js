"use strict"

// CHANGE TO WHATEVER PORT YOU ARE SERVING API FROM.
const BASE_URL = "http://localhost:5001"


/**
 * Class representing Pseudochat message. Has the data structure of:
 * {
 * 	id: id,
 *  message: 'some random message from the API'
 * }
 */
class Message {

	constructor({id, message}) {
		this.id = id,
		this.message = message
	}


	/**
	 * Gets a random message from Pseudochat API.
	 * @returns message
	 */
	static async getMessage() {
		console.debug('getMessage');

		const response = await fetch(`${BASE_URL}/api/get-message`)
		const data = await response.json();

		return new Message(data);
	}
}