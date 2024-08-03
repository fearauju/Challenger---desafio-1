let mensagemCriptografada;
let mensagemDescriptografada;
let mensagem;
let padraoCriptografia;

const validarCaracterDigitado = document.getElementById('telaDigitacao').value;

validarCaracterDigitado.addEventListening('input', function () {

    this.value = this.value = this.value.replace(/[^a-z0-9!\s]/g, '');

})

function criptografarMensagem() {
    mensagem = document.querySelector('#telaDigitacao').value;
    let letraMensagem;
    mensagemCriptografada = "";

    if (mensagem === '') {
        alert('Digite a mensagem para criptografar.');
        resetarCampos();
        return;
    }else{
        for (let i = 0; i < mensagem.length; i++) {

            if (mensagem[i] == 'a') {
                letraMensagem = mensagem[i];
                padraoCriptografia = letraMensagem.replace(letraMensagem, 'ai');
                mensagemCriptografada = mensagemCriptografada.concat(padraoCriptografia);
    
            } else {
                if (mensagem[i] == 'e') {
                    letraMensagem = mensagem[i];
                    padraoCriptografia = letraMensagem.replace(letraMensagem, 'enter');
                    mensagemCriptografada = mensagemCriptografada.concat(padraoCriptografia);
    
                } else {
                    if (mensagem[i] == 'i') {
                        letraMensagem = mensagem[i];
                        padraoCriptografia = letraMensagem.replace(letraMensagem, 'imes');
                        mensagemCriptografada = mensagemCriptografada.concat(padraoCriptografia);
    
                    } else {
                        if (mensagem[i] == 'o') {
                            letraMensagem = mensagem[i];
                            padraoCriptografia = letraMensagem.replace(letraMensagem, 'ober');
                            mensagemCriptografada = mensagemCriptografada.concat(padraoCriptografia);
    
                        } else {
                            if (mensagem[i] == 'u') {
                                letraMensagem = mensagem[i];
                                padraoCriptografia = letraMensagem.replace(letraMensagem, 'ufar');
                                mensagemCriptografada = mensagemCriptografada.concat(padraoCriptografia);
                            } else {
                                letraMensagem = mensagem[i];
                                mensagemCriptografada = mensagemCriptografada.concat(letraMensagem);
                            }
                        }
                    }
                }
            }
        }
                
        limparTelaCriptografia();
        exibirMensagemCriptografada();
        perdeuFoco();
    }
    
}

function descriptografarMensagem() {
    
    mensagemDescriptografada = document.querySelector('#telaDigitacao').value;
    let posIndex2 = 0;

    if (mensagemDescriptografada === '') {
        alert('Digite a mensagem para descriptografar.');
        resetarCampos();
        return;
    }else{
        while (mensagemDescriptografada.indexOf('ai') !== -1) {
            posIndex2 = mensagemDescriptografada.indexOf('ai');
            mensagemDescriptografada = mensagemDescriptografada.replace('ai', 'a');
            posIndex2 += 2;
        }
    
        while (mensagemDescriptografada.indexOf('enter') !== -1) {
            posIndex2 = mensagemDescriptografada.indexOf('enter');
            mensagemDescriptografada = mensagemDescriptografada.replace('enter', 'e');
            posIndex2 += 2;
        }
    
        while (mensagemDescriptografada.indexOf('imes') !== -1) {
            posIndex2 = mensagemDescriptografada.indexOf('imes');
            mensagemDescriptografada = mensagemDescriptografada.replace('imes', 'i');
            posIndex2 += 2;
        }
    
        while (mensagemDescriptografada.indexOf('ober') !== -1) {
            posIndex2 = mensagemDescriptografada.indexOf('ober');
            mensagemDescriptografada = mensagemDescriptografada.replace('ober', 'o');
            posIndex2 += 2;
        }
    
        while (mensagemDescriptografada.indexOf('ufar') !== -1) {
            posIndex2 = mensagemDescriptografada.indexOf('ufar');
            mensagemDescriptografada = mensagemDescriptografada.replace('ufar', 'u');
            posIndex2 += 2;
        }

        limparTelaCriptografia();
        exibirMensagemDescriptografada();
        perdeuFoco();
    }    
}

function exibirMensagem(tag, texto) {
    areaTexto = document.querySelector(tag);
    areaTexto.innerHTML = texto;
}

function exibirMensagemCriptografada() {
    document.getElementById('copiar').removeAttribute('hidden');
    document.getElementById('telaCriptografia').value = mensagemCriptografada;
}

function exibirMensagemDescriptografada() {
    document.getElementById('copiar').removeAttribute('hidden');
    document.getElementById('telaCriptografia').value = mensagemDescriptografada;
}

function copiarMensagem() {

    let mensagemCopiada = document.getElementById('telaCriptografia').value;

    navigator.clipboard.writeText(mensagemCopiada).then(textoTelaDesriptografia);

}

function colarMensagem() {
    navigator.clipboard.readText().then(textocolado => {
        exibirMensagem('telaDigitacao', textocolado)
        mensagem = textocolado;
    });
}

function limparTelaCriptografia() {
    document.getElementById('telaCriptografia').innerHTML = "";
}

function limparTelaDigitacao() {
    document.querySelector('#telaDigitacao').value = "";
}

function textoTelaDesriptografia() {
    document.querySelector('#telaCriptografia').value = "Nenhuma mensagem";
}

function emFoco() {
    document.querySelector('#telaDigitacao').value = "";
}

function perdeuFoco() {
    document.querySelector('#telaDigitacao').value = 'digite a mensagem';
}

function resetarCampos() {
    document.getElementById('copiar').setAttribute('hidden', true);
    textoTelaDesriptografia();
    perdeuFoco();
}