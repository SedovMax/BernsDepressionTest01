vkBridge.send("VKWebAppGetConfig").then(data => {
    let appearance = data.scheme;
    console.log(data.scheme);
    if(appearance == 'vkcom_dark') {
        $('#stoke').attr('href', '/css/dark.css');
    }
    if(appearance == 'space_gray') {
        $('#stoke').attr('href', '/css/dark.css');
    }
    if(appearance == 'light'){
        $('#stoke').attr('href', '/css/light.css');
    }
    if(Boolean(appearance) == false){
        $('#stoke').attr('href', '/css/light.css');
    }
});
