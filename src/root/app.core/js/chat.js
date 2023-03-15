$(function() {
    // In case new token is required
    // twitch token -u -s 'chat:read chat:edit'

    let chatBacklog = [];
    doChatTicker();

    const client = new tmi.Client({
        identity: {
        username: 'tvtransmissions',
        password: '7z04hlfxwrt5n0fsj3qplczilkcpnu'
      },
        channels: [ 'tv_transmissions' ]
    });

    client.connect();

    client.on('message', (channel, tags, message, self) => {

        let size = message.length > 20 ? 't-32' : '';

        chatBacklog.push(
            '<span>' + `${tags['display-name']}: ${message}` + '</span>'
        );

        // console.log(chatBacklog);
    });

    function doChatTicker() {

        if (chatBacklog.length == 0) {
            $('#chat').html('<span>Youtube: TV_Transmissions // Twitch: TV_Transmissions // Patreon: TV_Transmissions</span>');
        } else {
            $('#chat').html(chatBacklog[0]);
            chatBacklog.shift();
        }

        setTimeout(doChatTicker, 15000);
    }

});
