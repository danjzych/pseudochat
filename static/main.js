const responseArray = ['To be honest, I can\'t read your messages! I\'m just responding to show you I work.','Just imagine this is an interesting message.', 'You seem cool, I wish I knew what you were saying!', 'So, do you just want to chat all day? I do!'];

//so that it doesn't send the same message twice
let lastMessage = '';
let counter = 0;

$('document').ready(() => {

    //loading animations//
    $('.chat-container').hide().slideDown(1200);
    $('.logo').hide().slideDown(600);

    //auxiliary animations
    $('.logo').on('mouseover', () => {
        $('.logo').css('opacity', '.75');
    }).on('mouseleave', () => {
        $('.logo').css('opacity', '1')
    }).on('click', () => {
            $('.about-container').slideDown();
    });

    $('.logo').on('mouseleave', () => {
        $('.about-container').slideUp(200)
    });


    //////////////////////////////////
    ///////// C H A T B O T //////////
    //////////////////////////////////


    $('form').submit(function(event) {
        //prevent page from reloading on submission of form
        event.preventDefault();

        let d = new Date;
        let dateAndTime = `${d.toLocaleDateString()}, ${d.toLocaleTimeString()}`;

        //make it so that message field resets "send another message" to blank after a key stroke, but only the first key stroke
        $('input').one('keydown', function() {
            $('input').val('');
        });

        //get user input
        let userInput = $('input').val();

        //if user sends 'clear', clear messages. if user input is not blank or 'send another', append message to message-field container with signature
        if (userInput.toLowerCase() === 'clear') {

            $('#message-field').empty();
            $('#message-field').append('<p class="message bot">Messages cleared!</p>');

            setTimeout(() => {
                $('#message-field').empty();
            }, 600);

            $('input').val('Send another message!');

        } else if (userInput && userInput !== 'Send another message!') {

            let userMessage = `<p class="message user">${userInput}</p>`;

            $('#message-field').append(userMessage);
            $('#message-field').append(`<p class="user-signature"><span class='user-name'>User</span>, ${dateAndTime}</p>`);

            //always scroll to bottom
            $('#message-field').scrollTop($('#message-field')[0].scrollHeight);

            $('input').val('Send another message!');

            //bot responds with random message, 450ms after user sends message. Random message is not the same as the previous message.
            if (counter === 0) {
                setTimeout(() => {

                    $('#message-field').append('<p class="message bot">Hi I\'m PseudoBot, I don\'t have much to say yet. If at any time our messages get too long, just send me the word "clear".</p>');
                    $('#message-field').append(`<p class="bot-signature"><span class='bot-name'>PseudoBot</span>, ${dateAndTime}</p>`);

                    ++counter;

                }, 450);
            } else {
                setTimeout(() => {

                    let randomMessage = responseArray[Math.floor(Math.random() * 4)]

                    do {
                        randomMessage = responseArray[Math.floor(Math.random() * 4)];
                    } while (randomMessage === lastMessage);
                    lastMessage = randomMessage;

                    let botMessage = `<p class="message bot">${randomMessage}</p>`;

                    $('#message-field').append(botMessage);
                    $('#message-field').append(`<p class="bot-signature"><span class='bot-name'>PseudoBot</span>, ${dateAndTime}</p>`);

                    $('#message-field').scrollTop($('#message-field')[0].scrollHeight);
                }, 450);
            }
        };
    });
});