const botoesComprar = document.querySelectorAll('.btn-comprar');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        const nomeProduto = botao.getAttribute('data-produto');
        
        // Descobre qual é a imagem do produto que está dentro do mesmo card
        const cardProduto = botao.closest('.card-produto');
        const tagImagem = cardProduto.querySelector('.foto-produto img');
        
        // Pega o nome do arquivo da imagem (ex: Conjunto1.png)
        const nomeImagem = tagImagem ? tagImagem.getAttribute('src') : '';
        
        // Pega o link atual do seu site para criar o caminho da foto
        const linkDaFoto = window.location.href.replace('index.html', '') + nomeImagem;

        // Criamos o texto usando os códigos nativos de emoji para evitar erros de codificação
        const textoMensagem = "Olá! Quero comprar este produto:\n\n" + 
                              "\u{1F6CD} *" + nomeProduto + "*\n" + 
                              "\u{1F5BC} Foto do produto: " + linkDaFoto;
        
        const mensagemFormatada = encodeURIComponent(textoMensagem);
        
        const numeroWhatsapp = "5573991327282"; 
        const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemFormatada}`;
        
        // Abre o WhatsApp na mesma janela para funcionar corretamente
        window.location.href = linkWhatsapp;
    });
});