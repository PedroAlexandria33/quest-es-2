function verificarLetraA(texto) {
    // Converter a string para minúsculas e contar quantas vezes 'a' aparece
    const contagemA = texto.toLowerCase().split('a').length - 1;
    
    if (contagemA > 0) {
        console.log(`A letra 'a' (maiúscula ou minúscula) foi encontrada ${contagemA} vez(es).`);
    } else {
        console.log("A letra 'a' (maiúscula ou minúscula) não foi encontrada.");
    }
}

// Exemplo de uso: Digite a palavra que você deseja
const textoUsuario = "Calor"
verificarLetraA(textoUsuario);