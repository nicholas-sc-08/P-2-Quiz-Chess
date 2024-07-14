let element_slct_pergunta_um = document.getElementById(`slct_pergunta_um`);
let element_slct_pergunta_dois = document.getElementById(`slct_pergunta_dois`);
let element_slct_pergunta_tres = document.getElementById(`slct_pergunta_tres`);
let element_button = document.getElementById(`botao`);

let element_checkbox_exibir_resultado = document.getElementById(`checkbox_exibir_resultado`);
let element_resultado_exibido_em_input = document.getElementById(`resultado_exibido_em_input`);
let element_resultado_exibido_em_div = document.getElementById(`resultado_exibido_em_div`);

let element_escolha_de_exibicao_do_resultado_alert = document.getElementById(`escolha_de_exibicao_do_resultado_alert`);
let element_escolha_de_exibicao_do_resultado_div = document.getElementById(`escolha_de_exibicao_do_resultado_div`);
let element_escolha_de_exibicao_do_resultado_input = document.getElementById(`escolha_de_exibicao_do_resultado_input`);
let soma_dos_pontos = 0; 
let checkbox_selecionado = false; 
function call_functions(){ 
    
    selecionar_checkbox();
    if(checkbox_selecionado == true){
        verificar_resposta_pertgunta_um();
        verificar_resposta_pertgunta_dois();
        verificar_resposta_pertgunta_tres();
        desabilitar_botao();
        escolha_de_resposta();
    } else {
        alert(`Favor selecionar o checkbox para ver sua pontuação!`);
    };
};

function verificar_resposta_pertgunta_um(){
    if(element_slct_pergunta_um.value == `respota_tres_pergunta_um`){
        soma_dos_pontos += 1;
    };
};

function verificar_resposta_pertgunta_dois(){
    if(element_slct_pergunta_dois.value == `respota_um_pergunta_dois`){
        soma_dos_pontos += 1;
        resposta_valida_pergunta_dois = true;
    } else {
        resposta_valida_pergunta_dois = true;
    };
};

function verificar_resposta_pertgunta_tres(){
    if(element_slct_pergunta_tres.value == `respota_um_pergunta_tres`){
        soma_dos_pontos += 1;
    };
};

function desabilitar_botao(){
    element_button.disabled = true;
};

function selecionar_checkbox(){
    if(element_checkbox_exibir_resultado.checked){
        checkbox_selecionado = true;
    } else {
     checkbox_selecionado = false;
    };
};

function escolha_de_resposta(){

    if(element_escolha_de_exibicao_do_resultado_alert.checked){
        alert(`Sua pontuação é de: ${soma_dos_pontos}!`);
    } else if(element_escolha_de_exibicao_do_resultado_div.checked){
        element_resultado_exibido_em_div.innerHTML = `Sua pontuação é de: ${soma_dos_pontos}!`;
    } else{
        element_resultado_exibido_em_input.value = `Sua pontuação é de: ${soma_dos_pontos}!`;
    };

    };
