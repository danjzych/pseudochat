"use strict";

let $MESSAGE_FIELD;
let $INPUT;



function getDateAndTime() {
	const d = new Date;
	return `${d.toLocaleDateString()}, ${d.toLocaleTimeString()}`;
}

/**
 * Slides in Logo and message container upon page load. Defines message input
 * and message field after it loads.
 */
function loadPage() {
	console.debug('loadPage')
	$('.chat-container').hide().slideDown(1200);
	$('.logo').hide().slideDown(600);

	//Cannot be assigned until container is loaded
	$MESSAGE_FIELD = $('#message-field');
	$INPUT =  $('input');

	setTimeout(() => {
		$MESSAGE_FIELD.append('<p class="message bot">Hi I\'m PseudoBot, I don\'t have much to say yet. If at any time our messages get too long, just send me the word "clear".</p>');
		$MESSAGE_FIELD.append(`<p class="bot-signature"><span class='bot-name'>PseudoBot</span>, ${getDateAndTime()}</p>`);
	}, 1650);
}


function clearMessages() {
	console.debug('ClearMessages')
	$MESSAGE_FIELD.empty();
	$MESSAGE_FIELD.append('<p class="message bot">Messages cleared!</p>');

	setTimeout(() => {
		$('#message-field').empty();
	}, 600);

	$INPUT.val('Send another message!');
}

async function getMessage() {
	console.debug('getMessage');

	const PseudoMessage = await Message.getMessage();

	setTimeout(() => {
		$('#message-field').append(`<p class="message bot">${PseudoMessage.message}</p>`);
		$('#message-field').append(`<p class="bot-signature"><span class='bot-name'>PseudoBot</span>, ${getDateAndTime()}</p>`);

		$('#message-field').scrollTop($('#message-field')[0].scrollHeight);
	}, 450);
}

/**
 * Handles form submission for user submitting a chat to form in message field.
 */
function handleChatSubmit(evt) {
	console.debug('handleChatSubmit');
	evt.preventDefault()
	const userMessage = $INPUT.val();

    $MESSAGE_FIELD.append(`<p class="message user">${userMessage}</p>`);
    $MESSAGE_FIELD.append(`<p class="user-signature"><span class='user-name'>User</span>, ${getDateAndTime()}</p>`);

	userMessage.toLowerCase() === 'clear' ? clearMessages() : getMessage();

	//Scroll to bottom of chat to put new messages in view
	$MESSAGE_FIELD.scrollTop($MESSAGE_FIELD[0].scrollHeight);

	$INPUT.val('');
	$INPUT.attr('placeholder', 'Send another message!');
}


$('document').ready(() => {
	loadPage();

	$('form').on('submit', handleChatSubmit)
})