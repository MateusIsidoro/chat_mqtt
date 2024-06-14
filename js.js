
        topico= "Chat/PizzaDeBrocolis"
        client = new Paho.MQTT.Client("broker.hivemq.com", Number(8000),"")
        client.connect( {onSuccess:Conectou} )
    
        function Conectou() {
            client.subscribe(topico)
            message = new Paho.MQTT.Message('')
            message.destinationName = topico
        }
    
        client.onConnectionLost = Conexao_Perdida
        client.onMessageArrived = Mensagem_Chegou
    
        function Conexao_Perdida(responseObject){
            if (responseObject.errorCode !==0) {
                resposta.innerHTML += "Desconectado: " + responseObject.errorMenssage
            }
        }
    
        function Mensagem_Chegou(message){
            resposta.innerHTML += "<br>"
            resposta.innerHTML += message.payloadString
        }

        function Enviar(){
            valor ='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5RgoUUCiE2T3FTuxxGTGulotSkE86Sp9qw&usqp=CAU" class="apelidoimg" width="25px" height="25px"> <style>.apelidoimg{border-radius: 35px;}</style>' +  apelido.value + ": " + texto.value
            message = new Paho.MQTT.Message(valor)
            message.destinationName = topico
            client.send(message)
        }
        function Enviar10(){
            var a = 1
            while (a <= 10){
            valor = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5RgoUUCiE2T3FTuxxGTGulotSkE86Sp9qw&usqp=CAU" class="apelidoimg" width="25px" height="25px"> <style>.apelidoimg{border-radius: 35px;}</style>' + apelido.value + ": " + texto.value
            message = new Paho.MQTT.Message(valor)
            message.destinationName = topico
            client.send(message)
            a++
            }
        }
        function emote1(){
            valor = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5RgoUUCiE2T3FTuxxGTGulotSkE86Sp9qw&usqp=CAU" class="apelidoimg" width="25px" height="25px"> <style>.apelidoimg{border-radius: 35px;}</style>' + apelido.value + ": " + '<img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_4.jpg" width="150px">'
            message = new Paho.MQTT.Message(valor)
            message.destinationName = topico
            client.send(message)

        }
        function emote2(){
            valor = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5RgoUUCiE2T3FTuxxGTGulotSkE86Sp9qw&usqp=CAU" class="apelidoimg" width="25px" height="25px"> <style>.apelidoimg{border-radius: 35px;}</style>' + apelido.value + ": " + '<iframe src="https://giphy.com/embed/Dg4TxjYikCpiGd7tYs" width="150px" ></iframe>'
            message = new Paho.MQTT.Message(valor)
            message.destinationName = topico
            client.send(message)
        }
        function emote3(){
            valor = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5RgoUUCiE2T3FTuxxGTGulotSkE86Sp9qw&usqp=CAU" class="apelidoimg" width="25px" height="25px"> <style>.apelidoimg{border-radius: 35px;}</style>' + apelido.value + ": " + '<img src="https://ae01.alicdn.com/kf/S9bb91d79437a4520aa8a2bb92bf686ade/Rammus-masculino-emote-ok-liga-das-lendas-t-camisa-liga-das-lendas-lol-puro-algod-o.jpg" width="150px">'
            message = new Paho.MQTT.Message(valor)
            message.destinationName = topico
            client.send(message)
        }

