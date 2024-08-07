![Challenger - Decodificador de texto](https://github.com/user-attachments/assets/6adff7cb-ae95-4856-920f-28d83afdc8f3)

## Resumo do projeto

 Este é um projeto desenvolvido no Challenger - decodificador de texto proposto pela alura durante o processo seletivo do programa one Oracle. O primeiro desafo foi criar um projeto que possa criptografar uma mensagem seguindo determinado padrão e que o usuário também possa descruptografá-la na mesma página.
 
## :hammer: Funcionalidades adicionadas ao projeto
 
- `Funcionalidade 1:` A mensagem será criptografada seguindo determinado padrão de criptografia pré-estabelecido no desafio.
 
- `Funcionalidade 2:` O usuário pode criptografar e copiar a mensagem criptografada e colar para descriptografar no campo abaixo.

- - `Funcionalidade 3:` O usuário pode colar uma mensagem criptografada (de acordo com o padrão do desafio) e clica em descriptografar para descobrir a mensagem.
  
-  `Funcionalidade 4:` Está sendo feito bloqueio de letras maiúsculas, ponto, virgula e caracteres especiais, exceto exclamação.

## ✔️ Técnicas e tecnologias utilizadas

- ``JavaScript``
- ``CSS``
- ``Html``

## Dificuldades no desenvolvimento

Sou iniciante e para mim ainda é muito difícil toda essa parte de posicionamento de elementos, uso de flexbox, trabalhar com margin, etc... eu tenho pouca prática, comecei ao entrar no programa one, e por mais que eu veja vídeos e explicações colocar na prática tem sido muito difícil para mim. Principalmente na parte de sobreposição, no qual a Luri - inteligência artificial da alura, me sugeriu esse exemplo para colocar o botão e a textarea por cima da imagem, mas surgiram diversos outros problemas que eu não sabia como resolver. Por exemplo, ao usar o posicionamento relativo na imagem para que ela se torne um contêiner e absoluto no botão copiar e no elemento textarea que exibiria a mensagem, e funcionou para deixar os elementos por cima da imagem (foi assim que eu entendi o design proposto no momento) e ficou parecido com o design isso até implementar as outras partes e fazer a execução para testar. Diversos outros problemas começaram a surgir, tipo quando executava a parte de desaparecer a imagem e mostrar apenas a textarea e o botão copiar, esses elementos se deslocavam e ficavam desalinhados na página. Então, tinha que pensar em outra forma de refazer essa parte. 

Em outro momento ao fazer a parte do rodapé, criei uma borda para deixar essa parte com um pouco de destaque, mas ficou um grande espaçamento vazio na parte inferior e os elementos da tag Footer e da tag Main ficavam no meio da página. E mesmo com as sugestões da Luri, como fixar o rodapé na parte inferior da página, adicionar altura mínima de 100vh, ficava mudando uma coisa aqui ou coisa ali, não mudava praticamente nada. Acho que era por causa da sopreposição absoluta e devia ter outras coisas mais, não conseguia fazer a tag main ocupar todo o espaço da tela, e principalmente o espaço vazio entre a parte inferior e o meio da página. Apesar de toda a ajuda e sugestões da Luri, não importava as modificações que eu fazia, a parte do design só piorava. Passei alguns dias só tentando resolver esses problemas. No fim Resolvi recomeçar do zero e fazer algo extremamente simples, apenas a textarea e os botões e terminar a parte do Javascript, que é no mínimo fazer a aplicação funcionar.

A parte da lógica consegui fazer com muito menos tempo do que perdi tentando consertar o design da minha página. A base já estava funcionando, só falta fazer as validações e alguns outros detalhes.  A parte da validação tive mais dificuldade, eu optei por usar o addEventListening, que fica ativado a partir do primeiro carregamento da página e fica monitorando o que ocorre em determinado elemento a cada alteração, usei para fazer o bloqueio de letras maiúsculas e dos caracteres especiais. E tentei usar esse evento para monitorar o momento que fosse feito o evento de 'click' no botão e caso o usuário não digitasse nada, mostrasse uma mensagem. Não deu certo, e no final tinha uma forma simples de resolver isso. Eu terminei tudo no dia e subi para o GitHub 25/07/2024, com o design simples, e como tem apenas esse desafio na segunda fase, resolvi tentar aprender mais sobre posicionamento e tentar no mínimo criar o mesmo design proposto e entregar um projeto não apenas funcional, mas bonito.

Como conclusão do desafio hoje subi essa que espero ser a versão final. Tentei fazer uma layout próprio, mas continue com problemas com o CSS e Html. Acontecia os mesmos bugs bizarros de ficar um espaçamento gigantesco em baixo e o elemento da tag footer ficar próximo dos demais elementos. Colocava position: fixed que resolvia, entretanto quando aumenta o tamanho da imagem próximo de 1800 pixel, a borda que defini na tag footer começa a se deslocar para cima e fica sobrepondo outros elementos. Se Fizer isso esse problema ocorre e não sei como corrigir, mas apenas é visível se inspecionar e ficar aumentando a tela, isso eu vejo a partir do monitor que possuo (1920 x 1080). Quando começo a aumentar a largura esse problema ocorre, mas se abrir a página e usar normalmente isso não acontece. Não sei se realmente é um problema. No caso eu fiz todo o layout hoje usando como referência a resolução que foi enviada como ajuda. Usei apenas na parte do CSS, quanto a parte do JavaScript tive apenas que fazer a imagem desaparecer ao clica nos botões criptografar e descriptografar.

Com a ajuda do suporte da comunidade consegui corrigir o problema e estou concluindo a versão para PC 07/08/2024.

## 📁 Acesso ao projeto

Você pode acessar o site clicando [aqui](https://challenger-desafio-1.vercel.app/).
