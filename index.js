var sendBtn=document.getElementById('sendBtn');
var textbox=document.getElementById('textbox');
var chatContainer=document.getElementById('chatContainer');
var httpRequest=new XMLHttpRequest();

setTimeout(function(){
    chatbotSendMessage("how are you?");
},1000);


function chatbotSendMessage(messageText){


        var messageElement=document.createElement('div');
        messageElement.classList.add('w-50');
   
        messageElement.classList.add('shadow-sm');
        messageElement.style.margin="10px";
        messageElement.style.padding="10px";
        
 
        messageElement.style.backgroundColor="#e8e8e8";

        messageElement.style.color="black";
   
   

        messageElement.innerHTML="<span>Chatbot:</span>"+
                "<span style="+"margin-top: 10px; padding: 10px;"+">"+"  "+ messageText +"</span>";
                
                messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
                chatContainer.appendChild(messageElement);
    


    
}


function sendMessage(messageText){
    var messageElement=document.createElement('div');
    messageElement.classList.add('w-50');
   
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin="10px";
    messageElement.style.padding="10px";
    messageElement.style.color="white";
    messageElement.style.marginLeft="10rem"
 
    messageElement.style.backgroundColor="cornflowerblue";
   
   
   

    messageElement.innerHTML="<span>You:</span>"+
                "<span style="+"margin-top: 10px; padding: 10px;"+">"+"  "+messageText+"</span>";
               
                messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
                
                chatContainer.appendChild(messageElement);
                chatContainer.scrollTop=chatContainer.scrollHeight;

                makeRequest(messageText);
                


}



function chatbotResponse(){
    var messageElement=document.createElement('div');
    messageElement.classList.add('w-50');
   
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin="10px";
    messageElement.style.padding="10px";
    messageElement.style.color="white";
    messageElement.style.marginLeft="10rem"
 
    messageElement.style.backgroundColor="cornflowerblue";
   
   
   

    messageElement.innerHTML="<span>You:</span>"+
                "<span style="+"margin-top: 10px; padding: 10px;"+">"+"  "+messageText+"</span>";
               
                messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:10});
                
                chatContainer.appendChild(messageElement);

                chatContainer.scrollTop=chatContainer.scrollHeight;

}




function server_response(){
    if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status==200){

        var result = JSON.parse(httpRequest.responseText);

        var messageElement=document.createElement('div');
        messageElement.classList.add('w-50');
   
        messageElement.classList.add('shadow-sm');
        messageElement.style.margin="10px";
        messageElement.style.padding="10px";
        messageElement.style.backgroundColor="#e8e8e8";

        messageElement.style.color="black";
   
   

        messageElement.innerHTML="<span>Chatbot:</span>"+
                "<span style="+"margin-top: 10px; padding: 10px;"+">"+"  "+ result.response_message +"</span>";
                
                messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
                setTimeout(()=>{ chatContainer.appendChild(messageElement);
                    chatContainer.scrollTop=chatContainer.scrollHeight;},2000)
               
    }
}


function makeRequest(messageText){
    // ajax --->asychronous javascript and XML
    
    httpRequest.open('GET','chatbot.php?message='+messageText,true);
    httpRequest.send();
    httpRequest.onreadystatechange = server_response;

}





sendBtn.addEventListener('click', function (e) {
    
    if(textbox.value==""){
        alert("please type in a message");
    }
    else{
        let messageText = textbox.value;
        sendMessage(messageText);
        textbox.value="";
    }
});














// loading screen
var loader=document.getElementById("loader");
window.addEventListener("load",function(){
    setTimeout(function(){
        loader.style.display="none"
    },1200)
})





